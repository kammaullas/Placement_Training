import { FaUsers } from "react-icons/fa";

function CourseCard({
  id,
  title,
  students,
  onDelete
}) {

  return (
    <div className="card">

      <h2>
        {title}
      </h2>

      <p>

        <FaUsers />

        {" "}
        Students :

        {" "}

        {students}

      </p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
        <button>
          View Course
        </button>
        {onDelete && (
          <button 
            onClick={() => onDelete(id)}
            style={{ backgroundColor: "#ff4d4f", color: "white" }}
          >
            Delete
          </button>
        )}
      </div>

    </div>
  );
}

export default CourseCard;
