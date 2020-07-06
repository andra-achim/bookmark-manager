import axios from "axios";
import { getAuthToken } from "./session";

export const listBookmarks = async (categoryId) => {
  const result = await axios.get(
    `http://localhost:8080/categories/${categoryId}/bookmarks`,
    {
      headers: { authToken: getAuthToken() },
    }
  );
  return result.data;
};

export const createBookmark = (title, url, categoryId) =>
  axios.post(
    `http://localhost:8080/categories/${categoryId}/bookmarks`,
    { title, url },
    { headers: { authToken: getAuthToken() } }
  );

export const deleteBookmark = (categoryId, id) =>
  axios.delete(
    `http://localhost:8080/categories/${categoryId}/bookmarks/${id}`,
    {
      headers: { authToken: getAuthToken() },
    }
  );
