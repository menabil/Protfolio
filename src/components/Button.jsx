const Button = ({ className, btnText }) => {
  return (
    <button
      className={`${className} py-5 px-8.5 bg-[#070707] border border-[#070707] text-[#E6EAEE] rounded-xs font-medium font-Pop hover:bg-transparent hover:text-[#070707] hover:border-[#969696] duration-350 cursor-pointer`}
    >
      {btnText}
    </button>
  );
};

export default Button;
