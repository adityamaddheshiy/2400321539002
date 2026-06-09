import axios from "axios";

const api = axios.create({
  baseURL: "http://20.244.56.144/evaluation-service/notifications",
});

export const getNotifications = async ({
  page,
  limit,
  type,
}) => {
  const params = {};

  if (page) params.page = page;
  if (limit) params.limit = limit;
  if (type) params.notification_type = type;

  try {
    const { data } = await api.get("/notifications", {
      params,
    });

    return data;
  } catch (error) {
    const status = error.response?.status;
    const detail =
      error.response?.data?.message ||
      error.response?.statusText ||
      error.message;

    const fetchError = new Error(
      status
        ? `Failed to fetch notifications (${status}): ${detail}`
        : `Failed to fetch notifications: ${detail}`
    );
    fetchError.cause = error;
    throw fetchError;
  }
};