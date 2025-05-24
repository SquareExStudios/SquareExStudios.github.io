document.addEventListener('DOMContentLoaded', function () {
  // Enable dropdown toggling on click for touchscreens
  var dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth < 992) { // Bootstrap lg breakpoint
        e.preventDefault();
        var parent = this.parentElement;
        if (parent.classList.contains('show')) {
          parent.classList.remove('show');
          this.setAttribute('aria-expanded', 'false');
          var menu = parent.querySelector('.dropdown-menu');
          if (menu) menu.classList.remove('show');
        } else {
          // Close other open dropdowns
          var openDropdowns = document.querySelectorAll('.navbar .dropdown.show');
          openDropdowns.forEach(function (openDropdown) {
            openDropdown.classList.remove('show');
            var openToggle = openDropdown.querySelector('.dropdown-toggle');
            if (openToggle) openToggle.setAttribute('aria-expanded', 'false');
            var openMenu = openDropdown.querySelector('.dropdown-menu');
            if (openMenu) openMenu.classList.remove('show');
          });

          parent.classList.add('show');
          this.setAttribute('aria-expanded', 'true');
          var menu = parent.querySelector('.dropdown-menu');
          if (menu) menu.classList.add('show');
        }
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    var isClickInside = e.target.closest('.navbar .dropdown');
    if (!isClickInside) {
      var openDropdowns = document.querySelectorAll('.navbar .dropdown.show');
      openDropdowns.forEach(function (openDropdown) {
        openDropdown.classList.remove('show');
        var openToggle = openDropdown.querySelector('.dropdown-toggle');
        if (openToggle) openToggle.setAttribute('aria-expanded', 'false');
        var openMenu = openDropdown.querySelector('.dropdown-menu');
        if (openMenu) openMenu.classList.remove('show');
      });
    }
  });
});
