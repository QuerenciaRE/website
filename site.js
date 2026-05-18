(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('mobile-nav');
  if (toggle && panel) {
    function setOpen(open) {
      toggle.classList.toggle('is-open', open);
      panel.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      panel.setAttribute('aria-hidden', String(!open));
      var links = panel.querySelectorAll('.mobile-nav-link');
      for (var i = 0; i < links.length; i++) {
        links[i].setAttribute('tabindex', open ? '0' : '-1');
      }
    }
    setOpen(false);
    toggle.addEventListener('click', function () {
      setOpen(!panel.classList.contains('is-open'));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // Password gate (Investors page)
  var gateForm = document.getElementById('gate-form');
  if (gateForm) {
    var input = document.getElementById('pw');
    var err = document.getElementById('pw-err');
    var submit = gateForm.querySelector('button[type="submit"]');
    function syncDisabled() {
      submit.disabled = !input.value;
    }
    syncDisabled();
    input.addEventListener('input', function () {
      syncDisabled();
      if (err && !err.hidden) {
        err.hidden = true;
        input.removeAttribute('aria-invalid');
      }
    });
    gateForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (input.value.trim().toLowerCase() === 'fnf') {
        window.location.href = 'investors-confidential.html';
      } else {
        if (err) err.hidden = false;
        input.setAttribute('aria-invalid', 'true');
      }
    });
  }
})();
