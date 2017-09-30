function param(obj) {
  var str = [];

  for(var p in obj) {
    if(obj.hasOwnProperty(p) && obj[p] !== undefined && obj[p] !== '' ) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}
export default param;