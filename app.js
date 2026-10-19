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

  const comparison = document.querySelector('.comparison-app');
  const cases = window.PVBenchPhysicsCases || [];
  const models = window.PVBenchModels || [];
  if (!comparison || !cases.length || !models.length) return;

  const counter = document.getElementById('comparison-counter');
  const caseId = document.getElementById('comparison-case-id');
  const dimension = document.getElementById('comparison-dimension');
  const name = document.getElementById('comparison-name');
  const domain = document.getElementById('comparison-domain');
  const method = document.getElementById('comparison-method');
  const prompt = document.getElementById('comparison-prompt');
  const focusCopy = document.getElementById('comparison-focus-copy');
  const modelGrid = document.getElementById('comparison-model-grid');
  const comparisonVideoBase = 'https://huggingface.co/datasets/KSZG/PVBench-Web-Video/resolve/main';
  // const comparisonVideoBase = 'assets/videos';
  const indexGrid = document.getElementById('case-index-grid');
  const modeButtons = comparison.querySelectorAll('[data-modality]');
  let current = 0;
  let modality = 't2v';
  let comparisonVisible = false;

  const loadVideos = () => {
    if (!comparisonVisible) return;
    [...modelGrid.querySelectorAll('video[data-src]')].forEach((video, index) => {
      window.setTimeout(() => {
        if (!video.isConnected || video.src) return;
        video.src = video.dataset.src;
        video.preload = 'metadata';
        video.load();
        video.play().catch(() => {});
      }, index * 180);
    });
  };

  if ('IntersectionObserver' in window) {
    const comparisonObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        comparisonVisible = true;
        loadVideos();
        comparisonObserver.disconnect();
      }
    }, { rootMargin: '360px 0px' });
    comparisonObserver.observe(comparison);
  } else {
    comparisonVisible = true;
  }

  const makeModelCard = (model, item) => {
    const card = document.createElement('article');
    card.className = `video-case-card model-${model.id}`;
    card.dataset.model = model.id;

    const head = document.createElement('div');
    head.className = 'video-case-head';
    const modelName = document.createElement('span');
    modelName.textContent = model.name;
    head.append(modelName);

    const frame = document.createElement('div');
    frame.className = 'video-frame';
    const video = document.createElement('video');
    video.className = 'comparison-video';
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.preload = 'none';
    video.playsInline = true;
    video.dataset.src = `${comparisonVideoBase}/${model.assetDir}/${modality.toUpperCase()}/${item.promptId}.mp4`;
    video.setAttribute('aria-label', `${model.name} ${modality.toUpperCase()} comparison video`);
    frame.appendChild(video);

    const meta = document.createElement('div');
    meta.className = 'video-meta';
    const title = document.createElement('strong');
    title.textContent = `${modality.toUpperCase()} · ${model.name}`;
    const note = document.createElement('span');
    note.textContent = model.id === 'lingbot' && modality === 'i2v'
      ? 'Selected from the supplied LingBot Video I2V record.'
      : 'Selected benchmark video';
    meta.append(title, note);
    card.append(head, frame, meta);
    return card;
  };

  const renderModelCards = (item) => {
    modelGrid.replaceChildren(...models.map((model) => makeModelCard(model, item)));
    loadVideos();
  };

  cases.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'case-index-button';
    button.dataset.index = String(index);
    button.setAttribute('aria-label', `Open ${item.dimension}, ${item.name}`);
    const number = document.createElement('span');
    number.textContent = item.number;
    const label = document.createElement('small');
    label.textContent = item.dimension;
    button.append(number, label);
    button.addEventListener('click', () => {
      current = index;
      render();
    });
    indexGrid.appendChild(button);
  });

  const render = () => {
    const item = cases[current];
    counter.textContent = `${item.number} / ${String(cases.length).padStart(2, '0')}`;
    caseId.textContent = `Case ${item.number}`;
    dimension.textContent = item.dimension;
    name.textContent = item.name;
    domain.textContent = item.domain;
    method.textContent = item.method;
    prompt.textContent = item.keyPrompt;
    comparison.dataset.modality = modality;
    focusCopy.textContent = `${modality.toUpperCase()} · five-model view`;
    modeButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.modality === modality));
    indexGrid.querySelectorAll('.case-index-button').forEach((button, index) => button.classList.toggle('is-active', index === current));
    renderModelCards(item);
  };

  comparison.querySelectorAll('[data-step]').forEach((button) => {
    button.addEventListener('click', () => {
      current = button.dataset.step === 'next'
        ? (current + 1) % cases.length
        : (current - 1 + cases.length) % cases.length;
      render();
    });
  });
  modeButtons.forEach((button) => button.addEventListener('click', () => {
    modality = button.dataset.modality;
    render();
  }));
  render();
})();
