import OverviewCards from "@/app/components/analysis/analybox";
import ChartCard from "@/app/components/analysis/chartCard";
import TrafficOverview from "@/app/components/analysis/TrafficOverview";
export default function Home() {
  return (
    <>
      <OverviewCards />
      <ChartCard />
      <TrafficOverview />
    </>
  );
}
