import axios from "axios";
import { getAuthToken } from "./session";

export const listCategories = async () => {
  const result = await axios.get("http://localhost:8080/categories", {
    headers: { authToken: getAuthToken() },
  });
  return result.data;
};

export const createCategory = (name) =>
  axios.post(
    "http://localhost:8080/categories",
    { name },
    { headers: { authToken: getAuthToken() } }
  );

export const deleteCategory = (id) =>
  axios.delete(`http://localhost:8080/categories/${id}`, {
    headers: { authToken: getAuthToken() },
  });
