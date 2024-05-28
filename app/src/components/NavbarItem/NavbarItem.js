import React from 'react'

function NavbarItem({ href, children }) {
  return (
    <a href={href} className="text-sm px-2 md:px-4 py-2 rtl hover:bg-primary-100 transition-all duration-300 rounded-15" style={{ fontSize: "13px" }}>
      {children}
    </a>
  );
}

export default NavbarItem