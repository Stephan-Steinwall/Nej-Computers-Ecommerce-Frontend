import { useState, useEffect } from 'react';
import { PrimaryBtn, SecondaryBtn } from './custom-components';
import { Flame } from 'lucide-react';

const slides = [
  {
    id: 1,
    bgImage: "https://helios-i.mashable.com/imagery/articles/05MWwHhUKuh33Ic3lHIKDMl/hero-image.fill.size_1248x702.v1623385155.png",
    title: {
      line1: "Find Everything",
      line2: "For",
      highlight: "your needs"
    },
    description: "Buy Globally recognized laptops and Computer parts With Nej Computers today!,Expertise in Global laptop Market.",
    price: ""
  },
  {
    id: 2,
    bgImage: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/asus-vs-acer-which-brand-makes-better-laptops-game-rant-feature.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
    title: {
      line1: "Find Everything",
      line2: "For",
      highlight: "your needs"
    },
    description: "Buy Globally recognized laptops and Computer parts With Nej Computers today!,Expertise in Global laptop Market.",
    price: ""
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Handle initial loading and mount animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsLoading(false);
          setIsVisible(true);
          return 100;
        }
        return prev + 2;
      });
    }, 10);

    return () => clearInterval(progressInterval);
  }, []);

  // Handle slide autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-[600px] bg-black/90 flex items-center justify-center">
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FF4C1E] transition-all duration-200 rounded-full"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <section 
      className={`relative h-[650px] overflow-hidden bg-black transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out
              ${index === currentSlide ? 'scale-105 opacity-100' : 'scale-100 opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full max-w-4xl py-12">
          {/* Promo tag */}
          <div className="flex items-center space-x-2 mb-6 animate-fade-in-up">
            <Flame className="text-[#FF4C1E]" size={24} />
            <span className="text-[#FF4C1E]">GET</span>
            <span className="text-[#FF4C1E] font-bold">25% OFF</span>
            <span className="text-white">NOW</span>
          </div>

          {/* Main heading */}
          <div className="space-y-2 mb-6 animate-fade-in-up delay-100">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {slides[currentSlide].title.line1}
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-white">{slides[currentSlide].title.line2} </span>
              <span className="text-[#FF4C1E]">{slides[currentSlide].title.highlight}</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/80 text-lg max-w-2xl mb-6 animate-fade-in-up delay-200">
            {slides[currentSlide].description}
          </p>

          {/* Price */}
          <div className="mb-8 animate-fade-in-up delay-300">
            <span className="text-white/80 block mb-1">Starting Price</span>
            <span className="text-white text-3xl md:text-4xl font-bold">{slides[currentSlide].price}</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <PrimaryBtn>Shop Now</PrimaryBtn>
            <SecondaryBtn variant="outline">View Details</SecondaryBtn>
          </div>
        </div>

        {/* Decorative Elements with optimized animations */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-80 transition-opacity duration-500"
          style={{
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <div className="w-48 h-64 bg-gradient-to-r from-white/10 to-transparent transform hover:scale-105 transition-transform duration-500" />
        </div>
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-80 transition-opacity duration-500"
          style={{
            animation: 'float 6s ease-in-out infinite reverse',
          }}
        >
          <div className="w-48 h-64 bg-gradient-to-l from-white/10 to-transparent transform hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

// Add required keyframes to your global CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(-50%) translateX(0); }
    50% { transform: translateY(-50%) translateX(20px); }
  }
  
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
  
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
`;
document.head.appendChild(style);

export default Banner;