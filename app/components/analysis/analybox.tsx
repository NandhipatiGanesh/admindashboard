import React from "react";
import { ArrowUpRight } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  bgColor: string; // Tailwind background class
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  positive,
  bgColor,
}) => {
  return (
    <div
      className={`rounded-2xl p-4 w-full sm:w-auto h-[130px] flex flex-col justify-between ${bgColor} text-white`}
    >
      <p className="text-sm text-white/80">{title}</p>
      <div className="flex items-center justify-between mt-auto">
        <p className="text-2xl font-semibold">{value}</p>
        <div className="flex items-center gap-1 text-sm font-medium">
          <span className={positive ? "text-green-400" : "text-red-400"}>
            {positive ? "+" : "-"}
            {change}
          </span>
          <div className="bg-white/10 p-1 rounded-full">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewCards: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Overview</h2>
        <div className="text-sm text-gray-500">Today ⌄</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Views"
          value="7,265"
          change="11.01%"
          positive={true}
          bgColor="bg-gradient-to-br from-blue-500 to-blue-400"
        />
        <StatCard
          title="Visits"
          value="3,671"
          change="0.03%"
          positive={false}
          bgColor="bg-gradient-to-br from-neutral-900 to-gray-800"
        />
        <StatCard
          title="New Users"
          value="256"
          change="15.03%"
          positive={true}
          bgColor="bg-gradient-to-br from-blue-500 to-blue-400"
        />
        <StatCard
          title="Active Users"
          value="2,318"
          change="6.08%"
          positive={true}
          bgColor="bg-gradient-to-br from-neutral-900 to-gray-800"
        />
      </div>
    </div>
  );
};

export default OverviewCards;
