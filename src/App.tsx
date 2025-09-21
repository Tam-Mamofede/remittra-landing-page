import React from "react";
import Footer from "./components/Footer";
import CTAButton from "./components/Button";
import FeatureCard from "./components/FeatureCard";
import type { Feature } from "./types/FeatureTypes";
import { CreditCardIcon, Send, Users2, Wallet2 } from "lucide-react";

const features: Feature[] = [
  {
    id: "multi",
    title: "Multi-Currency Wallet",
    description:
      "Hold, convert and manage multiple currencies with low fees and instant rates.",
    icon: <Wallet2 className="w-6 h-6 text-sky-600" />,
  },
  {
    id: "ajo",
    title: "Ajo Savings Groups",
    description:
      "Create or join savings circles, set contributions and track group payouts.",
    icon: <Users2 className="w-6 h-6 text-sky-600" />,
  },
  {
    id: "virtual",
    title: "Virtual Cards",
    description:
      "Instant virtual cards for secure online payments and subscription control.",
    icon: <CreditCardIcon className="w-6 h-6 text-sky-600" />,
  },
  {
    id: "p2p",
    title: "P2P Transfers",
    description:
      "Send and receive money instantly with friends and family across borders.",
    icon: <Send className="w-6 h-6 text-sky-600" />,
  },
];

const LandingPage: React.FC = () => {
  return (
    <div
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      className="min-h-screen bg-gradient-to-b from-white to-white/90 text-slate-900"
    >
      {/* Hero section */}
      <header className="w-full" style={{ backgroundColor: "#00BFFF" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col">
          <h1 className="text-center md:text-left mb-10 text-4xl font-bold text-white">
            Remittra
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Your All-in-One Multi-Currency Wallet
              </h1>
              <p className="mt-4 text-white/90 max-w-xl mx-auto md:mx-0">
                Send, save and spend across borders. Built for people who move
                money.
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex   flex-col items-center gap-4">
              <CTAButton className="bg-white text-sky-600 hover:brightness-95">
                Get Started
              </CTAButton>
            </div>
          </div>
        </div>
      </header>

      {/* Features section*/}
      <main>
        <section id="features" className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Features</h2>
            <p className="mt-2 text-slate-600">
              Everything you need to manage money across currencies and borders.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.id} feature={f} />
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-gradient-to-r from-[#00BFFF]/40 to-white/40 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Ready to simplify your finances?
              </h3>
              <p className="text-sm text-slate-600">
                Create an account and start sending money the modern way.
              </p>
            </div>
            <div>
              <CTAButton className="bg-sky-600 text-white">
                Get Started
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Footer section */}
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
