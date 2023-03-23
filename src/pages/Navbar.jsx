import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MobileNav from "../components/mobileNav/mobilenav-component";
import DesktopNav from "../components/desktopNav/desktopnav-component";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
    setOpenNav(!openNav);
  };
  return (
    <div className="m-auto lg:max-w-4xl md:max-w-2xl">
      {!openNav ? (
        <AiOutlineMenu
          onClick={handleMobile}
          className="absolute top-4 right-4 z-[99] md:hidden"
          size={40}
        />
      ) : (
        <AiOutlineClose
          onClick={handleMobile}
          className="absolute top-4 right-4 z-[99] md:hidden"
          size={40}
        />
      )}

      {mobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};

export default Navbar;
