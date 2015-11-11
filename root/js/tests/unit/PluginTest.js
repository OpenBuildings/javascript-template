$(function () {
    'use strict'

    QUnit.test('constructor', function (assert) {
        var plugin = new {% package_classname %}()

        assert.equal(plugin, ...)
    })
})
