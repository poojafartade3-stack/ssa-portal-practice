import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function AddClassPage() {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = async () => {
    try {
      const res = await api.get("/classes/");
      setClasses(res.data);
    } catch (err) {
      console.error("Error loading classes", err);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();

    if (!className.trim()) {
      alert("Class name is required");
      return;
    }

    try {
      await api.post("/classes/", { class_name: className });
      setClassName("");
      loadClasses();
    } catch (err) {
      console.error("Error adding class", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this class?")) return;

    try {
      await api.delete(`/classes/${id}`);
      loadClasses();
    } catch (err) {
      console.error("Error deleting class", err);
    }
  };

  const handleUpdate = async (id) => {
    if (!editName.trim()) {
      alert("Class name is required");
      return;
    }

    try {
      await api.put(`/classes/${id}`, { class_name: editName });
      setEditId(null);
      setEditName("");
      loadClasses();
    } catch (err) {
      console.error("Error updating class", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>

      {/* Add Class */}
      <form onSubmit={handleAddClass} className="bg-white p-4 rounded shadow mb-6">
        <h3 className="font-semibold mb-2">Add New Class</h3>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. 11th Science"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
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

      {/* List of Classes */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">Existing Classes</h3>

        {classes.length === 0 ? (
          <p className="text-gray-600">No classes added yet.</p>
        ) : (
          <ul className="space-y-2">
            {classes.map((c) => (
              <li
                key={c.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                {editId === c.id ? (
                  <input
                    className="border p-1 rounded"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  <span>{c.class_name}</span>
                )}

                <div className="flex gap-2">
                  {editId === c.id ? (
                    <>
                      <button
                        className="bg-green-600 text-white px-2 rounded"
                        onClick={() => handleUpdate(c.id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white px-2 rounded"
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-yellow-500 text-white px-2 rounded"
                        onClick={() => {
                          setEditId(c.id);
                          setEditName(c.class_name);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-2 rounded"
                        onClick={() => handleDelete(c.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
