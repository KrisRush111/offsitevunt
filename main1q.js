document.addEventListener("DOMContentLoaded", () => {
  // Логотип-анимация по буквам
  const logo = document.getElementById("animated-logo");
  const text = "TheVuntgram";
  text.split("").forEach((ch, i) => {
    const span = document.createElement("span");
    span.textContent = ch;
    span.style.animationDelay = `${i * 0.1}s`;
    logo.appendChild(span);
  });

  // Header scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Анимации карточек при скролле
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("animate");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".feature-card").forEach(el => observer.observe(el));

  // Плавный скролл
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href");
      const target = document.querySelector(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });
});
