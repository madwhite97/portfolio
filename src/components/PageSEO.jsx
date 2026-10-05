import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pages, siteUrl } from "../seo-data";

export default function PageSEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pages[pathname.replace(/\/$/, "") || "/"];
    document.title = page?.title || "Page Not Found | Maddie W.";
    const meta = (attribute, name, content) => {
      let element = document.head.querySelector('meta[' + attribute + '="' + name + '"]');
      if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, name); document.head.appendChild(element); }
      element.content = content;
    };
    meta("name", "robots", page ? "index, follow" : "noindex, follow");
    meta("name", "description", page?.description || "This page could not be found. Explore Maddie W.'s portfolio or get in touch.");
    for (const [name, content] of Object.entries({"og:title":document.title,"og:description":page?.description || "Page not found", "og:url":siteUrl + (pathname === "/" ? "/" : pathname),"og:type":"website","og:image":siteUrl + "/social-preview.png"})) meta("property", name, content);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", document.title);
    meta("name", "twitter:description", page?.description || "Page not found");
    meta("name", "twitter:image", siteUrl + "/social-preview.png");
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!page) { canonical?.remove(); return; }
    if (!canonical) { canonical=document.createElement("link"); canonical.rel="canonical"; document.head.appendChild(canonical); }
    canonical.href = siteUrl + (pathname.replace(/\/$/, "") || "/");
  }, [pathname]);
  return null;
}
