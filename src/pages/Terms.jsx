import React, { useState, useRef, useEffect } from "react";
import StaggeredDropDown from "../components/Dropdown";

export default function Terms() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const DIAMOND_ICON = import.meta.env.VITE_DIAMOND;
  const SWEDEN_FLAG = import.meta.env.VITE_SWEDEN_FLAG;
  const ENGLISH_FLAG = import.meta.env.VITE_ENGLISH_FLAG;
  const BG_IMAGE = import.meta.env.VITE_BG_IMAGE;
  const MENU_ICON = import.meta.env.VITE_MENU_ICON;

  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);
  const [dropdownOpenDesktop, setDropdownOpenDesktop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRefMobile = useRef(null);
  const buttonRefMobile = useRef(null);
  const dropdownRefDesktop = useRef(null);
  const buttonRefDesktop = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const [dropdownWidth, setDropdownWidth] = useState(null);

  const [languageId, setLanguageId] = useState(() => {
    return parseInt(localStorage.getItem("languageId")) || 1;
  });

  const [languageData, setLanguageData] = useState(null);

  useEffect(() => {
    localStorage.setItem("languageId", languageId);
  }, [languageId]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRefMobile.current &&
        !dropdownRefMobile.current.contains(event.target) &&
        !buttonRefMobile.current.contains(event.target)
      ) {
        setDropdownOpenMobile(false);
      }
      if (
        dropdownRefDesktop.current &&
        !dropdownRefDesktop.current.contains(event.target) &&
        !buttonRefDesktop.current.contains(event.target)
      ) {
        setDropdownOpenDesktop(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (buttonRefDesktop.current) {
      setDropdownWidth(buttonRefDesktop.current.offsetWidth);
    }
  }, [dropdownOpenDesktop]);

  useEffect(() => {
    async function fetchLanguageData() {
      try {
        const response = await fetch(
          `${API_BASE_URL}/language/${languageId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setLanguageData(data);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    }

    fetchLanguageData();
  }, [languageId]);

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${BG_IMAGE}')`,
          backgroundAttachment: "fixed",
        }}
      />

      {languageData && (
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Diamond Icon */}
          <div
            className="absolute top-12 left-8 sm:left-40 z-20 max-[1268px]:hidden cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <img
              src={DIAMOND_ICON}
              alt="Diamond Icon"
              style={{ height: "2rem" }}
            />
          </div>

          {/* Mobile Header */}
          <div className="w-full hidden justify-between items-center px-6 pt-12 max-[1268px]:flex z-20">
            <div className="relative" ref={hamburgerRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 text-white font-medium"
              >
                <img
                  src={MENU_ICON}
                  alt="Menu Icon"
                  className="w-6 h-6"
                />
              </button>

              {menuOpen && (
                <div ref={menuRef}>
                  <StaggeredDropDown
                    onOptionClick={() => setMenuOpen(false)}
                    languageData={languageData}
                  />
                </div>
              )}
            </div>

            <div className="relative" ref={buttonRefMobile}>
              <button
                onClick={() => setDropdownOpenMobile(!dropdownOpenMobile)}
                className="flex items-center gap-2 text-white font-medium"
              >
                <span>{languageId === 1 ? "English" : "Svenska"}</span>
                <img
                  src={languageId === 1 ? ENGLISH_FLAG : SWEDEN_FLAG}
                  alt="Language Flag"
                  className="w-6 h-4"
                />
              </button>
              {dropdownOpenMobile && (
                <div
                  ref={dropdownRefMobile}
                  className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 px-4 z-50 text-left"
                  style={{ minWidth: "150px", width: "max-content" }}
                >
                  <button
                    onClick={() => {
                      setLanguageId(2);
                      setDropdownOpenMobile(false);
                    }}
                    className="flex items-center justify-between w-full mb-2"
                  >
                    <span className="mr-2">Svenska</span>
                    <img
                      src={SWEDEN_FLAG}
                      alt="Swedish flag"
                      className="w-6 h-4 rounded-sm"
                    />
                  </button>
                  <button
                    onClick={() => {
                      setLanguageId(1);
                      setDropdownOpenMobile(false);
                    }}
                    className="flex items-center justify-between w-full"
                  >
                    <span>English</span>
                    <img
                      src={ENGLISH_FLAG}
                      alt="English flag"
                      className="w-6 h-4 rounded-sm"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="w-full pt-12 pb-6 flex justify-center items-center ml-24 sm:ml-36 md:ml-56 lg:ml-68 px-4 md:px-0 max-[1268px]:hidden">
            <div className="flex flex-wrap justify-end gap-6 md:gap-10 text-white font-medium text-lg">
              <a href="#">{languageData?.home || "Home"}</a>
              <a href="#">{languageData?.order || "Order"}</a>
              <a href="#">{languageData?.our_customers || "Our Customers"}</a>
              <a href="#">{languageData?.about_us || "About us"}</a>
              <a href="#">{languageData?.contact_us || "Contact Us"}</a>

              <div className="relative" ref={buttonRefDesktop}>
                <button
                  onClick={() =>
                    setDropdownOpenDesktop(!dropdownOpenDesktop)
                  }
                  className="flex items-center gap-2"
                >
                  <span>{languageId === 1 ? "English" : "Svenska"}</span>
                  <img
                    src={languageId === 1 ? ENGLISH_FLAG : SWEDEN_FLAG}
                    alt="Language flag"
                    className="w-6 h-4 rounded-sm"
                  />
                </button>

                {dropdownOpenDesktop && (
                  <div
                    ref={dropdownRefDesktop}
                    className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 px-4 z-50 text-left"
                    style={{
                      minWidth: dropdownWidth
                        ? `${dropdownWidth}px`
                        : "150px",
                      width: "max-content",
                    }}
                  >
                    <button
                      onClick={() => {
                        setLanguageId(2);
                        setDropdownOpenDesktop(false);
                      }}
                      className="flex items-center justify-between w-full mb-2"
                    >
                      <span className="mr-2">Svenska</span>
                      <img
                        src={SWEDEN_FLAG}
                        alt="Swedish flag"
                        className="w-6 h-4 rounded-sm"
                      />
                    </button>
                    <button
                      onClick={() => {
                        setLanguageId(1);
                        setDropdownOpenDesktop(false);
                      }}
                      className="flex items-center justify-between w-full"
                    >
                      <span>English</span>
                      <img
                        src={ENGLISH_FLAG}
                        alt="English flag"
                        className="w-6 h-4 rounded-sm"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center px-4 md:px-8 pt-4 pb-16 mt-0 max-[1268px]:mt-10">
            <h2 className="text-3xl font-bold text-white mb-6">{languageData?.terms}</h2>

            <button
              onClick={() => {
                window.close('', '_self', '');
                history.back();
              }}
              className="bg-green-600 text-white font-medium py-3 px-10 rounded-full mb-8 transition-colors"
            >
              {languageData?.button}
            </button>

            <div className="bg-white rounded-xl p-7 md:max-w-3xl mx-auto text-gray-700 text-center leading-relaxed mb-8 whitespace-pre-line">
              {languageData?.paragraph}
            </div>

            <button
              onClick={() => {
                window.close('', '_self', '');
                history.back();
              }}
              className="bg-green-600 text-white font-medium py-3 px-10 rounded-full mb-8 transition-colors"
            >
              {languageData?.button}
            </button>
          </main>
        </div>
      )}
    </div>
  );
}
