// Fade-in for sections, images, videos
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
});
document.querySelectorAll('section, img, video').forEach(el => observer.observe(el));

// Simple parallax effect for hero image
window.addEventListener('scroll', function(){
  const heroImg = document.querySelector('.hero img');
  if(heroImg) heroImg.style.transform = 'translateY(' + window.scrollY * 0.25 + 'px)';
});
