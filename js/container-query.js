const resizable = document.querySelector('.cq-resizable');

if (resizable) {
  const label = document.createElement('p');
  label.className = 'cq-resize-label';
  resizable.prepend(label);

  let debounceTimer;
  const updateLabel = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const width = Math.round(resizable.offsetWidth);
      label.textContent = `コンテナ幅: ${width}px`;
    }, 100);
  };

  label.textContent = `コンテナ幅: ${Math.round(resizable.offsetWidth)}px`;

  if (window.ResizeObserver) {
    const observer = new ResizeObserver(updateLabel);
    observer.observe(resizable);
  } else {
    window.addEventListener('resize', updateLabel);
  }
}
