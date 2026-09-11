import type { ITech } from "../types/tech";
import { IoClose } from "react-icons/io5";

interface YourStackProps {
  selectedTechs: ITech[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>

      {/* Count text */}
      {selectedTechs.length === 0 ? (
        <p className="mt-0.5 text-xs text-gray-400">
          No technologies selected yet.
        </p>
      ) : (
        <p className="mt-0.5 text-xs text-gray-400">
          {selectedTechs.length} Technology Selected
        </p>
      )}

      {/* Empty state */}
      {selectedTechs.length === 0 ? (
        <div className="mt-3 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 py-8">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-3 flex flex-col gap-2">
            {selectedTechs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-2.5 py-2"
              >
                <div className="flex items-center gap-2">
                  <img src={tech.logo} alt={tech.name} className="h-6 w-6" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {tech.name}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      {tech.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-400 transition hover:text-red-500"
                >
                  <IoClose size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-300 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;