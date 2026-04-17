import { useMemo, useState } from "react";
import TimelineItem from "../components/TimelineItem";
import { useAppContext } from "../context/AppContext";

export default function TimelinePage() {
  const { timelineEntries } = useAppContext();
  const [filter, setFilter] = useState("all");

  const sortedEntries = useMemo(() => {
    const filtered =
      filter === "all"
        ? timelineEntries
        : timelineEntries.filter((entry) => entry.type === filter);

    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [timelineEntries, filter]);

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto container-width">
        <h1 className="text-4xl font-extrabold text-slate-800 md:text-6xl">Timeline</h1>

        <div className="mt-8 max-w-xs">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-500 outline-none"
          >
            <option value="all">Filter timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
            <option value="meetup">Meetup</option>
          </select>
        </div>

        <div className="mt-5 space-y-4">
          {sortedEntries.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}