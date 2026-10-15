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
})();
