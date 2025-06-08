"use client";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChevronDown, MoreHorizontal, TrendingUp } from "lucide-react";
import React, { useState } from "react";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 350 },
  { name: "Apr", users: 500 },
  { name: "May", users: 400 },
  { name: "Jun", users: 450 },
];

const ChartCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Users");

  return (
    <>
      <section className="p-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          {/* Header Tabs & Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6 text-sm font-medium">
              {["Users", "Projects", "Operating Status"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? "text-purple-600"
                      : "text-gray-400 hover:text-black"
                  } transition`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button className="text-sm px-2 py-1 border rounded-md text-gray-700 flex items-center gap-1">
                Week <ChevronDown className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-md border text-gray-700">
                <TrendingUp className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-md border text-gray-700">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data} margin={{ top: 10, bottom: 20 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                strokeOpacity={0.1}
              />
              <Tooltip
                contentStyle={{ borderRadius: "8px", fontSize: "12px" }}
                cursor={false}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#a855f7"
                strokeWidth={2}
                dot={{
                  r: 5,
                  stroke: "black",
                  strokeWidth: 2,
                  fill: "white",
                }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
};

export default ChartCard;
