export const guidedPages = [
  { path: "/about", label: "About", step: 1 },
  { path: "/experience", label: "Experience", step: 2 },
  { path: "/projects", label: "Projects", step: 3 },
  { path: "/ai-innovation", label: "AI", step: 4 },
  { path: "/beyond-code", label: "Beyond", step: 5 },
  { path: "/contact", label: "Contact", step: 6 },
];

export const routeSequence = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/ai-innovation",
  "/beyond-code",
  "/contact",
];

export function getStepIndex(pathname) {
  return guidedPages.findIndex((page) => page.path === pathname);
}
