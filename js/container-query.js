const resizable = document.querySelector('.cq-resizable');

if (resizable) {
  const label = document.createElement('p');
  label.className = 'cq-resize-label';
  label.setAttribute('aria-live', 'polite');
  resizable.prepend(label);

  const updateLabel = () => {
    const width = Math.round(resizable.offsetWidth);
    label.textContent = `コンテナ幅: ${width}px`;
  };

  updateLabel();

  const observer = new ResizeObserver(updateLabel);
  observer.observe(resizable);
}
