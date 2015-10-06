var LocalStorage = function () {

};

LocalStorage.prototype.setObject = function (key, value) {
    window.localStorage[key] = JSON.stringify(value);
};

LocalStorage.prototype.getObject = function (key) {
    return JSON.parse(window.localStorage[key] || null);
};

LocalStorage.prototype.clear = function () {
    window.localStorage.clear();
};

module.exports = new LocalStorage();