document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const iconHamburger = document.querySelector('.icon-hamburger');
  const iconClose = document.querySelector('.icon-close');
  const demoBtn = document.querySelector('.demo-btn');
  
  // Add a class to body when page is loaded to trigger animations
  document.body.classList.add('page-loaded');
  
  // Toggle mobile menu with smooth animation
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    iconHamburger.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    
    // Add a small vibration effect on mobile devices for better feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      iconHamburger.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  });
  
  // Close menu on window resize (if desktop view)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      iconHamburger.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  });
  
  // Add pulse animation to demo button when scrolled into view
  const addPulseAnimation = function() {
    const rect = demoBtn.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    
    if (isInView) {
      demoBtn.classList.add('pulse');
      window.removeEventListener('scroll', addPulseAnimation);
    }
  };
  
  // Add scroll event listener for demo button animation
  window.addEventListener('scroll', addPulseAnimation);
  
  // Check if demo button is in view on page load
  addPulseAnimation();
  
  // Add click event to demo button
  demoBtn.addEventListener('click', function() {
    alert('Demo scheduling feature coming soon!');
  });
});
