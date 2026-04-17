import { formatDate, interactionIcon } from "../utils/helpers";

export default function TimelineItem({ entry }) {
  return (
    <div className="card-shadow soft-border flex items-center gap-4 rounded-xl bg-white px-5 py-4">
      <div className="text-4xl">{interactionIcon(entry.type)}</div>

      <div>
        <h3 className="text-2xl font-semibold text-[#275d47]">{entry.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{formatDate(entry.date)}</p>
      </div>
    </div>
  );
}