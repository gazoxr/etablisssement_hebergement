let slideIndex = 0;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;

  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  // Reset all slides and dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active", "prev", "next");
    slides[i].style.opacity = 0; // Ensures non-visible slides are fully transparent
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Set active slide
  slides[slideIndex].classList.add("active");
  slides[slideIndex].style.opacity = 1; // Fully visible

  // Set prev slide (for potential styling or visual effects)
  let prevIndex = slideIndex - 1;
  if (prevIndex < 0) prevIndex = slides.length - 1;
  slides[prevIndex].classList.add("prev");
  // If 'prev' is meant to be visible next to 'active', adjust its position/opacity in CSS
  slides[prevIndex].style.opacity = 0.7; // Currently just for a subtle visual, adjust in CSS if it's a side-by-side prev slide

  // Set next slide (for potential styling or visual effects)
  let nextIndex = (slideIndex + 1) % slides.length;
  slides[nextIndex].classList.add("next");
  // If 'next' is meant to be visible next to 'active', adjust its position/opacity in CSS
  slides[nextIndex].style.opacity = 0.7; // Currently just for a subtle visual

  // Activate corresponding dot
  if (dots[slideIndex]) dots[slideIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
  // Initialize the slideshow
  showSlides(slideIndex);

  // Auto-advance slides every 4 seconds
  setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000);

  // Make dots clickable to jump to slides
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
      slideIndex = i;
      showSlides(slideIndex);
    });
  }

  // --- Scroll-triggered image animation ---
  const img = document.querySelector('.timeline-float-img');
  const timeline = document.querySelector('.timeline');
  const text = document.querySelector('.timeline-text-content');

  function handleImageScroll() {
    if (!img || !timeline || !text) return;
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calcul du pourcentage de visibilité de la section timeline dans la fenêtre
    const sectionHeight = rect.height;
    const visible = Math.min(Math.max(windowHeight - rect.top, 0), sectionHeight);
    const progress = visible / sectionHeight; // 0 (pas visible) à 1 (totalement visible)

    // Mouvement de droite (left: 100%) à gauche (left: 0)
    const leftPercent = 100 - (100 * progress);
    img.style.left = leftPercent + "%";

    // Opacité de 0.3 à 1 selon le scroll
    img.style.opacity = 0.3 + 0.7 * progress;

    // Apparition du texte quand l'image est arrivée à gauche
    if (progress > 0.98) {
      text.classList.add('visible');
    } else {
      text.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleImageScroll);
  window.addEventListener('resize', handleImageScroll);
  handleImageScroll();
});