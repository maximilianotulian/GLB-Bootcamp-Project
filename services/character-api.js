// LIBS
var $ = require('jquery');
var _ = require('lodash');

// ERROR REQUEST MANAGER
var onRequestError = function (xhr, status, error) {
    console.log('something went brong ' + error);
};

// FILTER INFORMATION
var filterRealmInfo = function (result) {
    /*var indexRealm = 0;
    var response = [];

    _.each(result, function(realm) {
        response.push({
            name: realm.name,
            status: realm.status,
            type: realm.type,
            population: realm.population
        })
    });*/
    return result;
};
var filterItemsInfo = function (result) {
    return [result];
};
var filterPvpInfo = function (result) {
    return result;
};
var filterStatsInfo = function (result) {
    return [{
        attack: result.attackPower,
        agility: result.agi,
        health: result.health,
        intelligence: result.int,
        stamina: result.sta,
        strength: result.str,
        mana: result.power,
        spell: result.spellPower
    }]
};
var filterCharacterInfo = function (result) {

    /*return {
        info: [{
            achievementPoints: result.achievementPoints,
            class: result.class,
            gender: result.gender,
            name: result.name,
            race: result.race,
            level: result.level,
            thumbnail: result.thumbnail
        }],
        items: filterItemsInfo(result.items),
        pvp: filterPvpInfo(result.pvp),
        stats: filterStatsInfo(result.stats)
    };*/
    return result;
};
var filterChallengeInfo = function (result) {
    return result.challenge;
};
var filterLeaderBoardsInfo = function (result) {
    return result;
};
var filterGuildInfo = function (result) {
    return result;
};

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

    $.ajax({
        url: 'https://us.api.battle.net/wow/realm/status',
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key
        },
        success: function (result) {
            success(filterRealmInfo(result));
        },
        error: onRequestError
    });
};

// REQUIREMENT 2
CharacterApi.prototype.getCharacterInfo = function (success, name, realm) {

    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + (realm || this.realm) + '/' + (name || this.name),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: 'items pvp stats'
        },
        success: function (result) {
            success(filterCharacterInfo(result));
        },
        error: onRequestError
    });
};

// REQUIREMENT 3
CharacterApi.prototype.getChallengeRealm = function (success, realm) {

    $.ajax({
        url: 'https://us.api.battle.net/wow/challenge/'+ (realm || this.realm),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key
        },
        success: function (result) {
            success(filterChallengeInfo(result));
        },
        error: onRequestError
    });
};

// REQUIREMENT 4
CharacterApi.prototype.getLeaderBoards = function (success, bracket) {

    $.ajax({
        url: 'https://us.api.battle.net/wow/leaderboard/' + (bracket || this.bracket),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key
        },
        success: function (result) {
            success(filterLeaderBoardsInfo(result))
        },
        error: onRequestError
    });
};

// REQUIREMENT 5
CharacterApi.prototype.getGuildProfile = function (success, realm, guildName) {

    $.ajax({
        url: 'https://us.api.battle.net/wow/guild/' + (realm || this.realm) + '/' + (guildName || this.guildName),
        type: 'get',
        dataType: 'json',
        data: {
            locale: this.locale,
            apikey: this.key,
            fields: 'members'
        },
        success: function (result) {
            success(filterGuildInfo(result));
        },
        error: onRequestError
    });
};

module.exports = new CharacterApi();