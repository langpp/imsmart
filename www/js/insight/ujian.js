$(document).on('page:init', '.page[data-name="ujian"]', function (e) {

});

$(document).on('page:init', '.page[data-name="ujian_list"]', function (e) {

});

$(document).on('page:init', '.page[data-name="ujian_detail"]', function (e) {
    var total = 0;
	$('.date-list').find('li').each(function () {
        total = total + $(this).outerWidth()
        $(this).parent('ul').width(total);
    });
    $('.date-list li').on('click', function () {
        $(this).closest('.date-list').children('li').removeClass('active');
        $(this).addClass('active');
    })
});

$(document).on('page:init', '.page[data-name="petunjuk"]', function (e) {

});

$(document).on('page:init', '.page[data-name="selesai"]', function (e) {

});