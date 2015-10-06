// LIBS
var $ = require('jquery');
var localStorage = require('./localStorage');
var _ = require('lodash');

var CharacterApi = function (key, locale) {
    this.key = key || '7bfpgbdmryu2vcrcxyf8f7psyjv86a6n';
    this.locale = locale || 'en_US';
};

CharacterApi.prototype.getRealmStatus = function () {

    if (!localStorage.getObject('realms')) {
        var onRequestSuccess = function (result) {
            localStorage.setObject('realms', result.realms);
        };
        var onRequestError = function (xhr, status, error) {
            console.log('something went brong ' + error);
        };

        $.ajax({
            url: 'https://us.api.battle.net/wow/realm/status',
            type: 'get',
            dataType: 'json',
            data: {
                locale: this.locale,
                apikey: this.key
            },
            success: onRequestSuccess,
            error: onRequestError
        });
    }
    return localStorage.getObject('realms')
};

module.exports = new CharacterApi();