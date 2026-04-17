import {
  Archive,
  Mail,
  Phone,
  Trash2,
  Video,
  MessageSquare,
  BellOff,
  Pencil,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppContext } from "../context/AppContext";
import { formatDate, formatStatus, statusClass } from "../utils/helpers";

export default function FriendDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, loading, addTimelineEntry, updateFriendGoal } = useAppContext();

  const friend = useMemo(
    () => friends.find((item) => item.id === Number(id)),
    [friends, id]
  );

  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState(friend?.goal || 30);

  if (loading) {
    return (
      <div className="mx-auto container-width py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Loading friend details...</h1>
        </div>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="mx-auto container-width py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Friend not found</h1>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-md bg-[#275d47] px-5 py-3 font-semibold text-white"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleQuickAction = (type) => {
    addTimelineEntry(friend, type);
    toast.success(`${type[0].toUpperCase() + type.slice(1)} logged for ${friend.name}`);
  };

  const saveGoal = () => {
    updateFriendGoal(friend.id, Number(goalInput));
    setIsEditingGoal(false);
    toast.success("Relationship goal updated");
  };

  const statCards = [
    { value: friend.days_since_contact, label: "Days Since Contact" },
    { value: friend.goal, label: "Goal (Days)" },
    { value: formatDate(friend.next_due_date), label: "Next Due" },
  ];

  return (
    <div className="py-10 md:py-14">
      <div className="mx-auto container-width">
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          {/* Left column */}
          <div className="space-y-3">
            <div className="card-shadow soft-border rounded-xl bg-white px-6 py-7 text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
              />

              <h1 className="mt-4 text-[18px] font-bold text-slate-800">{friend.name}</h1>

              <div className="mt-3 flex flex-col items-center gap-2">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold ${statusClass(
                    friend.status
                  )}`}
                >
                  {formatStatus(friend.status)}
                </span>

                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-chip rounded-full px-3 py-1 text-[10px] font-semibold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-[14px] italic text-slate-500">“{friend.bio}”</p>

              <p className="mt-3 text-[12px] text-slate-400">Preferred: email</p>
            </div>

            <button className="soft-border flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <BellOff size={15} />
              Snooze 2 Weeks
            </button>

            <button className="soft-border flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Archive size={15} />
              Archive
            </button>

            <button className="soft-border flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50">
              <Trash2 size={15} />
              Delete
            </button>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {statCards.map((item) => (
                <div
                  key={item.label}
                  className="card-shadow soft-border rounded-xl bg-white px-5 py-6 text-center"
                >
                  <p className="text-[20px] font-bold text-[#275d47] md:text-[22px]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="card-shadow soft-border rounded-xl bg-white px-5 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-[16px] font-semibold text-[#275d47]">
                    Relationship Goal
                  </h2>

                  {!isEditingGoal ? (
                    <p className="mt-4 text-[15px] text-slate-600">
                      Connect every{" "}
                      <span className="font-bold text-slate-900">{friend.goal} days</span>
                    </p>
                  ) : (
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <input
                        type="number"
                        value={goalInput}
                        onChange={(e) => setGoalInput(e.target.value)}
                        className="w-full rounded-md border border-slate-300 px-4 py-2.5 outline-none focus:border-[#275d47]"
                        min="1"
                      />
                      <button
                        onClick={saveGoal}
                        className="rounded-md bg-[#275d47] px-4 py-2.5 text-sm font-semibold text-white"
                      >
                        Update Goal
                      </button>
                    </div>
                  )}
                </div>

                {!isEditingGoal ? (
                  <button
                    onClick={() => setIsEditingGoal(true)}
                    className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={saveGoal}
                    className="rounded-md bg-[#275d47] px-4 py-2 text-sm font-medium text-white"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>

            <div className="card-shadow soft-border rounded-xl bg-white px-5 py-5">
              <h2 className="text-[16px] font-semibold text-[#275d47]">Quick Check-In</h2>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <button
                  onClick={() => handleQuickAction("call")}
                  className="soft-border flex flex-col items-center justify-center rounded-xl bg-slate-50 px-4 py-8 text-slate-700 hover:border-[#275d47] hover:bg-emerald-50"
                >
                  <Phone size={26} />
                  <span className="mt-3 text-[15px] font-medium">Call</span>
                </button>

                <button
                  onClick={() => handleQuickAction("text")}
                  className="soft-border flex flex-col items-center justify-center rounded-xl bg-slate-50 px-4 py-8 text-slate-700 hover:border-[#275d47] hover:bg-emerald-50"
                >
                  <MessageSquare size={26} />
                  <span className="mt-3 text-[15px] font-medium">Text</span>
                </button>

                <button
                  onClick={() => handleQuickAction("video")}
                  className="soft-border flex flex-col items-center justify-center rounded-xl bg-slate-50 px-4 py-8 text-slate-700 hover:border-[#275d47] hover:bg-emerald-50"
                >
                  <Video size={26} />
                  <span className="mt-3 text-[15px] font-medium">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}