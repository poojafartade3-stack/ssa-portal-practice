import api from "./api";

// Get Subjects
export const getSubjects = () => {
  return api.get("/subjects/");
};

// Create Subject
export const createSubject = (data) => {
  return api.post("/subjects/", data);
};

// Update Subject
export const updateSubject = (id, data) => {
  return api.put(`/subjects/${id}`, data);
};

// Delete Subject
export const deleteSubject = (id) => {
  return api.delete(`/subjects/${id}`);
};
