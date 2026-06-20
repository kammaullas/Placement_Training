const Course =
    require("../models/Course");

// GET ALL COURSES

    const getCourses =
    async (req, res) => {
        try {
            const courses =
                await Course.find({ user: req.user._id });

            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    const getAllCourses = async (req, res) => {
        try {
            const courses = await Course.find();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

// ADD COURSE

    const addCourse =
    async (req, res) => {
        try {
            const course =
                await Course.create({
                    user: req.user._id,
                    title: req.body.title,
                    students: req.body.students
                });

            res.status(201).json(course);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }

    };

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        
        if (course.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "User not authorized" });
        }

        await course.deleteOne();
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCourses,
    getAllCourses,
    addCourse,
    deleteCourse
};
