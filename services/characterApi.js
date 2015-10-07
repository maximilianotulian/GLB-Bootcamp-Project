// LIBS
var $ = require('jquery');
var _ = require('lodash');

var CharacterApi = function () {
    this.bracket = '2v2';
    this.guildName = 'Champions of Tyrium';
    this.key = '7bfpgbdmryu2vcrcxyf8f7psyjv86a6n';
    this.locale = 'en_US';
    this.name = 'DarkViciuz';
    this.realm = 'Ragnaros';
};

CharacterApi.prototype.get = function (attr) {
    return this[attr];
};
CharacterApi.prototype.set = function (attr, value) {
    this[attr] = value;
};

// REQUIREMENT 1
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

// REQUIREMENT 2
CharacterApi.prototype.getCharacterInfo = function (success, name, realm) {
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
            fields: 'items pvp stats'
        },
        success: success,
        error: onRequestError
    });
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
            apikey: this.key
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
        success: success,
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
        success: success,
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
        success: success,
        error: onRequestError
    });
};

// REQUIREMENT 3
CharacterApi.prototype.getChallengeRealm = function (success, realm) {
    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/challenge/' + (realm || this.realm),
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

// REQUIREMENT 4
CharacterApi.prototype.getLeaderBoards = function (success, bracket) {
    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/leaderboard/' + (bracket|| this.bracket),
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

// REQUIREMENT 5
CharacterApi.prototype.getGuildProfile = function (success, realm, guildName) {
    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/guild/' + (realm|| this.realm) + '/' + (guildName || this.guildName) ,
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: 'members'
        },
        success: success,
        error: onRequestError
    });
};
CharacterApi.prototype.getGuildMembers = function (success, realm, guildName) {
    var onRequestError = function (xhr, status, error) {
        console.log('something went brong ' + error);
    };

    $.ajax({
        url: 'https://us.api.battle.net/wow/guild/' + (realm|| this.realm) + '/' + (guildName || this.guildName) ,
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: 'members'
        },
        success: success,
        error: onRequestError
    });
};

module.exports = new CharacterApi();