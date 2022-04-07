/**
* jquery score
* Author: Jay Hsu
* Date: 2022-04-07
*/

(function ($, document, window) {
    "use strict";
    $.fn.score = function (options) {
        const defaults = {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>',
            max: 6,
            min: 1
        };
        options = $.extend(defaults, options);
        const me = $(this);
        const icon = options.icon;
        let max = options.max;
        let min = options.min;

        me.each(function(){
            fnCreateScore($(this)); //先建立
        });

        //點擊
        $(document).on('click','.point',function(){
            fnUpdateScore($(this).data('value'), $(this).parent());
        });

        //更新
        function fnUpdateScore(value, container) {
            $($(container).data('id')).val(value);
            $(".point", container).each(function(){
                if ($(this).data('value') <= value) {
                    $(this).addClass('on');
                }else{
                    $(this).removeClass('on');
                }
            });
        }

        //創建
        function fnCreateScore(container) {
            let my_max = (container.data('max')!=null) ? container.data('max'):max;
            let my_min = (container.data('min')!=null) ? container.data('min'):min;
            let value = $($(container).data('id')).val();
            for(let i = my_min; i <= my_max; i++){
                let pointIcon = $.parseHTML(icon);
                $(pointIcon).addClass('point').data('value',i);
                if (i<value) $(pointIcon).addClass('on');
                container.append(pointIcon);
            }
        }
    }
}(jQuery, document, window));