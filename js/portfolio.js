$(document).ready(() => {


    var $items = $('.portfolio-teaser');
var $btns = $('.btn-portfolio').click(function () {
    if (this.id == 'all') {
        $items.show();
    } else {
        var $selection = $('.' + this.id).show();
        $items.not($selection).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})
})

