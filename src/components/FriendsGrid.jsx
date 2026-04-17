import FriendCard from "./FriendCard";

export default function FriendsGrid({ friends }) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold text-slate-800">Your Friends</h2>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </section>
  );
}