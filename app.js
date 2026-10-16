(() => {
  const copyButton = document.querySelector('[data-copy]');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const target = document.getElementById(copyButton.dataset.copy);
      try {
        await navigator.clipboard.writeText(target.textContent);
        copyButton.textContent = 'Copied';
        setTimeout(() => { copyButton.textContent = 'Copy'; }, 1400);
      } catch (_) {
        copyButton.textContent = 'Select text';
      }
    });
  }

  const pendingLinks = document.querySelectorAll('.is-pending');
  pendingLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const destination = document.querySelector(link.getAttribute('href'));
      if (!destination) return;
      event.preventDefault();
      destination.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  const videoHero = document.querySelector('.video-hero');
  const heroStage = document.querySelector('.hero-stage');
  if (videoHero && heroStage) {
    const reveal = () => {
      const range = Math.max(1, videoHero.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, window.scrollY / range));
      heroStage.classList.toggle('revealed', progress > 0.08);
      heroStage.style.setProperty('--hero-progress', progress.toFixed(3));
    };
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    window.addEventListener('resize', reveal);
  }
})();
