/**
 * Created by Victor on 9/21/2015.
 */
/**
 * Returns all classes of the specified element.
 *
 * @param elem The specified element.
 * @returns {*|string} The returned list of classes.
 */
function getClasses (elem)
{
  var classes = document.getElementsByTagName(elem).className;
  return classes;
}

/**
 * Adds the new specified class to the specified element
 *  if the element does not already contain the class
 *  name.
 *
 * @param elem The specified element.
 * @param className The class to be added.
 */
function addClass (elem, className)
{
  var exists = false;
  var classes = getClasses(elem);
  for (var elemClass in classes) {
    if (className === elemClass) {
      exists = true;
    }
  }
  if (!exists) {
    elem.className = elem.className + className;
  }
}

/**
 * Validates fields from a form and alert the user when
 *  fields are left blank, or do not match.
 *
 * @returns {boolean} True if form is valid, false otherwise.
 */
function validateForm ()
{
  var success = true;
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var pwd = document.forms["myForm"]["password"].value;
  var pwdConfirm = document.forms["myForm"]["confirm"].value;

  if (name == null || name == "") {
    alert("Please provide your name.");
    success = false;
  }

  if (email == null || email == "") {
    alert("Please provide your email.");
    success = false;
  }

  if (pwd == null || pwd == "") {
    alert("Please provide a password.");
    success = false;
  }

  if (pwdConfirm == null || pwdConfirm == "") {
    alert("Please confirm your password.");
    success = false;
  }

  if (pwd !== pwdConfirm) {
    alert("Passwords do not match.");
    success = false;
  }
  return success;

}