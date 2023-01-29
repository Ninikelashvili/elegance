const fullPage = new fullpage("#app", {
    easing: "easeInOutCubic",
    css3: false,
    scrollingSpeed: 1500,
    responsiveWidth: 1025,
    navigation: true,
    navigationPosition: 'right',
    afterLoad: function(origin, destination){
        $('.fp-table.active .aos-init').addClass('aos-animate');
    },
});
