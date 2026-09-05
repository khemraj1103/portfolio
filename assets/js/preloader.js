/* ===== CUBE PRELOADER + PAGE TRANSITIONS ===== */
(function () {
  'use strict';

  var DIRS = ['top', 'bottom', 'left', 'right'];
  function pickDir() { return DIRS[Math.floor(Math.random() * DIRS.length)]; }

  /* ---- SVG icons — unique per face ---- */
  var FACES = [
    /* FRONT — WordPress */
    { cls: 'front', label: 'WordPress', svg:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="2" y1="12" x2="22" y2="12"/>' +
      '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
      '</svg>'
    },
    /* BACK — PHP */
    { cls: 'back', label: 'PHP', svg:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<polyline points="7 8 3 12 7 16"/>' +
      '<polyline points="17 8 21 12 17 16"/>' +
      '<line x1="14" y1="6" x2="10" y2="18"/>' +
      '</svg>'
    },
    /* RIGHT — React.js */
    { cls: 'right', label: 'React.js', svg:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<ellipse cx="12" cy="12" rx="10" ry="3.8"/>' +
      '<ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>' +
      '<ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>' +
      '<circle cx="12" cy="12" r="2.2" fill="#fff" stroke="none"/>' +
      '</svg>'
    },
    /* LEFT — SEO */
    { cls: 'left', label: 'SEO', svg:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="10" cy="10" r="7"/>' +
      '<line x1="15.5" y1="15.5" x2="21" y2="21"/>' +
      '<polyline points="7 13 10 8 13 11"/>' +
      '</svg>'
    },
    /* TOP — Bug Fix */
    { cls: 'top', label: 'Bug Fix', svg:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M9 9a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V9z"/>' +
      '<path d="M9 9l-2.5-2.5M15 9l2.5-2.5"/>' +
      '<line x1="3" y1="12" x2="6.5" y2="12"/>' +
      '<line x1="17.5" y1="12" x2="21" y2="12"/>' +
      '<line x1="3" y1="16" x2="6.5" y2="16"/>' +
      '<line x1="17.5" y1="16" x2="21" y2="16"/>' +
      '<path d="M9 19l-1 2.5M15 19l1 2.5"/>' +
      '</svg>'
    },
    /* BOTTOM — Rankings */
    { cls: 'bottom', label: 'Rankings', svg:
      '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="2"  y="13" width="4" height="8" rx="1"/>' +
      '<rect x="9"  y="8"  width="4" height="13" rx="1"/>' +
      '<rect x="16" y="3"  width="4" height="18" rx="1"/>' +
      '<polyline points="2 8 7 3 12 6 20 1"/>' +
      '<polyline points="17 1 20 1 20 4"/>' +
      '</svg>'
    }
  ];

  function buildCube() {
    return (
      '<div class="cube-scene"><div class="cube">' +
      FACES.map(function(f) {
        return '<div class="cube-face ' + f.cls + '">' + f.svg + '<span>' + f.label + '</span></div>';
      }).join('') +
      '</div></div>' +
      '<div class="preloader-bar-wrap"><div class="preloader-bar"></div></div>' +
      '<div class="preloader-label">Loading...</div>'
    );
  }

  function makeLoader() {
    var el = document.createElement('div');
    el.id = 'page-preloader';
    el.innerHTML = buildCube();
    return el;
  }

  /* ============================================================
     INITIAL PAGE LOAD
     Flow:
       1. Cube overlay injected immediately (body is opacity:0 via CSS)
       2. Page loads fully
       3. Add entry direction class → body slides in (under cube)
       4. After slide starts → fade cube out
       5. Page fully visible
     ============================================================ */
  var loader = makeLoader();
  document.documentElement.appendChild(loader);

  /* Read direction stored by previous page's click handler */
  var dir = sessionStorage.getItem('kt_dir') || '';
  sessionStorage.removeItem('kt_dir');

  function revealPage() {
    /* Step 1: add slide-in class — body animates from off-screen */
    var cls = dir ? 'enter-' + dir : 'enter-bottom';
    document.body.classList.add(cls);

    /* Step 2: after slide animation starts (100ms), fade out cube */
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 120);

    /* Step 3: remove loader from DOM after it fades */
    setTimeout(function() {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 650);
  }

  if (document.readyState === 'complete') {
    setTimeout(revealPage, 300);
  } else {
    window.addEventListener('load', function() {
      setTimeout(revealPage, 300);
    });
  }

  /* ============================================================
     NAVIGATION CLICK
     Flow:
       click → cube overlay appears on current page
       → 650ms → navigate to new URL
       (new page: cube shows immediately, body hidden, then slides in)
     ============================================================ */
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href]');
    var navLoader = makeLoader();
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href) return;
    if (
      href.charAt(0) === '#'         ||
      href.indexOf('mailto:') === 0  ||
      href.indexOf('tel:')    === 0  ||
      href.indexOf('http://')  === 0 ||
      href.indexOf('https://') === 0 ||
      a.hasAttribute('download')     ||
      a.target === '_blank'
    ) return;

    e.preventDefault();

    /* Store random direction for the new page */
    sessionStorage.setItem('kt_dir', pickDir());

    /* Show cube over current page */
    document.body.appendChild(navLoader);

    /* Navigate after cube is visible */
    setTimeout(function() {
      window.location.href = href;
    }, 650);
  });

})();
