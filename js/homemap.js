function initMap(){
  var el = document.getElementById('map');
  var home = new google.maps.LatLng(41.858254,-87.622069);
  var mapOptions = {
    center: new google.maps.LatLng(41.858254,-87.622069),
    zoom: 15,
  };
  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: home,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  });
}