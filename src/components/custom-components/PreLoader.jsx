import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../src/index.css'

const Preloader = ({ duration = 2000 }) => { // Duration in milliseconds, default 2 seconds
  const [isLoading, setIsLoading] = useState(true);
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center gap-8">
        {/* Letters Container */}
        <div className="flex items-center justify-center gap-4">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="relative text-4xl font-bold text-white tracking-wider"
              style={{
                animation: 'letterPulse 2s infinite',
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {letter}
              <span 
                className="absolute -bottom-2 left-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-transparent"
                style={{
                  transform: 'translateX(-50%)',
                  animation: 'glowPulse 2s infinite',
                  animationDelay: `${index * 0.15}s`,
                }}
              ></span>
            </span>
          ))}
        </div>

        {/* Loading Line - Now below the letters */}
        <div className="w-[200px] h-[2px] overflow-hidden mt-4">
          <div 
            className="h-full w-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"
            style={{
              animation: 'loadingLine 1.5s infinite linear'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
Preloader.propTypes = {
  duration: PropTypes.number,
};

export default Preloader;
