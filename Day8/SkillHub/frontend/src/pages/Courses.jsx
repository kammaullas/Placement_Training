import { useEffect, useState } from "react";

import API from "../api/courseApi";

function Courses() {

  const [courses, setCourses] =
    useState([]);

  useEffect(() => {

    getCourses();

  }, []);

  async function getCourses() {
    try {
      const response = await API.get("/courses");
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCourse(id) {
    try {
      await API.delete(`/courses/${id}`);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className="page-container">

      <h1>Available Courses</h1>

      <h3>
        Total Courses :
        {" "}
        {courses.length}
      </h3>

      {
        courses.map((course) => (

          <div
            key={course._id}
            className="course-item"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", border: "1px solid #ddd", marginBottom: "10px", borderRadius: "5px" }}
          >
            <div>
              📘 {course.title}
              {" "}
              ({course.students} Students)
            </div>
            <button 
              onClick={() => deleteCourse(course._id)}
              style={{ backgroundColor: "#ff4d4f", color: "white", border: "none", padding: "5px 10px", borderRadius: "3px", cursor: "pointer" }}
            >
              Delete
            </button>
          </div>

        ))
      }

    </div>

  );
}

export default Courses;
