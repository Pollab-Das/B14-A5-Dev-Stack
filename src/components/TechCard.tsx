import type { ITech } from "../types/tech";
import { FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

interface TechCardProps {
  tech: ITech;
  isSelected: boolean;
  onAdd: (tech: ITech) => void;
}

const TechCard = ({ tech, isSelected, onAdd }: TechCardProps) => {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition ${
        isSelected
          ? "border-pink-200"
          : "border-gray-200 hover:shadow-md"
      }`}
    >
      {/* Top: Logo + Badge */}
      <div className="flex items-start justify-between">
        <img src={tech.logo} alt={tech.name} className="h-14 w-14" />
        {tech.badge && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${tech.badgeColor}`}
          >
            {tech.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mt-6 text-xl font-bold text-slate-900">{tech.name}</h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-gray-500">
        {tech.description}
      </p>

      

      {/* Meta + Button (নিচে পিন করা) */}
      <div className="mt-auto pt-6">

        {/* Divider line — হালকা বর্ডার */}
        <div className="mb-4 border-t border-gray-300" />
        {/* Meta row — ডানে স্পষ্ট গ্যাপ (pr-2) যোগ করা হয়েছে */}
        <div className="flex items-center gap-2 pr-1 text-sm">
          {/* Left: Category badge */}
          <span className="shrink-0 rounded-md bg-gray-100 px-1 py-1 font-medium text-gray-600">
            {tech.category}
          </span>

          {/* Middle: Level — মাঝখানে সেন্টার করা */}
          <span className="flex-1 whitespace-nowrap text-center text-gray-400">
            {tech.level}
          </span>

          {/* Right: Rating — shrink-0 + ডান দিকে গ্যাপ */}
          <span className="flex shrink-0 items-center gap-1 font-semibold text-amber-500">
            <FaStar className="text-amber-400" size={14} />
            {tech.rating}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isSelected}
          className={`mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold transition ${
            isSelected
              ? "cursor-not-allowed bg-pink-50 text-pink-600"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isSelected ? (
            <>
              <IoCheckmark size={16} />
              Added to Stack
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;