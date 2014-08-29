this["DFC"] = this["DFC"] || {};

this["DFC"]["thumb_videos"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.videos), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"col-sm-6 col-md-4\">\n      <div class=\"thumbnail\">\n        <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" onclick=\"ga('send', 'event', '"
    + escapeExpression(((stack1 = (depth2 && depth2.subtitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', '";
  if (helper = helpers.level_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "', '";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\">\n          <img src=\""
    + escapeExpression(((stack1 = (depth1 && depth1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-rounded\" width=\"250\" height=\"120\">\n        </a>\n        <div class=\"caption\">\n          <h3 class=\"video-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n          <p class=\"video-description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p class=\"video-metadata\">Author: <a href=\""
    + escapeExpression(((stack1 = (depth1 && depth1.site_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = (depth1 && depth1.site)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a><br>Level: <span class=\"label label-primary\" title=\"";
  if (helper = helpers.level_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.level) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> | Lang.: <span class=\"label label-primary\">"
    + escapeExpression(((stack1 = (depth1 && depth1.lang)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> | Time: <span class=\"label label-primary\">";
  if (helper = helpers.duration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.duration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n          <p><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-primary btn-block\" role=\"button\" onclick=\"ga('send', 'event', '"
    + escapeExpression(((stack1 = (depth2 && depth2.subtitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "', '";
  if (helper = helpers.level_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.level_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "', '";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "');\"><i class=\"icon-play\"></i>&nbsp;Watch</a>\n        </div>\n      </div>\n    </div>\n  ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.partners), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });