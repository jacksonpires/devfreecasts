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
})();