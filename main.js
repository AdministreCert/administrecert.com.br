window.addEventListener('load', () => {
  const features = document.querySelector('.features');
  const whatsapp = document.querySelector('.whatsapp-button');
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav ul');

  const onClick = e => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
    var href = e.target.getAttribute('href');
    if (href && href.length > 1 && href.indexOf('#') === 0) {
      e.preventDefault();
      var section = document.querySelector(href);
      if (section) {
        window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      }
    }
  };

  document.querySelectorAll('a').forEach(it => it.addEventListener('click', onClick, false));

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 480) {
      if (!features.classList.contains('animated')) {
        features.classList.add('animated');
      }
      if (!whatsapp.classList.contains('visible')) {
        whatsapp.classList.add('visible');
      }
    } else if (window.scrollY <= 50) {
      features.classList.remove('animated');
      whatsapp.classList.remove('visible');
    }
  }, false);

  menu.addEventListener('click', ev => {
    ev.preventDefault();
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    } else {
      nav.classList.add('open');
    }
  }, false);
}, false);
