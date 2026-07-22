document.addEventListener('DOMContentLoaded', function () {

  /* ---- 1. MENU TOGGLE ---- */
  var menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      document.querySelector('.nav').classList.toggle('open');
    });
  }

  /* ---- 2. HEADER SCROLL ---- */
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ---- 3. SCROLL PROGRESS BAR ---- */
  var progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
    });
  }

  /* ---- 4. SCROLL REVEAL ---- */
  var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(function (el) { observer.observe(el); });

  /* ---- 5. WHATSAPP ---- */
  var whatsappBtn = document.querySelector('.whatsapp-float');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function () {
      var msg = encodeURIComponent('Ola! Vi o site da Amo a Praia Imoveis e gostaria de mais informacoes.');
      window.open('https://wa.me/5551997501482?text=' + msg, '_blank');
    });
  }

  /* ---- 6. HERO SCROLL PARALLAX ---- */
  var heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroBg.style.transform = 'scale(1.12) translateY(' + (scrollY * 0.12) + 'px)';
      }
    });
  }

  /* ---- 7. HERO MOUSE 3D PARALLAX ---- */
  var hero = document.getElementById('hero');
  var heroContent = document.getElementById('hero-content');
  if (hero && heroBg) {
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      heroBg.style.transform = 'scale(1.15) translate(' + (x * -20) + 'px, ' + (y * -20) + 'px)';
      if (heroContent) {
        heroContent.style.transform = 'translate(' + (x * 8) + 'px, ' + (y * 8) + 'px)';
      }
    });
    hero.addEventListener('mouseleave', function () {
      heroBg.style.transform = 'scale(1.12) translate(0, 0)';
      if (heroContent) {
        heroContent.style.transform = 'translate(0, 0)';
      }
    });
  }

  /* ---- 8. FLOATING PARTICLES IN HERO ---- */
  var particlesContainer = document.getElementById('hero-particles');
  if (particlesContainer) {
    var particleCount = 18;
    for (var i = 0; i < particleCount; i++) {
      var particle = document.createElement('div');
      particle.className = 'hero-particle';
      var size = 3 + Math.random() * 8;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.bottom = '-20px';
      particle.style.animationDuration = 12 + Math.random() * 20 + 's';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.opacity = 0.2 + Math.random() * 0.4;
      particlesContainer.appendChild(particle);
    }
  }

  /* ---- 9. MAGNETIC HOVER ON BUTTONS ---- */
  var magneticEls = document.querySelectorAll('.hero-cta, .banner-anuncie-cta, .contact-cta .btn');
  magneticEls.forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      var dist = Math.sqrt(x * x + y * y);
      var maxDist = 120;
      var strength = Math.min(1, Math.max(0, 1 - dist / maxDist));
      btn.style.transform = 'translate(' + (x * 0.15 * strength) + 'px, ' + (y * 0.15 * strength) + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  /* ---- 10. COUNTER ANIMATION ---- */
  function animateCounters() {
    var counters = document.querySelectorAll('.about-num-value');
    counters.forEach(function (counter) {
      var text = counter.textContent.trim();
      var target = parseInt(text.replace(/[^0-9]/g, ''));
      var suffix = text.replace(/[0-9]/g, '');
      var step = Math.max(1, Math.floor(target / 60));
      var current = 0;
      function update() {
        current += step;
        if (current >= target) {
          counter.textContent = target + suffix;
          return;
        }
        counter.textContent = current + suffix;
        requestAnimationFrame(update);
      }
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { update(); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.5 });
      obs.observe(counter);
    });
  }
  animateCounters();

  /* ---- 11. WORD REVEAL ON SCROLL ---- */
  function applyWordReveal(selector) {
    var headings = document.querySelectorAll(selector);
    headings.forEach(function (h) {
      if (h.dataset.wordRevealDone) return;
      h.dataset.wordRevealDone = 'true';
      var words = h.textContent.trim().split(' ');
      h.textContent = '';
      words.forEach(function (word, i) {
        var wrapper = document.createElement('span');
        wrapper.className = 'word-reveal';
        var span = document.createElement('span');
        span.textContent = word + '\u00A0';
        span.style.transitionDelay = (i * 0.06) + 's';
        wrapper.appendChild(span);
        h.appendChild(wrapper);
      });
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.word-reveal').forEach(function (w) {
              w.classList.add('visible');
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      obs.observe(h);
    });
  }
  applyWordReveal('.hero h1');
  applyWordReveal('.section-title');
  applyWordReveal('.about-content h2');
  applyWordReveal('.contact-cta h2');

  /* ---- 12. CARD MOUSE 3D TILT ---- */
  var cards = document.querySelectorAll('.property-card, .condo-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var rotateX = (y / rect.height - 0.5) * -12;
      var rotateY = (x / rect.width - 0.5) * 12;
      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-6px)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  /* ---- 13. STAGGERED CARD ENTRANCE ---- */
  var cardGrids = document.querySelectorAll('.properties-grid, .condo-grid, .diffs-grid, .youtube-grid');
  cardGrids.forEach(function (grid) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var items = entry.target.children;
          for (var i = 0; i < items.length; i++) {
            (function (index) {
              setTimeout(function () {
                items[index].style.opacity = '0';
                items[index].style.transform = 'translateY(30px)';
                items[index].style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
                requestAnimationFrame(function () {
                  items[index].style.opacity = '1';
                  items[index].style.transform = 'translateY(0)';
                });
              }, index * 100);
            })(i);
          }
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    obs.observe(grid);
  });

  /* ---- 14. BANNER ANUNCIE COUNTER ---- */
  var badge = document.querySelector('.banner-anuncie-badge');
  if (badge) {
    var badgeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = parseInt(badge.textContent.replace(/[^0-9]/g, ''));
          var current = 0;
          var step = Math.max(1, Math.floor(target / 40));
          function countUp() {
            current += step;
            if (current >= target) {
              badge.textContent = '+' + target;
              return;
            }
            badge.textContent = '+' + current;
            requestAnimationFrame(countUp);
          }
          countUp();
          badgeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    badgeObs.observe(badge);
  }

});
