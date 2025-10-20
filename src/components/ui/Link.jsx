const Link = ({ 
  href, 
  children, 
  className = '', 
  target,
  rel,
  ...rest 
}) => {
  // Your default Tailwind classes
  const defaultClasses = "relative text-[#8e8e93] font-medium no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#8e8e93] after:to-[#4a4a4c] after:transition-all after:duration-300 hover:after:w-full hover:text-[#aeaeb2]";
  
  // Combine default classes with any additional classes passed via props
  const combinedClasses = `${defaultClasses} ${className}`.trim();
  
  return (
    <a 
      href={href} 
      className={combinedClasses}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
