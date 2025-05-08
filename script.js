
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) html.classList.add(savedTheme);

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    html.classList.toggle("dark");
    const theme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });

  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.onscroll = function () {
      topBtn.style.display = document.documentElement.scrollTop > 20 ? "block" : "none";
    };
    topBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
});
