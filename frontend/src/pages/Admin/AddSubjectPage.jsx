import React, { useState, useEffect } from "react";
import { createSubject, getSubjects } from "../../services/subjectService";

export default function AddSubjectPage() {
  const [subjectName, setSubjectName] = useState("");
  const [subjects, setSubjects] = useState([]);

  const loadSubjects = async () => {
    const res = await getSubjects();
    setSubjects(res.data);
  };

  useEffect(() => {
    loadSubjects();
  }, []);

  const handleAdd = async () => {
    if (!subjectName.trim()) {
      alert("Please enter subject name");
      return;
    }

    await createSubject({ subject_name: subjectName });
    setSubjectName("");
    loadSubjects();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Subjects</h1>

      <div className="bg-white p-5 shadow rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-3">Add New Subject</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="e.g. Physics"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-white p-5 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Existing Subjects</h2>

        {subjects.length === 0 ? (
          <p className="text-gray-500">No subjects added yet.</p>
        ) : (
          <div className="space-y-3">
            {subjects.map((s) => (
              <div
                key={s.id}
                className="bg-gray-50 p-3 rounded flex justify-between items-center"
              >
                <span>{s.subject_name}</span>

                <div className="flex gap-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
