module.exports = function() {
  var harp = require("./harp.json")
    , fs = require("fs")
    , image_root_url = harp.globals.root_url[process.env.NODE_ENV] + "assets/images/"
    , output_path = process.env.NODE_ENV == "production" ? "www" : "public"
  ;

  console.log("Generating static platforms json...");
  harp.globals.platforms.forEach(function(platform_name) {
    var platform = require("./public/"+ platform_name +"/_data.json")["index"];
    platform.image = image_root_url + platform.image;
    platform.partners.forEach(function(partner, index) {
      if (partner.publish) {
        partner.lang = partner.lang.toUpperCase();
        if (partner.image) {
          partner.image = image_root_url + partner.image;
        } else {
          partner.image = platform.image;
        }
        partner.videos.forEach(function(video, index) {
          video.level_title = harp.globals.level[video.level];
          video.level = video.level.toUpperCase();
          video.url = video.url + harp.globals.utm[process.env.NODE_ENV];
        });
      } else {
        platform.partners.splice(index, 1);
      }
    });
    var output = "./"+ output_path +"/api/"+ platform_name +".json";
    console.log(output);
    fs.writeFileSync(output, JSON.stringify(platform));
  });
  console.log("Platform json are done!");
};