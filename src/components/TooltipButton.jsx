import React from "react";

const TooltipButton = ({
  position = "bottom",
  colors = ["bg-red-700", " bg-blue-700", "bg-green-700"],
}) => {
  const positionClasses = {
    bottom: {
      tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
      arrow: "left-1/2 transform -translate-x-2 -bottom-2",
    },
  };
  return (
    <div className="relatuve group">
      <button className="relative p-4 bg-white/25 border border-1 bg-white rounded-full text-xl">
        <div
          className={`hidden absolute  rounded-lg p-2 space-x-1 bg-white/25 shadow-md group-hover:flex ${positionClasses[position].tooltip}`}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`size-6 ${color} border border-white rounded-full`}
            ></div>
          ))}

          {/* tooltip arrow */}
          <div
            className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35 ${positionClasses[position].arrow}`}
          ></div>
        </div>
      </button>
    </div>
  );
};
export default TooltipButton;
