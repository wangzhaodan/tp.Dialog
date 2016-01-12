/**
 * Created by wzd on 16/1/8.
 */
(function ($) {


    var importStyle = function () {
        var RE_NON_WORD = /\W/g;
        var doc = document;
        var head = document.getElementsByTagName('head')[0] ||
            document.documentElement;
        var styleNode;

        return function (cssText, id) {
            if (id) {
                // Convert id to valid string
                id = id.replace(RE_NON_WORD, '-');

                // Don't add multiple times
                if (doc.getElementById(id)) return
            }

            var element;

            // Don't share styleNode when id is spectied
            if (!styleNode || id) {
                element = doc.createElement('style');
                id && (element.id = id);

                // Adds to DOM first to avoid the css hack invalid
                head.appendChild(element)
            } else {
                element = styleNode
            }


            element.appendChild(doc.createTextNode(cssText));

            if (!id) {
                styleNode = element
            }
        };

    }();

    importStyle(
        '.TP_dialog_confirm.hide,.TP_dialog_alert.hide,.TP_complete_toast.hide,.TP_loading_toast.hide,.actionSheet_wrap.hide{display:none}\
        .TP_btn_dialog.default {color: #353535;}\
        .TP_btn_dialog.primary {color: #0BB20C;}\
        .TP_mask {position: fixed;z-index: 1;width: 100%;height: 100%;top: 0;left: 0;background: rgba(0, 0, 0, 0.6);}\
        .TP_dialog {position: fixed;z-index: 13;width: 85%;top: 50%;left: 50%; -webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background-color: #FAFAFC;text-align: center;border-radius: 3px;}\
       .TP_dialog_confirm .TP_dialog .TP_dialog_hd {padding: 1.2em 20px .5em;}\
       .TP_dialog_confirm .TP_dialog .TP_dialog_bd {text-align: left;}\
        .TP_dialog_hd {padding: 1.2em 0 .5em;}\
        .TP_dialog_title {font-weight: 400;font-size: 17px;}\
        .TP_dialog_bd {padding: 0 20px;font-size: 15px;color: #888;}\
        .TP_dialog_ft {position: relative;line-height: 42px;margin-top: 20px;font-size: 17px;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;}\
        .TP_dialog_ft a {display: block; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1;flex: 1;color: #3CC51F;text-decoration: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}\
        .TP_dialog_ft a:active {background-color: #EEEEEE;}\
        .TP_dialog_ft:after {content: " ";position: absolute;left: 0;top: 0;width: 100%;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}\
        .TP_dialog_confirm .TP_dialog_ft a {position: relative;}\
        .TP_dialog_confirm .TP_dialog_ft a:after {content: " ";position: absolute;left: 0;top: 0;width: 1px;height: 100%;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}\
       .TP_dialog_confirm .TP_dialog_ft a:first-child:after {display: none;}\
        .TP_btn_dialog.default {color: #353535;}\
        .TP_btn_dialog.primary {color: #0BB20C;}\
        @media screen and (min-width: 1024px) {.TP_dialog {width: 35%;}}\
        .TP_toast {position: fixed;z-index: 3;width: 7.6em;min-height: 7.6em;top: 180px;left: 50%;margin-left: -3.8em;background: rgba(40, 40, 40, 0.75);text-align: center;border-radius: 5px;color: #FFFFFF;}\
        .TP_icon_toast {margin: 22px 0 0;display: block;}\
        .TP_icon_toast:before {content: \'\\EA08\';color: #FFFFFF;font-size: 55px;}\
        .TP_toast_content {margin: 0 0 15px;}\
        .TP_loading_toast .TP_toast_content {margin-top: 64%;font-size: 14px;}\
        .TP_loading {position: absolute;width: 0px;z-index: 2000000000;left: 50%;top: 38%;}\
        .TP_loading_leaf {position: absolute;top: -1px;opacity: 0.25;}\
        .TP_loading_leaf:before {content: " ";position: absolute;width: 8.14px;height: 3.08px;background: #d1d1d5;box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;border-radius: 1px;-webkit-transform-origin: left 50% 0px;transform-origin: left 50% 0px;}\
        .TP_loading_leaf_0 { -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;animation: opacity-60-25-0-12 1.25s linear infinite;}\
        .TP_loading_leaf_0:before { -webkit-transform: rotate(0deg) translate(7.92px, 0px);transform: rotate(0deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_1 { -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;animation: opacity-60-25-1-12 1.25s linear infinite;}\
        .TP_loading_leaf_1:before { -webkit-transform: rotate(30deg) translate(7.92px, 0px);transform: rotate(30deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_2 {-webkit-animation: opacity-60-25-2-12 1.25s linear infinite;animation: opacity-60-25-2-12 1.25s linear infinite;}\
        .TP_loading_leaf_2:before { -webkit-transform: rotate(60deg) translate(7.92px, 0px);transform: rotate(60deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_3 { -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;animation: opacity-60-25-3-12 1.25s linear infinite;}\
        .TP_loading_leaf_3:before { -webkit-transform: rotate(90deg) translate(7.92px, 0px);transform: rotate(90deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_4 { -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;animation: opacity-60-25-4-12 1.25s linear infinite;}\
        .TP_loading_leaf_4:before { -webkit-transform: rotate(120deg) translate(7.92px, 0px);transform: rotate(120deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_5 { -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;animation: opacity-60-25-5-12 1.25s linear infinite;}\
        .TP_loading_leaf_5:before { -webkit-transform: rotate(150deg) translate(7.92px, 0px);transform: rotate(150deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_6 { -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;animation: opacity-60-25-6-12 1.25s linear infinite;}\
        .TP_loading_leaf_6:before { -webkit-transform: rotate(180deg) translate(7.92px, 0px);transform: rotate(180deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_7 { -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;animation: opacity-60-25-7-12 1.25s linear infinite;}\
        .TP_loading_leaf_7:before { -webkit-transform: rotate(210deg) translate(7.92px, 0px);transform: rotate(210deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_8 { -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;animation: opacity-60-25-8-12 1.25s linear infinite;}\
        .TP_loading_leaf_8:before {-webkit-transform: rotate(240deg) translate(7.92px, 0px);transform: rotate(240deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_9 { -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;animation: opacity-60-25-9-12 1.25s linear infinite;}\
        .TP_loading_leaf_9:before { -webkit-transform: rotate(270deg) translate(7.92px, 0px);transform: rotate(270deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_10 { -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;animation: opacity-60-25-10-12 1.25s linear infinite;}\
        .TP_loading_leaf_10:before {-webkit-transform: rotate(300deg) translate(7.92px, 0px);transform: rotate(300deg) translate(7.92px, 0px);}\
        .TP_loading_leaf_11 {-webkit-animation: opacity-60-25-11-12 1.25s linear infinite;animation: opacity-60-25-11-12 1.25s linear infinite;}\
        .TP_loading_leaf_11:before { -webkit-transform: rotate(330deg) translate(7.92px, 0px);transform: rotate(330deg) translate(7.92px, 0px);}\
        @-webkit-keyframes opacity-60-25-0-12 {0% {opacity: 0.25;}0.01% {opacity: 0.25;}0.02% {opacity: 1;}60.01% {opacity: 0.25;}100% {opacity: 0.25;}}\
        @-webkit-keyframes opacity-60-25-1-12 {0% {opacity: 0.25;}8.34333% {opacity: 0.25;}8.35333% {opacity: 1;}68.3433% {opacity: 0.25;}100% {opacity: 0.25;}}\
        @-webkit-keyframes opacity-60-25-2-12 {0% {opacity: 0.25;}16.6767% {opacity: 0.25;}16.6867% {opacity: 1;}76.6767% {opacity: 0.25;}100% {opacity: 0.25;}}\
        @-webkit-keyframes opacity-60-25-3-12 {0% {opacity: 0.25;}25.01% {opacity: 0.25;}25.02% {opacity: 1;}85.01% {opacity: 0.25;}100% {opacity: 0.25;}}\
        @-webkit-keyframes opacity-60-25-4-12 {0% {opacity: 0.25;}33.3433% {opacity: 0.25;}33.3533% {opacity: 1;}93.3433% {opacity: 0.25;}100% {opacity: 0.25;}}\
        @-webkit-keyframes opacity-60-25-5-12 {0% {opacity: 0.270958333333333;}41.6767% {opacity: 0.25;}41.6867% {opacity: 1;}1.67667% {opacity: 0.25;}100% {opacity: 0.270958333333333;}}\
        @-webkit-keyframes opacity-60-25-6-12 {0% {opacity: 0.375125;}50.01% {opacity: 0.25;}50.02% {opacity: 1;}10.01% {opacity: 0.25;}100% {opacity: 0.375125;}}\
        @-webkit-keyframes opacity-60-25-7-12 {0% {opacity: 0.479291666666667;}58.3433% {opacity: 0.25;}58.3533% {opacity: 1;}18.3433% {opacity: 0.25;}100% {opacity: 0.479291666666667;}}\
        @-webkit-keyframes opacity-60-25-8-12 {0% {opacity: 0.583458333333333;}66.6767% {opacity: 0.25;}66.6867% {opacity: 1;}26.6767% {opacity: 0.25;}100% {opacity: 0.583458333333333;}}\
        @-webkit-keyframes opacity-60-25-9-12 {0% {opacity: 0.687625;}75.01% {opacity: 0.25;}75.02% {opacity: 1;}35.01% {opacity: 0.25;}100% {opacity: 0.687625;}}\
        @-webkit-keyframes opacity-60-25-10-12 {0% {opacity: 0.791791666666667;}83.3433% {opacity: 0.25;}83.3533% {opacity: 1;}43.3433% {opacity: 0.25;}100% {opacity: 0.791791666666667;}}\
        @-webkit-keyframes opacity-60-25-11-12 {0% {opacity: 0.895958333333333;}91.6767% {opacity: 0.25;}91.6867% {opacity: 1;}51.6767% {opacity: 0.25;}100% {opacity: 0.895958333333333}}\
        .TP_mask_transition {position: fixed;z-index: 1;width: 100%;height: 100%;top: 0;left: 0;background: rgba(0, 0, 0, 0); -webkit-transition: background .3s;transition: background .3s;}\
        .TP_actionsheet {position: fixed;left: 0;bottom: 0; -webkit-transform: translate(0, 100%);transform: translate(0, 100%); -webkit-backface-visibility: hidden;backface-visibility: hidden;z-index: 2;width: 100%;background-color: #EFEFF4; -webkit-transition: -webkit-transform .3s;transition: transform .3s;}\
        .TP_actionsheet_menu {background-color: #FFFFFF;}\
        .TP_actionsheet_action {margin-top: 6px;background-color: #FFFFFF;}\
        .TP_actionsheet_cell {position: relative;padding: 10px 0;text-align: center;font-size: 18px;}\
        .TP_actionsheet_cell:before {content: " ";position: absolute;left: 0;top: 0;width: 100%;height: 1px;border-top: 1px solid #D9D9D9;color: #D9D9D9; -webkit-transform-origin: 0 0;transform-origin: 0 0; -webkit-transform: scaleY(0.5);transform: scaleY(0.5);}\
        .TP_actionsheet_cell:active {background-color: #ECECEC;}\
        .TP_actionsheet_cell:first-child:before {/*display: none;*/}\
        .TP_actionsheet_toggle { -webkit-transform: translate(0, 0);transform: translate(0, 0);}\
        .TP_fade_toggle {background: rgba(0, 0, 0, 0.6);}');
    var tp = window.tp = window.tp || {};

    //html代码
    var tpls = {
        confirm: '\
                    <div class=" TP_dialog_confirm hide">\
                    <div class="TP_mask"></div>\
                    <div class="TP_dialog">\
                    <div class="TP_dialog_hd"><strong  class="TP_dialog_title"></strong></div>\
                    <div class="TP_dialog_bd"></div>\
                      <div class="TP_dialog_ft">\
                    <a href="javascript:void(0);"  class="TP_btn_dialog default"></a>\
                    <a href="javascript:void(0);" class="TP_btn_dialog primary"></a>\
                    </div>\
                    </div>\
                    </div>',
        alert: ' \
                    <div class=" TP_dialog_alert hide">\
                    <div class="TP_mask"></div>\
                    <div class="TP_dialog">\
                    <div class="TP_dialog_hd"><strong class="TP_dialog_title"></strong></div>\
                    <div class="TP_dialog_bd"></div>\
                    <div class="TP_dialog_ft">\
                    <a href="javascript:void(0);"  class="TP_btn_dialog primary"></a>\
                    </div>\
                    </div>\
                    </div>',
        toast: '\
                    <div class="TP_complete_toast  hide">\
                    <div class="TP_mask_transparent"></div>\
                    <div class="TP_toast">\
                    <i class="TP_icon_toast"></i>\
                    <p  class="TP_toast_content">get~</p>\
                    </div>\
                    </div>',
        loading: '\
                     <div class="TP_loading_toast  hide">\
                     <div class="TP_mask_transparent"></div>\
                     <div class="TP_toast">\
                     <div class="TP_loading">\
                     <div class="TP_loading_leaf TP_loading_leaf_0"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_1"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_2"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_3"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_4"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_5"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_6"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_7"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_8"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_9"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_10"></div>\
                     <div class="TP_loading_leaf TP_loading_leaf_11"></div>\
                     </div>\
                     <p class="TP_toast_content"></p>\
                     </div>\
                     </div>',
        actionsheet: '\
                <div class="actionSheet_wrap  hide">\
                <div class="TP_mask_transition  TP_fade_toggle"></div>\
                <div class="TP_actionsheet  TP_actionsheet_toggle">\
                <div class="TP_actionsheet_menu">\
                </div>\
                <div class="TP_actionsheet_action">\
                <div class="TP_actionsheet_cell   actionsheet_cancel" ></div>\
                </div>\
                </div>\
                </div>',
        actionsheet_cell:'<div  class="TP_actionsheet_cell"></div>'
    };
    //对话框默认值设置
    var defaults = {
        alert: {
            title: "提示",
            content: "",
            btn_text: "确定",
            success: function () {

            }
        },
        confirm: {
            title: "提示",
            content: "",
            ok_text: "确定",
            cancel_text: "取消",
            success: function () {

            },
            cancel: function () {

            }
        },
        toast: {
            content: "已完成",
            timeout: 1
        },
        loading: {
            content: "数据加载中",
            isshow: true
        },
        actionsheet: {
            cells: [
                {
                    text:"",
                    success: function () {
                    }
                }
            ],
            cancel_text: "取消",
            cancel_callback: function () {
            }
        }
    };
    //构造键值对构造函数
    tp.Dialog = {
        //alert警告框,传入参数和回调函数
        alert: function (options, callback) {
            //判断传入的options赋值给content
            if (!$.isPlainObject(options)) {
                options = {
                    content: options
                };
                //将回调函数赋值给options.success
                if (callback && $.isFunction(callback)) {
                    options.success = callback;
                }
            }
            //赋值,将options的值赋给defaults.alert,再将defaults.alert赋值给{},生成一个新的对象
            var opts = $.extend({}, defaults.alert, options);
            //当opts不符合条件时,中断返回
            if (opts.content == "" || opts.content == null || opts.content == false || $.type(opts.content) != "string") {
                return;
            }
            //如果传入的success不是函数,将success赋值成为空函数
            if (!$.isFunction(opts.success)) {
                opts.success = $.noop;
            }
            //.TP_dialog_alert不存在时,在body标签下添加html
            if ($(".TP_dialog_alert").size() == 0)
                $("body").append(tpls.alert);
            //console.log(tpls.alert);

            var _DOM = $(".TP_dialog_alert");
            _DOM.find(".TP_dialog_title").text(opts.title);
            _DOM.find(".TP_dialog_bd").html(opts.content);
            _DOM.find(".TP_btn_dialog").text(opts.btn_text).off("tap").on("tap", function () {
                _DOM.addClass("hide");
                opts.success();
            });
            _DOM.removeClass("hide");
        },
        confirm: function (options, success_callback, cancel_callback) {
            if (!$.isPlainObject(options)) {
                options = {
                    content: options
                };
                if (success_callback && $.isFunction(success_callback)) {
                    options.success = success_callback;
                }
                if (cancel_callback && $.isFunction(cancel_callback)) {
                    options.cancel = cancel_callback;
                }
            }


            var opts = $.extend({}, defaults.confirm, options);
            if (opts.content == "" || opts.content == null || opts.content == false || $.type(opts.content) != "string") {
                return;
            }
            if (!$.isFunction(opts.success)) {
                opts.success = $.noop;
            }
            if (!$.isFunction(opts.cancel)) {
                opts.cancel = $.noop;
            }

            if ($(".TP_dialog_confirm").size() == 0) {
                $("body").append(tpls.confirm);

            }

            var _DOM = $(".TP_dialog_confirm");
            _DOM.find(".TP_dialog_title").text(opts.title);
            _DOM.find(".TP_dialog_bd").html(opts.content);
            _DOM.find(".TP_btn_dialog.default").text(opts.cancel_text).off("tap").on("tap", function () {
                _DOM.addClass("hide");
                opts.cancel();
            });

            _DOM.find(".TP_btn_dialog.primary").text(opts.ok_text).off("tap").on("tap", function () {
                _DOM.addClass("hide");
                opts.success();
            });
            _DOM.removeClass("hide");


        },
        toast: function (options, timeout) {
            //判断传入的options赋值给content
            if (!$.isPlainObject(options)) {
                options = {
                    content: options
                };
                //将回调函数赋值给options.success
                if ($.type(timeout) == "number") {
                    options.timeout = timeout;
                }
            }
            //赋值,将options的值赋给defaults.alert,再将defaults.alert赋值给{},生成一个新的对象
            var opts = $.extend({}, defaults.toast, options);
            //当opts不符合条件时,中断返回
            if (opts.content == "" || opts.content == null || opts.content == false || $.type(opts.content) != "string") {
                return;
            }
            if ($.type(timeout) != "number") {
                opts.timeout = 1;
            }
            //.TP_toast_不存在时,在body标签下添加html
            if ($(".TP_complete_toast").size() == 0)
                $("body").append(tpls.toast);

            var _DOM = $(".TP_complete_toast");
            _DOM.find(".TP_toast_content").html(opts.content);
            _DOM.removeClass("hide");
            setTimeout(function () {
                _DOM.addClass("hide");
            }, opts.timeout * 1000);

        },
        loading: function (options) {
            if (!$.isPlainObject(options)) {
                options = {
                    content: options
                };
            }
            //赋值,将options的值赋给defaults.alert,再将defaults.alert赋值给{},生成一个新的对象
            var opts = $.extend({}, defaults.loading, options);
            //当opts不符合条件时,中断返回
            if (opts.content == "" || opts.content == null || opts.content == false || $.type(opts.content) != "string") {
                return;
            }

            //.TP_toast_不存在时,在body标签下添加html
            if ($(".TP_loading_toast").size() == 0)
                $("body").append(tpls.loading);

            var _DOM = $(".TP_loading_toast");
            _DOM.find(".TP_toast_content").html(opts.content);
            if (opts.isshow)_DOM.removeClass("hide");
            return {
                open: function () {
                    _DOM.removeClass("hide");
                },
                close: function () {
                    _DOM.addClass("hide");
                }
            };
        },
        actionsheet: function (options, cancel_callback) {



            var opts = $.extend({}, defaults.actionsheet, options);
            if (!$.isArray(opts.cells)) {
                return;
            }

            if (!$.isFunction(opts.cancel_callback)) {
                opts.cancel_callback = $.noop;
            }

            if ($(".actionSheet_wrap").size() == 0)
                $("body").append(tpls.actionsheet);


            var _DOM = $(".actionSheet_wrap");

            _DOM.find(".TP_actionsheet_menu").html("");
            var cells_html="";
            $.each(opts.cells, function (i, cell) {
                _DOM.find(".TP_actionsheet_menu").append($(tpls.actionsheet_cell).html(cell.text).off("tap").on("tap", function () {
                    _DOM.addClass("hide");
                    if($.isFunction(cell.success))cell.success();
                }));

            });
            _DOM.find(".actionsheet_cancel").text(opts.cancel_text).off("tap").on("tap", function () {
                _DOM.addClass("hide");
                opts.cancel_callback();
            });
            _DOM.removeClass("hide");
        }
    };

})(Zepto);


