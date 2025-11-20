import api from "./api";

export const createSubject = (data) => api.post("/subjects", data);
export const getSubjects = () => api.get("/subjects");
