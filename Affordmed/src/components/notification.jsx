function NotificationList({ notifications }) {
  return (
    <div>
      <h2>Top 10 Priority Notifications</h2>

      {notifications.map((notification, index) => (
        <div
          key={notification.ID}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>
            {index + 1}. {notification.Message}
          </h3>

          <p>
            <strong>Type:</strong>{" "}
            {notification.Type}
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {notification.Timestamp}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NotificationList;