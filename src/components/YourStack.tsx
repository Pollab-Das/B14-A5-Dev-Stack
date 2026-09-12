import type { ITech } from "../types/tech";
import { IoClose } from "react-icons/io5";
import { toast, Bounce } from "react-toastify";

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
  const handleRemove = (tech: ITech) => {
    onRemove(tech.id);

    // Remove-এর টোস্ট
    toast.info(`${tech.name} removed from your stack`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    onRemoveAll();

    // Remove All-এর টোস্ট
    toast.warning("Stack cleared", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="sticky mt-25.5 top-24 h-fit max-h-[calc(100vh-120px)] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>

      {/* Count text */}
      {selectedTechs.length === 0 ? (
        <p className="mt-1.5 text-sm text-gray-500">
          No technologies selected yet.
        </p>
      ) : (
        <p className="mt-0.5 text-sm text-gray-500">
          {selectedTechs.length} Technology Selected
        </p>
      )}

      {/* Empty state */}
      {selectedTechs.length === 0 ? (
        <div className="mt-3.5 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 py-9">
          <p className="text-sm text-gray-500">Your stack is empty.</p>
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
                    <p className="text-[10px] text-gray-500">
                      {tech.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(tech)}
                  className="text-gray-400 transition hover:text-red-500"
                >
                  <IoClose size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={handleRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-500 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;