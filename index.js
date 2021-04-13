function validate() {
    if (document.myform.name.value == "" || document.myform.name.value.trim('') == "") {
        alert('Enter your name');
        document.myform.name.focus()
        return false
    }

    if (document.myform.num.value == "" || document.myform.num.value.trim('') == "" ) {
        alert('Enter your mobile number');
        document.myform.num.focus()
        return false
    }

    if (document.myform.zip.value == "" || document.myform.zip.value.trim('') == "" ) {
        alert('Enter your Zip Code');
        document.myform.zip.focus()
        return false
    }

    else {
        return true
    }
}


function welcome() {
    document.getElementById("abc").innerHTML = "Our Representatives will soon get in touch with you!"
}