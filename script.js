const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('.legal-section')];

const setActiveSection = () => {
  const current = sections.find((section) => section.getBoundingClientRect().top > -180);
  if (!current) return;
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`));
};

document.addEventListener('scroll', setActiveSection, { passive: true });
setActiveSection();
