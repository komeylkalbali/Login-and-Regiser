$(document).ready(function() {
    $('#pass2-w').hide();
    "use strict";
    /*==================================================================
    [ form-login ]*/
    var input = $('.validate-input100 .input100');
    $('#form-login').submit(function(e) {
        console.log('form-1')
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        // e.preventDefault();
        return check;
    });
    $('#form-login .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        var a = $(input).val();
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if (a.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi) == null) {
                return false;
            }
        } else {
            if ($(input).val() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
    /*==================================================================
    [ form-register ]*/
    var input1 = $('.validate-input-200 .input200');
    $('#form-register').submit(function(e) {
        console.log('form-2')
        var check = true;
        for (var i = 0; i <= input1.length; i++) {
            if (validate(input1[i]) == false) {
                showValidate(input1[i]);
                check = false;
            }
        }
        return false;
    });
    $('#form-register .input200').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        var a = $(input).val();
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if (a.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi) == null) {
                return false;
            }
        } else {
            
            if ($(input).val() < 3) {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }


    $('#pass2').keyup(function() {
        console.log('up');
        if($('#pass1').val() != '' && $('#pass2').val() != $('#pass1').val()) {
            console.log('if');
            $('#pass2-w').html(' رمز عبور یکسان نیست <i class="fas fa-exclamation-triangle"></i>')
            $('#pass2-w').show();
        }else{
            $('#pass2-w').hide();
        }
    })



});
