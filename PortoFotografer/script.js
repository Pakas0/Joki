// Membuat efek klik pada foto portofolio
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.alt = "Foto Portofolio";

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);

    // Klik overlay untuk tutup
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    // Klik gambar untuk zoom in/out
    fullImg.addEventListener('click', () => {
      fullImg.classList.toggle('zoomed');
    });

    // Zoom pakai scroll
    overlay.addEventListener('wheel', (e) => {
      e.preventDefault();
      let scale = fullImg.style.transform ? parseFloat(fullImg.style.transform.replace('scale(', '').replace(')', '')) : 1;
      if (e.deltaY < 0) {
        scale += 0.1;
      } else {
        scale = Math.max(1, scale - 0.1);
      }
      fullImg.style.transform = `scale(${scale})`;
    });
  });
});

// Tambahkan style overlay lewat JS
const style = document.createElement('style');
style.innerHTML = `
.overlay {
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.overlay img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
`;
document.head.appendChild(style);
