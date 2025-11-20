import api from "./api";

export const createCourse = (data) => api.post("/courses", data);
export const getCourses = () => api.get("/courses");
