import React, { useState, useEffect } from "react";
import api from "../../services/api";

export default function AcademicSessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [sessionName, setSessionName] = useState("");
  const [message, setMessage] = useState("");

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      const res = await api.get("/sessions/");
      setSessions(res.data);
    } catch (err) {
      console.error("Error loading sessions", err);
    }
  };

  const handleAddSession = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!sessionName.trim()) {
      setMessage("Session name is required");
      return;
    }

    try {
      await api.post("/sessions/", { name: sessionName });

      setMessage("Session added successfully!");
      setSessionName("");
      loadSessions();
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.detail || "Error adding session");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this session?")) return;

    try {
      await api.delete(`/sessions/${id}`);
      loadSessions();
    } catch (err) {
      console.error("Error deleting session", err);
    }
  };

  const handleUpdate = async (id) => {
    if (!editName.trim()) {
      alert("Session name is required");
      return;
    }

    try {
      await api.put(`/sessions/${id}`, { name: editName });
      setEditId(null);
      setEditName("");
      loadSessions();
    } catch (err) {
      console.error("Error updating session", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Academic Sessions</h2>

      {/* Add Session */}
      <form onSubmit={handleAddSession} className="bg-white p-4 rounded shadow mb-6">
        <h3 className="font-semibold mb-2">Add New Session</h3>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. 2024-2025"
            value={sessionName}
            onChange={(e) => setSessionName(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        {message && (
          <p className="mt-2 text-sm text-green-600">{message}</p>
        )}
      </form>

      {/* List of Sessions */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">Existing Sessions</h3>

        {sessions.length === 0 ? (
          <p className="text-gray-600">No sessions added yet.</p>
        ) : (
          <ul className="space-y-2">
            {sessions.map((s) => (
              <li
                key={s.id}
                className="flex justify-between items-center border p-2 rounded"
              >
                {editId === s.id ? (
                  <input
                    className="border p-1 rounded"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  <span>{s.name}</span>
                )}

                <div className="flex gap-2">
                  {editId === s.id ? (
                    <>
                      <button
                        className="bg-green-600 text-white px-2 rounded"
                        onClick={() => handleUpdate(s.id)}
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
                          setEditId(s.id);
                          setEditName(s.name);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-600 text-white px-2 rounded"
                        onClick={() => handleDelete(s.id)}
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
