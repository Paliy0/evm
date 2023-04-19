$(document).ready(function () {
  // Get current page URL
  var url = window.location.href;

  // Get target section IDs
  var targetSections = [];
  $("section[id]").each(function () {
    targetSections.push($(this).attr("id"));
  });

  // Highlight nav links on scroll
  $(window).scroll(function () {
    // Get current scroll position
    var scrollPos = $(document).scrollTop();

    // Highlight nav links
    $.each(targetSections, function (i, val) {
      var targetSection = $("#" + val);

      if (targetSection.length) {
        if (targetSection.position().top <= scrollPos + 200) {
          $("nav .navbar-nav li.active").removeClass("active");
          $("nav .navbar-nav li.active-custom").removeClass("active-custom");
          $('nav .navbar-nav li:has(a[href="#' + val + '"])').addClass(
            "active active-custom"
          );
        }
      }
    });
  });
});
