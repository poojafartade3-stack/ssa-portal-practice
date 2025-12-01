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
      await loadClasses();
    } catch (err) {
      alert(err.response?.data?.detail || "Error adding class");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this class?")) return;

    try {
      await api.delete(`/classes/${id}`);
      await loadClasses();
    } catch (err) {
      alert(err.response?.data?.detail || "Error deleting class");
      console.error(err);
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
      await loadClasses();
    } catch (err) {
      alert(err.response?.data?.detail || "Error updating class");
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>

      {/* Add Class Section */}
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

      {/* Class List Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <h3 className="font-semibold mb-3">Existing Classes</h3>

        {classes.length === 0 ? (
          <p className="text-gray-600">No classes added yet.</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="border p-2 w-3/4">Class Name</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {classes.map((c) => (
                <tr key={c.id} className="border hover:bg-gray-50">
                  <td className="border p-2">
                    {editId === c.id ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      <span>{c.class_name}</span>
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
                            setEditName(c.class_name);
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
