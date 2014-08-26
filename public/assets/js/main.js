(function() {
  var toggle = document.querySelector(".navbar-toggle");
  var collapse = document.querySelector(".navbar-collapse");
  var onCollapse = function(e) {
    if (collapse.classList.contains("hide")) {
      collapse.classList.remove("hide");
    } else {
      collapse.classList.add("hide");
    }
  };
  if (toggle.addEventListener) {
    toggle.addEventListener("click", onCollapse);
  } else {
    toggle.attachEvent("onclick", onCollapse);
  }

  var loadTemplate = function() {
    var platform = document.querySelector("[data-platform-url]");
    if (platform) {
      var url = platform.getAttribute("data-platform-url");
      request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        var data = JSON.parse(request.responseText);
        var template = DFC.thumb_videos(data);
        platform.innerHTML = template;
      };

      request.send();
    }
  };

  loadTemplate();

})();