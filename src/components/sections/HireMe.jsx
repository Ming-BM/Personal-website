import { useState, useRef } from 'react';


const HireMe = () => {
  const [rejectPosition, setRejectPosition] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false);
  const containerRef = useRef(null);

  const handleRejectHover = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      // Calculate available space for button movement
      const maxX = containerRect.width - 150; // 150px is button width
      const maxY = containerRect.height - 50; // 50px is button height

      // Generate random position
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      setRejectPosition({ x: randomX, y: randomY });
    }
  };

  const handleAccept = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Great Choice!</h2>
          <p className="text-xl text-gray-600">Looking forward to working with you!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-2xl h-96 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center"
      >
        <div>
          <img
            src="/images/cat.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-6 object-cover shadow-lg"
          />
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Would You Hire Me?
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Make your decision wisely...
        </p>

        <div className="flex gap-6">
          <button
            onClick={handleAccept}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Yes, I'll Hire You! ✓
          </button>

          <button
            onMouseEnter={handleRejectHover}
            style={{
              position: 'absolute',
              left: `${rejectPosition.x}px`,
              top: `${rejectPosition.y}px`,
              transition: 'all 0.3s ease'
            }}
            className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg"
          >
            No, Sorry ✗
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-400 text-center">
          Make your choice
        </p>
      </div>
    </section>
  );
};

export default HireMe;
