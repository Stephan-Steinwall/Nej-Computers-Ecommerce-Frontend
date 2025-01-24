import PropTypes from 'prop-types';

const SecondaryBtn = ({ 
    children, 
    className = '', 
    variant = 'light',
    loading = false,
    icon = null,
    ...props 
  }) => {
    const variants = {
      light: 'bg-white text-[#FF4C1E] hover:bg-gray-50',
      outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#FF4C1E]'
    };
  
    return (
      <button
        className={`
          relative overflow-hidden px-8 py-3 rounded-full font-medium
          transition-all duration-300
          hover:shadow-lg hover:scale-105
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variants[variant]}
          ${className}
        `}
        disabled={loading}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          {loading ? 'Loading...' : children}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent hover:-translate-x-full hover:animate-shimmer" />
      </button>
    );
  };

SecondaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'outline']),
  loading: PropTypes.bool,
  icon: PropTypes.node,
  props: PropTypes.object
};

export default SecondaryBtn;