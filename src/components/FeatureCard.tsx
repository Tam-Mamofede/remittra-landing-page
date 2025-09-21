import React from "react";
import type { Feature } from "../types/FeatureTypes";

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <article
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/90
             shadow-sm transition-transform duration-200 hover:-translate-y-2 
             hover:shadow-lg hover:shadow-sky-100"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20 mb-3">
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{feature.description}</p>
    </article>
  );
};
export default FeatureCard;
