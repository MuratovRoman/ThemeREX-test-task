var btn = $('.header-body__burger'),
    menu = $('.header-body'),
    mask = $('.mask'),
    menuItem = $('.header-nav__item');


function menuShow() {
    btn.on('click', function() {
        menu.toggleClass('is-active');
        mask.toggleClass('is-active');
    });
    menuItem.on('click', function() {
        menu.removeClass('is-active');
        mask.removeClass('is-active');
    })
}