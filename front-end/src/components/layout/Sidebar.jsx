import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarMenu } from "./sidebarMenu";

function Sidebar({ role = "SUPER_ADMIN" }) {
  const location = useLocation();
  const openRef = useRef(null);

  useEffect(() => {
    // current route ke according accordion open
    const activeMenu = sidebarMenu.find(
      (menu) =>
        menu.children &&
        menu.children.some((child) =>
          location.pathname.startsWith(child.to)
        )
    );

    if (activeMenu) {
      const el = document.querySelector(
        `[data-menu="${activeMenu.label}"]`
      );

      document
        .querySelectorAll(".nxl-hasmenu.open")
        .forEach((m) => m.classList.remove("open"));

      el?.classList.add("open");
      openRef.current = el;
    }
  }, [location.pathname]);

  const toggleMenu = (e, label) => {
    e.preventDefault();

    const current = document.querySelector(
      `[data-menu="${label}"]`
    );

    document
      .querySelectorAll(".nxl-hasmenu.open")
      .forEach((menu) => {
        if (menu !== current) menu.classList.remove("open");
      });

    current.classList.toggle("open");
  };

  return (
    <nav className="nxl-navigation">
        <div className="navbar-wrapper">
             <div className="m-header">
                <a href="index.html" className="b-brand">
                  
                    <img src="assets/images/logo-full.png" alt="" className="logo logo-lg"/>
                    <img src="assets/images/logo-abbr.png" alt="" className="logo logo-sm"/>
                </a>
            </div>
            <div className="navbar-content">
                <ul className="nxl-navbar">
                {sidebarMenu
                    .filter((menu) => menu.roles.includes(role))
                    .map((menu) => (
                    <li
                        key={menu.label}
                        data-menu={menu.label}
                        className={`nxl-item ${
                        menu.children ? "nxl-hasmenu" : ""
                        }`}
                    >
                        {/* SINGLE LINK */}
                        {!menu.children ? (
                        <NavLink
                            to={menu.to}
                            className="nxl-link"
                        >
                            <span className="nxl-micon">
                            <i className={menu.icon}></i>
                            </span>
                            <span className="nxl-mtext">{menu.label}</span>
                        </NavLink>
                        ) : (
                        <>
                            {/* PARENT */}
                            <a
                            href="#"
                            className="nxl-link"
                            onClick={(e) =>
                                toggleMenu(e, menu.label)
                            }
                            >
                            <span className="nxl-micon">
                                <i className={menu.icon}></i>
                            </span>
                            <span className="nxl-mtext">{menu.label}</span>
                            <span className="nxl-arrow">
                                <i className="feather-chevron-right"></i>
                            </span>
                            </a>

                            {/* CHILDREN */}
                            <ul className="nxl-submenu">
                            {menu.children.map((child) => (
                                <li key={child.to} className="nxl-item">
                                <NavLink
                                    to={child.to}
                                    className={({ isActive }) =>
                                    `nxl-link ${
                                        isActive ? "active" : ""
                                    }`
                                    }
                                >
                                    {child.label}
                                </NavLink>
                                </li>
                            ))}
                            </ul>
                        </>
                        )}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Sidebar;
