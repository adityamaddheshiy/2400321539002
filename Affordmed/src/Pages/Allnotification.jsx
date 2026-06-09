import { useEffect, useState } from "react";
import { getNotifications } from "../Api/notificationApi";
import Filters from "../components/NotifiactionFilters";
import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const page = 1;
  const [type, setType] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getNotifications({
          page,
          limit: 10,
          type,
        });

        setNotifications(data.notifications || []);
      } catch (err) {
        setError(err.message || "Unable to load notifications.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, type]);

  return (
    <section>
      <h1>All Notifications</h1>

      <Filters type={type} setType={setType} />

      {loading && <p>Loading notifications...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && notifications.length === 0 && (
        <p>No notifications available.</p>
      )}

      {notifications.map((n) => (
        <NotificationCard key={n.ID} notification={n} />
      ))}
    </section>
  );
}

export default AllNotifications;