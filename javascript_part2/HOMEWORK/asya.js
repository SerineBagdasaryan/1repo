var userInfo={};
function setUserData() {
    /// avelacnel validacianer
    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;
    if (document.getElementById('firstname').value == '') {
        alert('please fill data');
        return false;
    }
    if (document.getElementById('firstname').value.length > 7) {
        alert('Firstname must be less then 7');
        return false;
    }
    if (document.getElementById('password').value.length > 8) {
        alert('Password must be less then 7');
        return false;
    }
    if (!letter.test(document.getElementById('password').value)) {
        alert("Please make sure Password Includes an UpperCase and LowerCase character");
        return false;
    }
    if (!number.test(document.getElementById('password').value)) {
        alert("Please make sure Password Includes a Digit");
        return false;
    }
    if (!number.test(document.getElementById('phone').value)) {
        alert("Please make sure phone Includes a Digit");
        return false;
    }
    if (document.getElementById('phone').value.length < 6) {
        alert("Password must be large then 6");
        return false;
    }
    userInfo.firstname = document.getElementById('firstname').value;
    userInfo.lastname = document.getElementById('lastname').value;
    userInfo.phone = document.getElementById('phone').value;
    userInfo.email = document.getElementById('email').value;

    document.getElementById('register').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('loginform').style.display = 'block';
}

function setAllData() {
    if ((document.getElementById('loginEmail').value != document.getElementById('email').value) || (document.getElementById('repeatPass').value != document.getElementById('password').value)) {
        alert("The password or the email incorrect");
        return false;
    } else {
        document.getElementById('loginform').style.display = "none";
        document.getElementById('userinfo').style.display = "block";

    }
    document.getElementById('info').innerHTML += 'Your  firstname  is:  ' + userInfo.firstname + '<br>';
    document.getElementById('info').innerHTML += 'Your  lastname  is:  ' + userInfo.lastname + '<br>';
    document.getElementById('info').innerHTML += 'Your  phone  is:  ' + userInfo.phone + '<br>';
    document.getElementById('info').innerHTML += 'Your  e-mail  is:  ' + userInfo.email + '<br>';


}