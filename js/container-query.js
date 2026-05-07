const resizable = document.querySelector('.cq-resizable');

if (resizable) {
  const label = document.createElement('p');
  label.className = 'cq-resize-label';
  resizable.prepend(label);

  const updateLabel = () => {
    const width = Math.round(resizable.offsetWidth);
    label.textContent = `コンテナ幅: ${width}px`;
  };

  updateLabel();

  if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
    const observer = new window.ResizeObserver(updateLabel);
    observer.observe(resizable);
  } else if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateLabel);
  }
}
