/* Board Direction About disclosures. RTO-inspired independent expand/collapse. */
(() => {
  const root = document.querySelector('#main-content.bd-about');
  if (!root) return;
  const items = [...root.querySelectorAll('[data-bd-accordion]')];
  if (!items.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('is-enhanced');
  for (const item of items) {
    const button = item.querySelector('.bd-accordion__trigger');
    const panel = item.querySelector('.bd-accordion__panel');
    if (!button || !panel) continue;
    const setAccessibility = (expanded) => {
      button.setAttribute('aria-expanded', String(expanded));
      panel.setAttribute('aria-hidden', String(!expanded));
      panel.inert = !expanded;
    };
    setAccessibility(false);
    panel.style.height = '0px';
    panel.style.opacity = '0';
    panel.addEventListener('transitionend', (event) => {
      if (event.target === panel && event.propertyName === 'height' && item.classList.contains('is-open')) panel.style.height = 'auto';
    });
    button.addEventListener('click', () => {
      const opening = !item.classList.contains('is-open');
      const startHeight = panel.getBoundingClientRect().height;
      item.classList.toggle('is-open', opening);
      setAccessibility(opening);
      if (reduceMotion) {
        panel.style.height = opening ? 'auto' : '0px';
        panel.style.opacity = opening ? '1' : '0';
        return;
      }
      panel.style.height = startHeight + 'px';
      panel.style.opacity = opening ? '0' : '1';
      void panel.offsetHeight;
      panel.style.height = opening ? panel.scrollHeight + 'px' : '0px';
      panel.style.opacity = opening ? '1' : '0';
    });
  }
})();
