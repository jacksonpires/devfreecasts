var harp = require("./harp.json")
  , fs = require("fs")
  , image_root_url = harp.globals.root_url[process.env.NODE_ENV] + "assets/images/";
;

harp.globals.platforms.forEach(function(platform_name) {
  var platform = require("./public/" + platform_name + "/_data.json")["index"];
  platform.image = image_root_url + platform.image;
  platform.partners.forEach(function(partner, index) {
    if (partner.publish) {
      partner.image && (partner.image = image_root_url + partner.image);
    } else {
      platform.partners.splice(index, 1);
    }
  });
  var output = "./www/api/" + platform_name + ".json";
  fs.writeFileSync(output, JSON.stringify(platform));
});
