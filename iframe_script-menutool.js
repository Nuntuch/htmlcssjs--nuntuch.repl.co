
// jQuery(document).ready(function($){

// All your code using $

// });


$(document).ready(function(){
// jQuery(document).ready(function($){
  //the trigger on hover when cursor directed to this class
    $(".core-menu li").hover(
    function(){
      //i used the parent ul to show submenu
        $(this).children('ul').slideDown('fast');
    }, 
      //when the cursor away 
    function () {
        $('ul', this).slideUp('fast');
    });
  //this feature only show on 600px device width
    $(".hamburger-menu").click(function(){
      $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").slideToggle("fast");
    });
});
/** credit:@rafonzoo 
http://rafonzo.blogspot.co.id/ **/



// google load

// var iframe = document.getElementsByTagName('iframe')[0];
// var url = iframe.src;
// var getData = function (data) {
//  if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status == 200) loadHTML(data.query.results.resources.content);
//  else if (data && data.error && data.error.description) loadHTML(data.error.description);
//  else loadHTML('Error: Cannot load ' + url);
// };
// var loadURL = function (src) {
//  url = src;
//  var script = document.createElement('script');
//  script.src = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22' + encodeURIComponent(url) + '%22&format=json&diagnostics=true&env=store%3A%2F%http://2Fdatatables.org%2Falltableswithkeys&callback=getData';
//  document.body.appendChild(script);
// };
// var loadHTML = function (html) {
//  iframe.src = 'about:blank';
//  iframe.contentWindow.document.open();
//  iframe.contentWindow.document.write(html.replace(/<head>/i, '<head><base href="' + url + '"><scr' + 'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName == "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' + 'ipt>'));
//  iframe.contentWindow.document.close();
// }
// loadURL(iframe.src);	





// google load