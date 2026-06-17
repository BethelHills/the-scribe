export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("scribe-appearance");
    var settings = stored ? JSON.parse(stored) : { theme: "light", compactSidebar: false, largeText: false };
    var theme = settings.theme || "light";
    var dark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (dark) document.documentElement.classList.add("dark");
    if (settings.largeText) document.documentElement.classList.add("large-text");
    if (settings.compactSidebar) document.documentElement.classList.add("compact-sidebar");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;
