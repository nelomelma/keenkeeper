export function formatStatus(status) {
  if (status === "on-track") return "On-Track";
  if (status === "almost due") return "Almost Due";
  if (status === "overdue") return "Overdue";
  return status;
}

export function statusClass(status) {
  if (status === "overdue") return "status-overdue";
  if (status === "almost due") return "status-almost-due";
  return "status-on-track";
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function interactionIcon(type) {
  if (type === "call") return "📞";
  if (type === "text") return "💬";
  if (type === "video") return "📹";
  return "🤝";
}