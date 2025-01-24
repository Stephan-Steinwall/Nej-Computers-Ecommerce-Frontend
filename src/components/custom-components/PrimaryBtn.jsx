import PropTypes from 'prop-types';

const PrimaryBtn = ({ 
    children, 
    className = '', 
    loading = false,
    icon = null,
    ...props 
  }) => {
    return (
      <button
        className={`
          relative overflow-hidden px-8 py-3 rounded-full font-medium
          bg-[#FF4C1E] text-white
          transition-all duration-300
          hover:bg-[#ff3c05] hover:shadow-lg hover:scale-105
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        disabled={loading}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          {loading ? 'Loading...' : children}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-shimmer" />
      </button>
    );
  };

PrimaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.node,
};

export default PrimaryBtn;