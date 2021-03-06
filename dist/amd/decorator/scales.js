define(['exports', '../config', 'aurelia-dependency-injection'], function (exports, _config, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.scales = scales;
  function scales() {
    for (var _len = arguments.length, scaleTypes = Array(_len), _key = 0; _key < _len; _key++) {
      scaleTypes[_key] = arguments[_key];
    }

    var config = _aureliaDependencyInjection.Container.instance.get(_config.Config);

    return function (target) {
      config.registerScales.apply(config, [target].concat(scaleTypes));
    };
  }
});