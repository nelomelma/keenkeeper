import StatsChart from "../components/StatsChart";

export default function StatsPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto container-width">
        <h1 className="text-4xl font-extrabold text-slate-800 md:text-6xl">Friendship Analytics</h1>
        <div className="mt-8">
          <StatsChart />
        </div>
      </div>
    </div>
  );
}