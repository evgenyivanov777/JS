"use strict";

function objectToQueryString(obj) {
  return Object.keys(obj).map(function(key) {return key + '=' + obj[key]}).join(' & ')
}

console.log(objectToQueryString({name: 'Tom', surname: 'Hanks', age: 30, id: 7}));
