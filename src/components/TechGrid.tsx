import type { ITech } from "../types/tech";
import { techData } from "../data/techData";
import TechCard from "./TechCard";

interface TechGridProps {
  selectedTechs: ITech[];
  onAdd: (tech: ITech) => void;
}

const TechGrid = ({ selectedTechs, onAdd }: TechGridProps) => {
  const isSelected = (id: number) =>
    selectedTechs.some((t) => t.id === id);

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
        Explore the{" "}
        <span className="bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="mt-2 text-base text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-7 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techData.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            isSelected={isSelected(tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default TechGrid;