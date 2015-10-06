// LIBS
var $ = require('jquery');
var _ = require('lodash');

var CharacterApi = function () {
    this.key = '7bfpgbdmryu2vcrcxyf8f7psyjv86a6n';
    this.locale = 'en_US';
    this.realm = 'Ragnaros';
    this.name = 'DarkViciuz';
};

CharacterApi.prototype.get = function (attr) {
    return this[attr];
};
CharacterApi.prototype.set = function (attr, value) {
    this[attr] = value;
};
CharacterApi.prototype.getRealmStatus = function (success) {

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
        success: success,
        error: onRequestError
    });
};
CharacterApi.prototype.getCharacterInfo = function (success) {

};
CharacterApi.prototype.getCharacterProfile = function (success, name, realm) {

    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + (realm || this.realm) + '/' + (name || this.name),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: ''//create a data set with the relevant items
        },
        success: success,
        error: onRequestError
    });

};
CharacterApi.prototype.getItems = function (success, name, realm) {
    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + (realm || this.realm) + '/' + (name || this.name),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: 'items'
        },
        success: onRequestSuccess,
        error: onRequestError
    });
};
CharacterApi.prototype.getPvp = function (success, name, realm) {
    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + (realm || this.realm) + '/' + (name || this.name),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: 'pvp'
        },
        success: onRequestSuccess,
        error: onRequestError
    });
};
CharacterApi.prototype.getStats = function (success, name, realm) {
    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + (realm || this.realm) + '/' + (name || this.name),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: 'stats'
        },
        success: onRequestSuccess,
        error: onRequestError
    });
};

module.exports = new CharacterApi();