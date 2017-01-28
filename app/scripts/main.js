console.log('\'Allo \'Allo!');

function fetchCrossOrigin(route) {
  const host = '';
  const myurl = route;

  fetch(host + myurl).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function(err) {
    console.log(err);
  });
}
