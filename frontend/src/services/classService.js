import api from "./api";

export const createClass = (data) => api.post("/classes", data);
export const getClasses = () => api.get("/classes");
