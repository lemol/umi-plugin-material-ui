"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// ref:
// - https://umijs.org/plugin/develop.html
function _default(api, options) {
  api.addHTMLMeta({
    name: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
  });
  api.addHTMLLink({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
  });
  api.addHTMLLink({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  });
}