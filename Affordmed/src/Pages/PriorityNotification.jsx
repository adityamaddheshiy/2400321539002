import { useEffect, useState } from "react";
import { fetchNotifications } from "../Services/notification";
import { getTopNotifications } from "../utils/notifiactionRanks";
import NotificationCard from "../components/NotificationCard";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchNotifications();
        const topNotifications = getTopNotifications(
          data.notifications || [],
          10
        );

        setNotifications(topNotifications);
      } catch (err) {
        setError(err.message || "Unable to load priority notifications.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section>
      <h1>Priority Notifications</h1>

      {loading && <p>Loading priority notifications...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && notifications.length === 0 && (
        <p>No priority notifications available.</p>
      )}

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </section>
  );
}

export default PriorityNotifications;
