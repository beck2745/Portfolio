const btn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

if (saved) {
  document.documentElement.setAttribute("data-theme", saved);
}

if (btn) {
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "" : "dark";

    if (next) {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    }
  });
}
