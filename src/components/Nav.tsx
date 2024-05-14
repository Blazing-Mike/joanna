import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

interface NavProps {
  navBackground: string;
  links: any;
}

export const RoundedDrawerNav = ({ navBackground, links }: NavProps) => {
  const [hovered, setHovered] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);



  return (
    <>
      <nav
        onMouseLeave={() => setHovered(null)}
        className={`${navBackground} md:p-8 p-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Logo />
            <DesktopLinks
              links={links}
              setHovered={setHovered}
              hovered={hovered}
            />
          </div>
          <button className="hidden rounded-md bg-white px-3 py-4 text-sm text-red-600 transition-colors hover:bg-gray-400 md:block">
            <span className="font-bold">Enroll now </span>- start learning
          </button>
          <button
            onClick={() => setMobileNavOpen((pv) => !pv)}
            className="mt-0.5 block text-2xl text-neutral-50 md:hidden"
          >
            <FiMenu />
          </button>
        </div>
        <MobileLinks links={links} open={mobileNavOpen} />
      </nav>
    </>
  );
};

const Logo = () => {
  return <img src="/src/assets/logo.png" alt="logo" className="w-12 h-12" />;
};

interface DesktopLinksProps {
  links: any;
  setHovered: React.Dispatch<React.SetStateAction<any>>;
  hovered: any;
}

const DesktopLinks = ({ links, setHovered, hovered }: DesktopLinksProps) => {
  return (
    <div className="ml-9 mt-0.5 hidden md:block">
      <div className="flex gap-6">
        {links.map((l: any) => (
          <TopLink key={l.title} setHovered={setHovered} title={l.title} href={l.href}>
            {l.title}
          </TopLink>
        ))}
      </div>
    </div>
  );
};

const MobileLinks = ({ links, open }: { links: any; open: boolean }) => {
  return (
    <AnimatePresence mode="popLayout">
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="grid grid-cols-2 gap-6 py-6 md:hidden"
        >
          {links.map((l: any) => {
            return (
              <div key={l.title} className="space-y-1.5">
                <span className="text-md block font-semibold text-neutral-50">
                  {l.title}
                </span>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface TopLinkProps {
  children: React.ReactNode;
  setHovered: React.Dispatch<React.SetStateAction<any>>;
  title: string;
  href: string;
}

const TopLink = ({ children, setHovered, title, href }: TopLinkProps) => (
  <a
  href={`#${href}`}
    onMouseEnter={() => setHovered(title)}
    className="cursor-pointer text-neutral-50 transition-colors hover:text-neutral-400"
  >
    {children}
  </a>
);
