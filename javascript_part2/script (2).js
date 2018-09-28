/**
 * Created by Mic-User-33 on 6/1/2018.
 */




    function onValidate() {

    var fn = document.getElementById("fn").value;
    var ln = document.getElementById("ln").value;
    var ph = document.getElementById("ph").value;
    var em = document.getElementById("em").value;
    var lg = document.getElementById("lg").value;
    var psw = document.getElementById("psw").value;

        if (fn != "" || ln != "" || ph != "" || em != "" || lg != "" || psw != "") {

            //SUCCESS
            var regFname = /[^A-Za-z]/;
            if ((fn < 3 || fn.match(regFname)) || (ln < 3 || ln.match(regFname))) {
                
                alert("Firstname-lastname is not a valid");
            }


            //SUCCESS ? ? ?
            var regPhone = /[^A-Za-z]/;
            if (ph < 3 || !(ph.match(regPhone))) {
                
                alert("Phone is not a valid");
            }


            //SUCCESS
            var regEmail = /([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (em.length < 3 || !(em.match(regEmail))) {
              
                alert("Email is not a valid");
            }


            var regLogin = /\s/g;

            if (((lg.length < 5 && lg.length > 12) || lg.match(regLogin)) ||
                ((psw.length < 5 && psw.length > 12) || psw.match(regLogin))) {
               
                alert("Login-password is not a valid");
            }

            document.getElementById("myFormOne").style.display="none";
            document.getElementById("myFormTwo").style.display="flex";
            document.getElementById("myFormTwo").style.flexDirection="column";

            //document.write("Nazik");
        }

    }
    
    function onLoginData() {
        var log = document.getElementById("log").value;
        var pswd = document.getElementById("pswd").value;

        if (log != "" || pswd != ""){
            var regLogin = /\s/g;
            if (((log.length < 5 && log.length > 12) || log.match(regLogin)) ||
                ((pswd.length < 5 && pswd.length > 12) || pswd.match(regLogin))) {

                alert("Login-password is not a valid");
            }


            if ((document.getElementById("lg").value != log) && (document.getElementById("psw").value != pswd)){
                alert("Login-password is not equal");
            } else {
                document.getElementById("myFormTwo").style.display="none";
                document.getElementById("userInfo").style.display="flex";
                document.getElementById("userInfo").style.justifyContent="center";
            }
        }
    }

