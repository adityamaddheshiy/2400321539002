const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const calculateScore = (notification) => {
  return (
    weights[notification.Type] * 1000000000000 +
    new Date(notification.Timestamp).getTime()
  );
};

export const getTopNotifications = (
  notifications,
  limit = 10
) => {
  return [...notifications]
    .sort(
      (a, b) =>
        calculateScore(b) - calculateScore(a)
    )
    .slice(0, limit);
};