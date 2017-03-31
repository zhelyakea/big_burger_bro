export default (id, text) => {
  return fetch('http://localhost:3000', {method: 'POST', body: text + '='+ id, timeout: 5000})
  .then(function(data){return data.json()})
  .then(function(data){return data})
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
