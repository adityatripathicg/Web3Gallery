"use client";
import { usePathname } from "next/navigation";

import Footer from "@/components/Footer/Footer";

const ConditionalFooter = () => {
  const pathname = usePathname();
  const showFooter = pathname !== "/events";

  return showFooter ? <Footer /> : null;
};

export default ConditionalFooter;
