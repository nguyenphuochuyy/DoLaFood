const panels = document.querySelectorAll('.panel-group .faq');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    const content = panel.querySelector('.content');
    const h4 = panel.querySelector('h4');
    if (content.style.display === 'block') {
      content.style.display = 'none';
      h4.style.backgroundColor = '#E3E3E3';
      h4.style.color = '#000';    
    } else {
      content.style.display = 'block';
      h4.style.backgroundColor = '#006a31';
      h4.style.color = '#fff';
      h4.style.borderRadius = '5px 5px 0 0';
    }
  });
});


