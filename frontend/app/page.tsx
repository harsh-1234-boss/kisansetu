import Navbar from "@/components/navbar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import QuickStats from "@/components/dashboard/QuickStats";
import PaymentCard from "@/components/dashboard/PaymentCard";
import MspCard from "@/components/dashboard/MspCard";
import ProcurementSection from "@/components/dashboard/ProcurementSection";
import BottomNav from "@/components/dashboard/bottom-nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="mx-auto max-w-7xl">
        <WelcomeCard />

        <QuickStats />

        <PaymentCard />

        <MspCard />

        <ProcurementSection />
      </div>

      <BottomNav />
    </main>
  );
}