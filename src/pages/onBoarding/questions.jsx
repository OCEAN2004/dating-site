import { Link } from "react-router-dom";

export default function Questions() {
  return (
     <div className="min-h-screen  flex items-center justify-center bg-radial from-[#FFF1F5] via-[#FFE4EC] to-[#FFD6E7] px-4">
  <div className="w-full max-w-md backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl px-8 py-4">

        {/* Logo */}
        <h1 className="text-center text-5xl font-bold text-pink-700 font-serif">
          UniDate
        </h1>

        <p className="text-center text-gray-600 mt-3 text-lg">
          Show Your Personality
        </p>

        {/* Progress */}
        <div className="flex justify-center gap-3 mt-4 mb-4">
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-600 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
        </div>

        {/* Prompt 1 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            My ideal first date is...
          </label>
          <input
            type="text"
            className="w-full p-4 rounded-2xl bg-white border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Coffee, a walk, and good conversation..."
          />
        </div>

        {/* Prompt 2 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            A random fact about me...
          </label>
          <input
            type="text"
            className="w-full p-4 rounded-2xl bg-white border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="I can solve a Rubik's cube in under a minute."
          />
        </div>

        {/* Prompt 3 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            I'll fall for you if...
          </label>
          <input
            type="text"
            className="w-full p-4 rounded-2xl bg-white border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="You make me laugh."
          />
        </div>

        {/* Prompt 4 */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            The quickest way to my heart is...
          </label>
          <input
            type="text"
            className="w-full p-4 rounded-2xl bg-white border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Being genuine and kind."
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link to="/profile_setup" className="w-1/3">
            <button
              className="
                w-full
                py-3
                rounded-2xl
                border
                border-pink-300
                bg-white
                text-pink-700
                font-medium
                hover:bg-pink-50
                transition
              "
            >
              Back
            </button>
          </Link>

          <Link to="/interests" className="w-2/3">
            <button
              className="
                w-full
                py-3
                rounded-2xl
                text-white
                font-semibold
                bg-radial
                from-[#FF4D8D]
                to-[#E11D48]
                hover:scale-[1.02]
                transition-all
                shadow-lg
              "
            >
              Continue
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}