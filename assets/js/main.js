// Active nav link highlighting (basic)
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Set year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
