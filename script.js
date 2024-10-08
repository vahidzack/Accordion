document.querySelectorAll('.row_according').forEach(accordion => {
    const header = accordion.querySelector('.header_according');
    
    header.addEventListener('click', () => {
      accordion.classList.toggle('active');
      const content = accordion.querySelector('.content_according');
      if (accordion.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
  