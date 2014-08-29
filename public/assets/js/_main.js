(function() {
  var toggle = document.querySelector(".navbar-toggle")
    , collapse = document.querySelector(".navbar-collapse")
    , platform = document.querySelector("[data-platform-url]")
    , filterVideos = document.querySelectorAll("[data-dfc-videos]")
  ;

  toggle.addEventListener("click", function() {
    if (collapse.classList.contains("hide")) {
      collapse.classList.remove("hide");
    } else {
      collapse.classList.add("hide");
    }
  });
  
  for (var i = 0, len = filterVideos.length || 0; i < len; i++) {
    filterVideos[i].addEventListener("click", function(e) {
      var data = JSON.parse(localStorage.getItem('devfreecasts'))
        , level = e.target.getAttribute("data-dfc-videos")
        , hasVideos = true
      ;
      if (level) {
        var videos = 0;
        data.partners.forEach(function(partner) {
          partner.videos = partner.videos.filter(function(video) {
            return video.level == level;
          });
          videos += partner.videos.length;
        });
        hasVideos = videos > 0;
      }
      if (hasVideos) {
        platform.innerHTML = DFC.thumb_videos(data);
      } else {
        platform.innerHTML = "<div class='result-status'><h3>No videos was found here.</h3></div>";
      }
    });
  }

  var renderPlatform = function() {
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

  renderPlatform();

})();