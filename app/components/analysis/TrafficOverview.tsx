import React from "react";
import TrafficBarCard from "./TrafficBarCard";

const TrafficOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-4">
      <TrafficBarCard
        title="Device Traffic"
        color="text-blue-600"
        bars={[
          { label: "Linux", value: 80 },
          { label: "Mac", value: 130 },
          { label: "iOS", value: 100 },
          { label: "Windows", value: 160 },
          {
            label: "Android",
            value: 243,
            highlight: true,
            color: "bg-blue-500",
          },
          { label: "Other", value: 70 },
        ]}
      />
      <TrafficBarCard
        title="Location Traffic"
        color="text-green-600"
        bars={[
          { label: "US", value: 100 },
          { label: "Canada", value: 140 },
          { label: "Mexico", value: 130 },
          { label: "China", value: 70 },
          { label: "Japan", value: 170 },
          { label: "Australia", value: 100 },
        ]}
      />
    </div>
  );
};

export default TrafficOverview;
