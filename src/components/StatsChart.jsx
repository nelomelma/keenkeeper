import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts";
import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

const COLORS = ["#7c3aed", "#2cb67d", "#275d47"];

export default function StatsChart() {
  const { timelineEntries } = useAppContext();

  const data = useMemo(() => {
    const counts = { text: 0, call: 0, video: 0 };

    timelineEntries.forEach((entry) => {
      if (counts[entry.type] !== undefined) counts[entry.type] += 1;
    });

    return [
      { name: "Text", value: counts.text },
      { name: "Call", value: counts.call },
      { name: "Video", value: counts.video },
    ];
  }, [timelineEntries]);

  return (
    <div className="card-shadow soft-border rounded-2xl bg-white p-6 md:p-8">
      <h3 className="text-xl font-semibold text-[#275d47]">By Interaction Type</h3>
      <div className="mt-4 h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={6}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}