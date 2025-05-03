
// Theme Switcher
const themes = document.querySelectorAll(".theme");

const setActiveTheme = (themeElement) => {
  themes.forEach((t) => t.classList.remove("active"));
  themeElement.classList.add("active");
};

themes.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    const themeName = e.target.dataset.theme;
    document.body.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);
    setActiveTheme(e.target);
  });
});

// Load saved theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  const activeTheme = document.querySelector(`[data-theme="${savedTheme}"]`);
  setActiveTheme(activeTheme);
}

initializeTheme();
