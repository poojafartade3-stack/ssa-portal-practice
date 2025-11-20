import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    html.style.scrollBehavior = previousBehavior;
  }, [pathname]);

  return null;
}
