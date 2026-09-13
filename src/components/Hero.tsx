import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-20 px-4 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left: Text */}
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
            Build Your Ideal
          </h1>
          <h1 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-3xl font-extrabold leading-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl">
            Development Stack
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base lg:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90">
              Explore Technologies
            </button>
            <button className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Development Stack Illustration"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;