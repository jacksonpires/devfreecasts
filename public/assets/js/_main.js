(function() {
  var toggle = document.querySelector(".navbar-toggle");
  toggle.addEventListener("click", function() {
    var collapse = document.querySelector(".navbar-collapse");
    if (collapse.classList.contains("hide")) {
      collapse.classList.remove("hide");
    } else {
      collapse.classList.add("hide");
    }
  });
  
  var filterVideos = document.querySelectorAll("[data-dfc-videos]");
  for (var i = 0, len = filterVideos.length; i < len; i++) {
    filterVideos[i].addEventListener("click", function(e) {
      var data = JSON.parse(localStorage.getItem('devfreecasts'));
      var level = e.target.getAttribute("data-dfc-videos");
      var videos = true;
      if (level) {
        videos = 0;
        _.forEach(data.partners, function(partner) {
          partner.videos = _.filter(partner.videos, {"level": level});
          videos += _.size(partner.videos);
        });
      }
      var platform = document.querySelector("[data-platform-url]");
      if (videos) {
        platform.innerHTML = DFC.thumb_videos(data);
      } else {
        platform.innerHTML = "<div class='result-status'><h3>No videos was found here.</h3></div>";
      }
    });
  }

  var loadTemplate = function() {
    var platform = document.querySelector("[data-platform-url]");
    if (platform) {
      var url = platform.getAttribute("data-platform-url");
      request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        var data = JSON.parse(request.responseText)
          , template = DFC.thumb_videos(data)
        ;
        platform.innerHTML = template;
        localStorage.setItem('devfreecasts', request.responseText);
      };

      request.send();
    }
  };
  loadTemplate();


})();