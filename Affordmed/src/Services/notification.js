import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);

      const detail =
        error.response.data?.message ||
        error.response.statusText ||
        error.message;

      const responseError = new Error(
        `Failed to fetch notifications (${error.response.status}): ${detail}`
      );
      responseError.cause = error;
      throw responseError;
    }

    const networkError = new Error(
      `Network Error: ${error.message || "Unable to reach the server."}`
    );
    networkError.cause = error;
    throw networkError;
  }
};