import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { linkResolver } from "../prismicio";
import { Bounded } from "./Bounded";
import { HamburgerMenu } from "./HamburgerMenu";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code} text-xl`} />;
};

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <Bounded
      as="header"
      yPadding="sm"
      className="sticky top-0 bg-gradient-to-b from-purple-50 to-white z-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none ">
        <PrismicLink href="/">
          {prismicH.isFilled.image(settings.data.logo) && (
            <PrismicNextImage field={settings.data.logo} />
          )}
        </PrismicLink>
        <nav>
          <ul className="flex items-center flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="hidden font-semibold tracking-tight text-slate-800 md:flex"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}

            <button className="text-purple-600">Login</button>

            <HamburgerMenu
              links={navigation.data?.links}
              alternateLanguages={alternateLanguages}
            />

            {alternateLanguages.map((lang) => (
              <li key={lang.lang} className="hidden md:flex">
                <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                  <span className="sr-only">{lang.lang}</span>
                  <FlagIcon lang={lang.lang} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};
