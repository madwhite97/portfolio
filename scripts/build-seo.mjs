import { readFileSync, writeFileSync } from "node:fs";
import { pages, siteUrl } from "../src/seo-data.js";
const template = readFileSync("dist/index.html", "utf8");
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
for (const [route, page] of Object.entries(pages)) {
  const url = siteUrl + route;
  const tags = [
    '<meta name="description" content="' + escape(page.description) + '" />',
    '<meta name="robots" content="index, follow" />',
    '<link rel="canonical" href="' + url + '" />',
    ...Object.entries({"og:title":page.title,"og:description":page.description,"og:url":url,"og:type":"website","og:site_name":"Maddie W.","og:image":siteUrl+"/social-preview.png","og:image:alt":"Maddie W. — Web Developer + Designer"}).map(([name,value])=>'<meta property="'+name+'" content="'+escape(value)+'" />'),
    ...Object.entries({"twitter:card":"summary_large_image","twitter:title":page.title,"twitter:description":page.description,"twitter:image":siteUrl+"/social-preview.png"}).map(([name,value])=>'<meta name="'+name+'" content="'+escape(value)+'" />')
  ];
  if (route === "/") tags.push('<script type="application/ld+json">'+JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Maddie W.",url:siteUrl+"/",jobTitle:"Web Developer & Designer",sameAs:["https://github.com/madwhite97"]})+'</script>');
  const html = template.replace(/<title>.*?<\/title>/s, '<title>'+escape(page.title)+'</title>').replace(/<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/, tags.join("\n"));
  writeFileSync(route === "/" ? "dist/index.html" : "dist"+route+".html", html);
}
console.log("SEO HTML generated for Home, Work, and Contact.");
