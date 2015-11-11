/* Copyright {% copyright %} Licensed under BSD-3-Clause
 * See license text at https://github.com/{% package_name %}/blob/master/LICENSE */

 /* exported {% package_classname %} */

var {% package_classname %} = (function ($) {

    'use strict'

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = '{% package_title %}'
    var DATA_KEY            = 'cl.{% package_title %}'
    var EVENT_KEY           = '.' + DATA_KEY

    var Event = {
        CLICK   : 'click'
    }

    var Selector = {
        WIDGET   : '[data-toggle="{% package_title %}"]'
    }

    var Default = {
        debug: true
    }

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    /**
     * @param  {jQuery} element
     * @param  {Object} options
     */
    function {% package_classname %}(element, options) {
        this.$element = $(element)
        this._options  = this._getOptions(options || {})
    }

    // getters

    {% package_classname %}.Default = Default

    {% package_classname %}.NAME = NAME

    {% package_classname %}.DATA_KEY = DATA_KEY

    {% package_classname %}.EVENT_KEY = EVENT_KEY

    {% package_classname %}.prototype.options = function () {
        return this._options
    }

    // public

    /**
     * Update an option directly
     *
     * @param  {String} name
     * @param  {mixed} value
     */
    {% package_classname %}.prototype.option = function (name, value) {
        this._options[name] = value
    }

    // private
    // ------------------------------------------------------------------------

    {% package_classname %}.prototype._getOptions = function (options) {
        return $.extend(true, {}, Default, options)
    }

    // static

    {% package_classname %}._jQueryInterface = function (config, a1, a2, a3) {
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data(DATA_KEY)
            var _config = $.extend(
                true,
                {},
                Default,
                $this.data(),
                typeof config === 'object' && config
            )

            if (!data) {
                data = new {% package_classname %}(this, _config)
                $this.data(DATA_KEY, data)
            }

            if (typeof config === 'string') {
                data[config](a1, a2, a3)
            }
        })
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
        .on(Event.CLICK, Selector.WIDGET, function (event) {

        })

    /**
    * ------------------------------------------------------------------------
    * jQuery
    * ------------------------------------------------------------------------
    */

    $.fn[NAME]        = {% package_classname %}._jQueryInterface
    $.fn[NAME].{% package_classname %} = {% package_classname %}

    return {% package_classname %}

})(jQuery)
