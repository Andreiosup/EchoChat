interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({
    type = "button",
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
  }) => {
    return ( 
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`
          flex 
          justify-center 
          rounded-md 
          px-3 
          py-2
          gap-2
          text-sm 
          font-semibold 
          focus-visible:outline 
          focus-visible:outline-2 
          focus-visible:outline-offset-2 
          ${disabled ? 'opacity-50 cursor-default' : ''}
          ${fullWidth ? 'w-full' : ''}
          ${secondary ? 'text-gray-900' : 'text-white'}
          ${danger ? 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600' 
          : 'bg-orange-500 hover:bg-orange-600 focus-visible:outline-orange-600'} // Purple button color
        `}
      >
        {children}
      </button>
    );
  }
  
  export default Button;
  