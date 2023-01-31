import React, { useState } from "react";

import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { FiMenu, FiX } from "react-icons/fi";
import { linkResolver } from "../prismicio";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code} text-2xl`} />;
};

export const HamburgerMenu = ({ links, alternateLanguages }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <FiX color="#6C5FED" size="26px" />
        ) : (
          <FiMenu color="#6C5FED" size="26px" />
        )}
      </button>

      {open && (
        <nav className="fixed top-[77px] left-0 h-[100vh] w-[100%] bg-[#ffffff71] p-10 backdrop-blur-3xl">
          {links.map((item) => (
            <li
              key={prismicH.asText(item.label)}
              className="mb-5 text-[22px] tracking-tight text-[#232834]"
            >
              <PrismicLink field={item.link}>
                <PrismicText field={item.label} />
              </PrismicLink>
            </li>
          ))}

          <div className="mt-10 flex items-center gap-4">
            {alternateLanguages.map((lang) => (
              <li key={lang.lang}>
                <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                  <span className="sr-only">{lang.lang}</span>
                  <FlagIcon lang={lang.lang} />
                </PrismicLink>
              </li>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};
