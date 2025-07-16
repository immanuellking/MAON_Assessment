import { Logo } from "../../assets";

const Header = () => {
  return (
    <header className="flex justify-center py-6 border-b border-[#2A283E] sm:border-0">
      <img src={Logo} alt="Blott_logo" className="w-[120px] sm:w-[200px]" />
    </header>
  );
};

export default Header;
