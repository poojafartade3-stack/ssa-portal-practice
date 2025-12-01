import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function AddCoursePage() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await api.get("/courses/");
      setCourses(res.data);
    } catch (err) {
      console.error("Error loading courses", err);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    if (!courseName.trim()) {
      alert("Course name is required");
      return;
    }

    try {
      await api.post("/courses/", { course_name: courseName });
      setCourseName("");
      loadCourses();
    } catch (err) {
      console.error("Error adding course", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      await api.delete(`/courses/${id}`);
      loadCourses();
    } catch (err) {
      console.error("Error deleting course", err);
    }
  };

  const handleUpdate = async (id) => {
    if (!editName.trim()) {
      alert("Course name is required");
      return;
    }

    try {
      await api.put(`/courses/${id}`, { course_name: editName });
      setEditId(null);
      setEditName("");
      loadCourses();
    } catch (err) {
      console.error("Error updating course", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>

      {/* Add Course */}
      <form onSubmit={handleAddCourse} className="bg-white p-4 rounded shadow mb-6">
        <h3 className="font-semibold mb-2">Add New Course</h3>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. NEET"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </form>

      {/* Courses Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <h3 className="font-semibold mb-3">Existing Courses</h3>

        {courses.length === 0 ? (
          <p className="text-gray-600">No courses added yet.</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="border p-2 w-3/4">Course Name</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((c) => (
                <tr key={c.id} className="border hover:bg-gray-50">
                  <td className="border p-2">
                    {editId === c.id ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      <span>{c.course_name}</span>
                    )}
                  </td>

                  <td className="border p-2 text-center">
                    {editId === c.id ? (
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          onClick={() => handleUpdate(c.id)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                          onClick={() => setEditId(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                          onClick={() => {
                            setEditId(c.id);
                            setEditName(c.course_name);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                          onClick={() => handleDelete(c.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
