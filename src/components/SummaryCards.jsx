import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

export default function SummaryCards() {
  const { friends, timelineEntries } = useAppContext();

  const data = useMemo(() => {
    const onTrack = friends.filter((friend) => friend.status === "on-track").length;
    const needAttention = friends.filter((friend) => friend.status !== "on-track").length;
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const thisMonthInteractions = timelineEntries.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate.getMonth() === month && entryDate.getFullYear() === year;
    }).length;

    return [
      { label: "Total Friends", value: friends.length },
      { label: "On Track", value: onTrack },
      { label: "Need Attention", value: needAttention },
      { label: "Interactions This Month", value: thisMonthInteractions },
    ];
  }, [friends, timelineEntries]);

  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {data.map((item) => (
        <div
          key={item.label}
          className="card-shadow soft-border rounded-2xl bg-white px-6 py-8 text-center"
        >
          <p className="text-5xl font-bold text-[#275d47]">{item.value}</p>
          <p className="mt-4 text-lg text-slate-500">{item.label}</p>
        </div>
      ))}
    </section>
  );
}