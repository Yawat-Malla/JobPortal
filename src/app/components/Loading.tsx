import React from "react";

const Loading: React.FC = () => {
  const numDots = 8;
  const baseColor = "#38bdf8"; // Tailwind sky-400
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {[...Array(numDots)].map((_, i) => {
          // Fading opacity for trailing effect
          const opacity = 0.4 + 0.6 * (i / (numDots - 1));
          return (
            <span
              key={i}
              className="absolute w-6 h-6 rounded-full"
              style={{
                top: `${48 + 40 * Math.sin((i * 2 * Math.PI) / numDots)}%`,
                left: `${48 + 40 * Math.cos((i * 2 * Math.PI) / numDots)}%`,
                backgroundColor: baseColor,
                opacity,
                animation: `loading-bounce 1.2s linear infinite`,
                animationDelay: `${i * 0.12}s`,
              }}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes loading-bounce {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          20% { transform: scale(1.2); opacity: 1; }
          80% { transform: scale(0.9); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default Loading;
