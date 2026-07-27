import axios from "axios";
import { parseApiError } from "../utils/crewaiHelpers";

// FastAPI backend URL
const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  timeout: 300000, // 5 minutes (CrewAI may take time)
});

/**
 * Send the form data to the FastAPI backend.
 */
export async function generateContent({
  brandName,
  industry,
  selectedFile,
}) {
  const formData = new FormData();

  formData.append("brand_name", brandName);
  formData.append("industry", industry);
  formData.append("brand_file", selectedFile);

  const { data } = await api.post("/generate", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}

export { parseApiError };
export default api;