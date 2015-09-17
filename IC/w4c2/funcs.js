/**
 * Created by Victor on 9/17/2015.
 */
function display()
{
  var search = location.search.slice(1);
  var pairs = search.slice(1).split('&');
  var message = "";
  for (var i = 0; i < pairs.length; i++) {
    var elems = pairs[i].split('=');
    message += "<tr> <td>" + elems[0] + "</td><td>" + elems[1] + "</td></tr>";
  }

}