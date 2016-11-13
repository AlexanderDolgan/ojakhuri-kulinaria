//form label transition
var $input = $('input');
$input.on('focusin', function(){
    $(this).parent().find('label').addClass('label-active');
});//end focusin

$input.on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('label').removeClass('label-active');
    }
});//end focusout

//textarea
var $textarea = $('textarea');
$textarea.on('focusin', function(){
    $(this).parent().find('label').addClass('label-active');
});//end focusin

$textarea.on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('label').removeClass('label-active');
    }
});//end focusout