"use client";

import { useEffect } from "react";

export default function Animate() {
  const sectionIds = ["home", "projects", "skills", "contact"];
  const activeClasses = ["text-indigo-600", "bg-black/50"];
  const threshold = 200;

  let active = "none";

  useEffect(() => {
    const sections = sectionIds.map((id) =>
      document.getElementById(id),
    ) as HTMLElement[];
    const links = sectionIds.map((id) =>
      document.getElementById(id + "-link"),
    ) as HTMLElement[];
    const smlinks = sectionIds.map((id) =>
      document.getElementById(id + "-link-sm"),
    ) as HTMLElement[];

    let newActive = "home";
    let activeLink = links[0];
    let activeLinkSm = smlinks[0];

    function updateActiveLink() {
      for (let i = 0; i < sectionIds.length; i++) {
        if (sections[i].getBoundingClientRect().y <= threshold) {
          newActive = sectionIds[i];
          activeLink = links[i];
          activeLinkSm = smlinks[i];
        }
      }
      if (newActive === active) {
        return;
      }

      for (const link of links) {
        for (const activeClass of activeClasses) {
          link.classList.remove(activeClass);
        }
      }
      for (const link of smlinks) {
        for (const activeClass of activeClasses) {
          link.classList.remove(activeClass);
        }
      }
      for (const activeClass of activeClasses) {
        activeLink.classList.add(activeClass);
      }
      for (const activeClass of activeClasses) {
        activeLinkSm.classList.add(activeClass);
      }
    }

    document.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    return () => {
      document.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  return <></>;
}
