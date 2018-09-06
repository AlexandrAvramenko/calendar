//Tabs
(function ($) {
    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

        $('ul.sitebar__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.sitebar').find('div.sitebar__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

//Status
$(document).ready(function () {
    $(".status__caption").click(function () {
        $(".status__caption").toggleClass("status__caption-show");
        $(".status__content").toggleClass("status__content-show");
    });
});

//Spoiler
$(document).ready(function () {
    $('.spoiler__content').hide();
    $('.spoiler__caption').click(function () {
        $(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
    })
});

// Date range picker
$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        nonLinearSlider.noUiSlider.set([start.valueOf(), end.valueOf()]);
    });
});

//Date Slider
var nonLinearSlider = document.getElementById('nonlinear');

function timestamp(str) {
    return new Date(str).getTime();
}

noUiSlider.create(nonLinearSlider, {
    range: {
        min: timestamp('2016'),
        max: timestamp('2019')
    },
    step: 7 * 24 * 60 * 60 * 1000,
    start: [timestamp('2016'), timestamp('2018')],
    format: wNumb({
        decimals: 0
    })
});

var dateValues = [
    document.getElementById('lower-value'),
    document.getElementById('upper-value')
];


nonLinearSlider.noUiSlider.on('update', function (values, handle) {
    // console.log(values);
    dateValues[handle].innerHTML = moment(new Date(+values[handle])).format('D MMM, YYYY');
});