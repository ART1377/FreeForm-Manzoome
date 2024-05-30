/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from '../Logo/Logo'
import NavbarItem from '../NavbarItem/NavbarItem'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-[30px] py-[25px]">
      <div className="flex-none">
        <Logo />
      </div>
      <div className="flex-1 flex justify-center gap-2 sm:gap-4 text-primary">
        <NavbarItem href="#">قالب ها</NavbarItem>
        <NavbarItem href="#">ویژگی ها</NavbarItem>
        <NavbarItem href="#">مقالات</NavbarItem>
        <NavbarItem href="#">درباره ما</NavbarItem>
        <NavbarItem href="#">تماس با ما</NavbarItem>
      </div>
      <div className="flex-none">
        <button className="bg-primary-100 hover:bg-primary hover:text-white transition-colors duration-300 text-primary py-2 px-5 rounded-15">
          حساب کاربری
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
