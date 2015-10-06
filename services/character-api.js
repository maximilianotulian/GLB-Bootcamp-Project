module.exports = (function () {

    var $ = require('jquery');
    var _ = require('lodash');

    var CharacterApi = function () {
        this.key = '7bfpgbdmryu2vcrcxyf8f7psyjv86a6n';
        this.locale = 'en_US';
    };

    CharacterApi.prototype.getRealmStatus = function () {

        var realms = [];
        var state = false;
        var response;

        var onRequestSuccess = function (result) {
            realms = result;
            state = true;
        };

        var onRequestError = function (xhr, status, error) {
            console.log('something went brong ' + error);
            //container.append('<p>Something went wrong ' + status + ' '+ error +'</p>');
        };

        $.ajax({
                url: 'https://us.api.battle.net/wow/realm/status?locale=' + this.locale + '&apikey=' + this.key,
                type: 'get',
                dataType: 'json',
                success: onRequestSuccess,
                error: onRequestError
            });

        response = {
            realms: realms,
            state: state
        };

        return response;
    };

    return new CharacterApi();
})();
