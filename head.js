$(document).ready(function () {
    
    // Validate name
        $('#namecheck').hide(); 
        let nameError = true;
        $('#fullname').keyup(function () {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#fullname').val();
        if (usernameValue.length == '') {
        $('#namecheck').show();
            nameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 10)) {
            $('#namecheck').show();
            $('#namecheck').html
    ("**length of username must be between 3 and 10");
            nameError = false;
            return false;
        }
        else {
            $('#namecheck').hide();
        }
        }
  
    // Validate Email
    // /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    $('#emailcheck').hide();    
    const email =
    document.getElementById('email');
    function validateEmail(){
    let regex =/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let s = email.value;
    if(!regex.test(s)){
    $('#emailcheck').show();
    emailError = false;
    }
    else{
        emailError = true;
    }

}
//Validate Birthday
$('#birthcheck').hide();
let birthError = true;  
$('#birthday').keyup(function () {
    validateBirth();
});
function validateBirth(){
let birthValue = $('#birthday').val();
if (birthValue.length == '') {
$('#birthcheck').show();
    birthError = false;
    return false;
} else {
    $('#birthcheck').hide(); 
}
}

//Validate Phone 
$('#phonecheck').hide();
let phoneError = true;  
$('#phone').keyup(function () {
    validatePhone();
});
function validatePhone(){
let phoneValue = $('#phone').val();
if (phoneValue.length == '') {
$('#phonecheck').show();
    phoneError = false;
    return false;
} else {
    $('#phonecheck').hide(); 
}
}

    //Multiple select box for skill
    $('.js-example-basic-multiple').select2();
    $('#skillcheck').hide();    
    let selectCheck = true;
    $('.js-example-basic-multiple').keyup(function () {
        validateMultipleSelect();
    });
    function validateMultipleSelect() {
        let multipleSelect = 
        $('.js-example-basic-multiple').val();
        if( multipleSelect.length == 0){
            $('#skillcheck').show();
            selectCheck = false;
            return false;  
        } else if(multipleSelect.length == 1){
            $('#skillcheck').show();
            $('#skillcheck').html
    ("**length of skills must be atleast 2");
            selectCheck = false;
            return false;
        } 
        else {
            $('#skillcheck').hide();
            $('.js-example-basic-multiple').select2();
        }
    } 

 // Submit button
 $('#submitbtn').click(function () {
    validateUsername();
    validateEmail();
    validateMultipleSelect();
    validateBirth();
    validatePhone();
    if ((nameError == true) &&
        (emailError == true) && 
        (selectCheck == true) &&
        (phoneError == true) &&
        (birthError == true)) {
        return true;
    } else {
        return false;
    }
});
});