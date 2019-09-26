var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.omdbapi.com/?i=tt0087332&apikey=e03ca193");
xhr.onreadystatechange = function() {
  var DONE = 4; 
  var OK = 200;
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText); 
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("Error: " + xhr.status); 
    }
  }
};
xhr.send(null);
$.ajax({
  type: "GET",
  url: "http://www.omdbapi.com/?i=tt0087332&apikey=e03ca193",
  dataType: "JSON",
  success: function(response) {
    console.log(response);
    showMovieDetails(response.Title, response.Released,response.Runtime);
  },
});
function showMovieDetails(title, released,runtime){
  var heading = $("<h1/>").text(title);
  $("body").append(heading);
  var released = $("<h2/>").text(released);
  $("body").append("coming to theaters",released);
  var runtime = $("<h3/>").text(runtime);
  $("body").append("Enjoy the",runtime,"movie");
}