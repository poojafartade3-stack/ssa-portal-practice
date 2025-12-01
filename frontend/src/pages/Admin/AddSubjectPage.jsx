import React, { useState, useEffect } from "react";
import {
  createSubject,
  getSubjects,
  updateSubject,
  deleteSubject,
} from "../../services/subjectService";

export default function AddSubjectPage() {
  const [subjectName, setSubjectName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const loadSubjects = async () => {
    try {
      const res = await getSubjects();
      setSubjects(res.data);
    } catch (err) {
      console.error("Error loading subjects", err);
    }
  };

  useEffect(() => {
    loadSubjects();
  }, []);

  const handleAdd = async () => {
    if (!subjectName.trim()) {
      alert("Please enter subject name");
      return;
    }

    try {
      await createSubject({ subject_name: subjectName });
      setSubjectName("");
      await loadSubjects();
    } catch (err) {
      alert(err.response?.data?.detail || "Error adding subject");
    }
  };

  const handleUpdate = async (id) => {
    if (!editName.trim()) {
      alert("Subject name required");
      return;
    }

    try {
      await updateSubject(id, { subject_name: editName });
      setEditId(null);
      setEditName("");
      await loadSubjects();
    } catch (err) {
      alert(err.response?.data?.detail || "Error updating subject");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subject?")) return;

    try {
      await deleteSubject(id);
      await loadSubjects();
    } catch (err) {
      alert(err.response?.data?.detail || "Error deleting subject");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Subjects</h2>

      {/* Add Subject */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="font-semibold mb-2">Add New Subject</h3>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. Physics"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      {/* Subjects List */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <h3 className="font-semibold mb-3">Existing Subjects</h3>

        {subjects.length === 0 ? (
          <p className="text-gray-600">No subjects added yet.</p>
        ) : (
          <table className="w-full border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="border p-2 w-3/4">Subject Name</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((s) => (
                <tr key={s.id} className="border hover:bg-gray-50">
                  <td className="border p-2">
                    {editId === s.id ? (
                      <input
                        className="border p-1 rounded w-full"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      <span>{s.subject_name}</span>
                    )}
                  </td>

                  <td className="border p-2 text-center">
                    {editId === s.id ? (
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          onClick={() => handleUpdate(s.id)}
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
                            setEditId(s.id);
                            setEditName(s.subject_name);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                          onClick={() => handleDelete(s.id)}
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
