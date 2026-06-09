const api = axios.create({
  baseURL: "http://20.244.56.144/evaluation-service/notifications",
});

api.get("/notifications");