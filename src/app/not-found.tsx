"use client";

import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <div className="text-white h-screen flex items-center justify-center">
      <FuzzyText
        baseIntensity={0.3}
        hoverIntensity={0.5}
        enableHover={true}
        fontWeight={400}
        color="#ffffff"
        fontSize={70}
      >
        404 not-found
      </FuzzyText>
    </div>
  );
}
