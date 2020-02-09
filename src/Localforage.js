exports["_createInstance"] = function(config) {
  return function() {
    return require("localforage").createInstance(config);
  }
}

exports["_dropInstance"] = function(success) {
  return function(error) {
    return function(db) {
      return function() {
        db.dropInstance()
          .then(function() { success(); })
          .catch(function(err) { error(err)(); })
      }
    }
  }
}

exports["_keys"] = function(success) {
  return function(error) {
    return function(db) {
      return function() {
        db.keys()
          .then(function(value) { success(value)(); })
          .catch(function(err) { error(err)(); })
      }
    }
  }
}

exports["_getItem"] = function(success) {
  return function(error) {
    return function(db) {
      return function(key) {
        return function() {
          db.getItem(key)
            .then(function(value) { success(value)(); })
            .catch(function(err) { error(err)(); })
        }
      }
    }
  }
}

exports["_setItem"] = function(success) {
  return function(error) {
    return function(db) {
      return function(key) {
        return function(value) {
          return function() {
            db.setItem(key, value)
              .then(function(value) { success(value)(); })
              .catch(function(err) { error(err)(); })
          }
        }
      }
    }
  }
}

exports["_removeItem"] = function(success) {
  return function(error) {
    return function(db) {
      return function(key) {
        return function() {
          db.removeItem(key)
            .then(function() { success(); })
            .catch(function(err) { error(err)(); })
        }
      }
    }
  }
}

exports["_clear"] = function(success) {
  return function(error) {
    return function(db) {
      return function() {
        db.clear()
          .then(function() { success(); })
          .catch(function(err) { error(err)(); })
      }
    }
  }
}

exports["getLocalforageDriver"] = function(type) {
  let localforage = require("localforage");
  if (type == "indexeddb") {
    return localforage.INDEXEDDB;
  } else if (type == "websql") {
    return localforage.WEBSQL;
  } else {
    return localforage.LOCALSTORAGE;
  }
}