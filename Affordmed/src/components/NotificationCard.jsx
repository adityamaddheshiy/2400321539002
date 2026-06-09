export default function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
      }}
    >
      <h3>{notification.Title || notification.Message}</h3>

      {notification.Type && (
        <p>
          <strong>Type:</strong> {notification.Type}
        </p>
      )}

      {notification.Timestamp && (
        <p>
          <strong>Time:</strong> {notification.Timestamp}
        </p>
      )}

      {notification.Message && notification.Title && (
        <p>{notification.Message}</p>
      )}
    </div>
  );
}