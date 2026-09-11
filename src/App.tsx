import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
import type { ITech } from "./types/tech";

function App() {
  const [selectedTechs, setSelectedTechs] = useState<ITech[]>([]);

  const handleAdd = (tech: ITech) => {
    setSelectedTechs((prev) => [...prev, tech]);
  };

  const handleRemove = (id: number) => {
    setSelectedTechs((prev) => prev.filter((t) => t.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_320px]">
          <TechGrid selectedTechs={selectedTechs} onAdd={handleAdd} />
          <YourStack
            selectedTechs={selectedTechs}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;