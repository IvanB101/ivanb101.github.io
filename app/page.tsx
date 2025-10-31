"use client";

import Loader from "@/components/Loader";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const userLang = (navigator.language || "en").split("-")[0];
    const supported = ["en", "es"];
    const lang = supported.includes(userLang) ? userLang : "en";
    window.location.replace("/" + lang);
  });

  return <Loader />;
}
