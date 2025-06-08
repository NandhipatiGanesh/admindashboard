"use client";
import React, { useEffect, useState } from "react";

type BarData = {
  label: string;
  value: number;
  highlight?: boolean;
  color?: string;
};

type TrafficBarCardProps = {
  title: string;
  color: string;
  bars: BarData[];
};

const TrafficBarCard: React.FC<TrafficBarCardProps> = ({
  title,
  color,
  bars,
}) => {
  const max = Math.max(...bars.map((b) => b.value));
  const [heights, setHeights] = useState<number[]>(bars.map(() => 0));

  useEffect(() => {
    // Animate to final height after a short delay
    const timeout = setTimeout(() => {
      setHeights(bars.map((bar) => (bar.value / max) * 100));
    }, 50); // 10ms might be too quick — 50ms more reliable

    return () => clearTimeout(timeout);
  }, [bars, max]);

  return (
    <div className="bg-white rounded-2xl p-4 w-full shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-sm font-semibold ${color}`}>{title}</h3>
        <button className="text-gray-500 text-xl">⋯</button>
      </div>
      <div className="flex items-end justify-between h-40 relative">
        {bars.map((bar, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 rounded-t-xl ${
                bar.highlight ? bar.color || "bg-blue-500" : "bg-gray-200"
              }`}
              style={{
                height: `${heights[idx]}%`,
                transition: "height 0.4s ease",
              }}
            >
              {bar.highlight && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full shadow">
                  {bar.value}K
                </div>
              )}
            </div>
            <span className="text-xs text-gray-600">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficBarCard;
