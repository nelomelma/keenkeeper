import { Link } from "react-router-dom";
import { formatStatus, statusClass } from "../utils/helpers";

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="card-shadow soft-border block rounded-2xl bg-white p-6 text-center hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-24 w-24 rounded-full object-cover"
      />

      <h3 className="mt-5 text-2xl font-bold text-slate-800">{friend.name}</h3>
      <p className="mt-2 text-sm text-slate-400">{friend.days_since_contact}d ago</p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag) => (
          <span key={tag} className="tag-chip rounded-full px-3 py-1 text-xs font-semibold uppercase">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold ${statusClass(friend.status)}`}>
          {formatStatus(friend.status)}
        </span>
      </div>
    </Link>
  );
}