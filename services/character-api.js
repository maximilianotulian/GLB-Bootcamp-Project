module.exports = (function () {

    var $ = require('jquery');
    var _ = require('lodash');

    var CharacterApi = function () {
        this.key = '7bfpgbdmryu2vcrcxyf8f7psyjv86a6n';
    };

    CharacterApi.prototype.getRealmStatus = function () {


        var onRequestSuccess = function (result) {
            var resultado = [];
            console.log(result.realms);

            $.each(result.realms, function (index, realm) {
                resultado.push({realm: realm.name, status: realm.status});
            });
            console.log(resultado);
        };

        var onRequestError = function (xhr, status, error) {
            console.log('something went brong ' + error);
            //container.append('<p>Something went wrong ' + status + ' '+ error +'</p>');
        };

        $.ajax({
                url: 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=' + this.key,
                type: 'get',
                dataType: 'json',
                success: onRequestSuccess,
                error: onRequestError
            });
    };

    return new CharacterApi();
})();
