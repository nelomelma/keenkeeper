export default function PageLoader() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
      <div className="loader" />
      <p className="text-slate-500">Loading friends data...</p>
    </div>
  );
}