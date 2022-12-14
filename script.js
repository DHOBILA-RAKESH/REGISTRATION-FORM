function processForm() {
    //let isValid = true;
    //event.preventDefault();

    //fname validation
    fname = document.getElementById("fname");
    if (fname.value === "") {
        document.getElementById("fname_error").innerHTML = "This felid is requried";
        fname.style.cssText = "border:2px solid red;";
        return false;
    }
    else if (fname.value.length <= 2 || fname.value.length >= 20) {
        document.getElementById("fname_error").innerHTML = "";
        fname.style.cssText = "border:2px solid #333"
        return false;
    }

    //Email validation

    var email = document.getElementById("email");
    if (email.value === "") {
        document.getElementById("email_error").innerHTML = "This felid is requried";
        email.style.cssText = "border:2px solid red;";
        return false;
    }
    else {
        if(!validEmail(email.value)){
            document.getElementById("email_error").innerHTML = "please enter valid email";
            email.style.cssText = "border:2px solid red;";
            return false;
        }

    }

    //mobile validation

    var num=document.getElementById("num");
    if(num.value===""){
        document.getElementById("num_error").innerHTML="This felid is requried";
        num.style.cssText="border:2px solid red;";
        return false;
    }
    else if(num.value.length!=10){
        document.getElementById("num_error").innerHTML="must have 10 digit number"
        num.style.cssText="border:2px solid red;";
        return false;
    }

    //password validation

    var pass = document.getElementById("pass");
    if (pass.value === "") {
        document.getElementById("pass_error").innerHTML = "This felid is requried";
        pass.style.cssText = "border:2px solid red;";
        return false;
    }
    else if (pass.value.length <= 6 || pass.value.length >= 15) {
        document.getElementById("pass_error").innerHTML = "password must be contains 8 to 15 char only"
        pass.style.cssText = "border:2px solid red;";
        return false;

    }
    else {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!re.test(pass.value)) {
            document.getElementById("pass_error").innerHTML = "min 6 letter password, with at least a symbol, upper and lower case letters and a number"
            pass.style.cssText = "border:2px solid red;";
            return false;
        }
    }

    cpass = document.getElementById("cpass");

    if (cpass.value === "") {
        document.getElementById("cpass_error").innerHTML = "This felid is requried";
        cpass.style.cssText = "border:2px solid red;";
        return false;

    }
    else if (pass.value != cpass.value) {
        document.getElementById("cpass_error").innerHTML = "password and confirm password must be same";
        pass.style.cssText = "border:2px solid red;";
        return false;
    }

    else{
        return true;
    }




}

function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}

function checkError(ele) {
    ele.style.cssText = "border:2px soild #333"
    document.getElementById(ele.id + "_error").innerHTML = " "

}
function revertError(ele) {
    if (ele.value === "") {
        ele.style.cssText = "border:2px solid red;";
        document.getElementById(ele.id + "_error").innerHTML = "This felid is requrired";
    }
}
