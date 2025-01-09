const cache = {
    get: function (key) {
        return sessionStorage.getItem(key);
    },
    set: function(key, value) {
        sessionStorage.setItem(key, value);
    },
    remove: function(key) {
        sessionStorage.removeItem(key);
    },
    clear: function() {
        sessionStorage.clear();
    },
}

export default cache;