"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mime-types";
exports.ids = ["vendor-chunks/mime-types"];
exports.modules = {

/***/ "(ssr)/./node_modules/mime-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-types/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*!\n * mime-types\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar db = __webpack_require__(/*! mime-db */ \"(ssr)/./node_modules/mime-db/index.js\")\nvar extname = (__webpack_require__(/*! path */ \"path\").extname)\n\n/**\n * Module variables.\n * @private\n */\n\nvar EXTRACT_TYPE_REGEXP = /^\\s*([^;\\s]*)(?:;|\\s|$)/\nvar TEXT_TYPE_REGEXP = /^text\\//i\n\n/**\n * Module exports.\n * @public\n */\n\nexports.charset = charset\nexports.charsets = { lookup: charset }\nexports.contentType = contentType\nexports.extension = extension\nexports.extensions = Object.create(null)\nexports.lookup = lookup\nexports.types = Object.create(null)\n\n// Populate the extensions/types maps\npopulateMaps(exports.extensions, exports.types)\n\n/**\n * Get the default charset for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */\n\nfunction charset (type) {\n  if (!type || typeof type !== 'string') {\n    return false\n  }\n\n  // TODO: use media-typer\n  var match = EXTRACT_TYPE_REGEXP.exec(type)\n  var mime = match && db[match[1].toLowerCase()]\n\n  if (mime && mime.charset) {\n    return mime.charset\n  }\n\n  // default text/* to utf-8\n  if (match && TEXT_TYPE_REGEXP.test(match[1])) {\n    return 'UTF-8'\n  }\n\n  return false\n}\n\n/**\n * Create a full Content-Type header given a MIME type or extension.\n *\n * @param {string} str\n * @return {boolean|string}\n */\n\nfunction contentType (str) {\n  // TODO: should this even be in this module?\n  if (!str || typeof str !== 'string') {\n    return false\n  }\n\n  var mime = str.indexOf('/') === -1\n    ? exports.lookup(str)\n    : str\n\n  if (!mime) {\n    return false\n  }\n\n  // TODO: use content-type or other module\n  if (mime.indexOf('charset') === -1) {\n    var charset = exports.charset(mime)\n    if (charset) mime += '; charset=' + charset.toLowerCase()\n  }\n\n  return mime\n}\n\n/**\n * Get the default extension for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */\n\nfunction extension (type) {\n  if (!type || typeof type !== 'string') {\n    return false\n  }\n\n  // TODO: use media-typer\n  var match = EXTRACT_TYPE_REGEXP.exec(type)\n\n  // get extensions\n  var exts = match && exports.extensions[match[1].toLowerCase()]\n\n  if (!exts || !exts.length) {\n    return false\n  }\n\n  return exts[0]\n}\n\n/**\n * Lookup the MIME type for a file path/extension.\n *\n * @param {string} path\n * @return {boolean|string}\n */\n\nfunction lookup (path) {\n  if (!path || typeof path !== 'string') {\n    return false\n  }\n\n  // get the extension (\"ext\" or \".ext\" or full path)\n  var extension = extname('x.' + path)\n    .toLowerCase()\n    .substr(1)\n\n  if (!extension) {\n    return false\n  }\n\n  return exports.types[extension] || false\n}\n\n/**\n * Populate the extensions and types maps.\n * @private\n */\n\nfunction populateMaps (extensions, types) {\n  // source preference (least -> most)\n  var preference = ['nginx', 'apache', undefined, 'iana']\n\n  Object.keys(db).forEach(function forEachMimeType (type) {\n    var mime = db[type]\n    var exts = mime.extensions\n\n    if (!exts || !exts.length) {\n      return\n    }\n\n    // mime -> extensions\n    extensions[type] = exts\n\n    // extension -> mime\n    for (var i = 0; i < exts.length; i++) {\n      var extension = exts[i]\n\n      if (types[extension]) {\n        var from = preference.indexOf(db[types[extension]].source)\n        var to = preference.indexOf(mime.source)\n\n        if (types[extension] !== 'application/octet-stream' &&\n          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {\n          // skip the remapping\n          continue\n        }\n      }\n\n      // set the extension -> mime\n      types[extension] = type\n    }\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWltZS10eXBlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxtQkFBTyxDQUFDLHNEQUFTO0FBQzFCLGNBQWMsaURBQXVCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsU0FBUztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2YsZ0JBQWdCLEtBQUs7QUFDckIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc210cC1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9taW1lLXR5cGVzL2luZGV4LmpzPzYwNzYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBtaW1lLXR5cGVzXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGIgPSByZXF1aXJlKCdtaW1lLWRiJylcbnZhciBleHRuYW1lID0gcmVxdWlyZSgncGF0aCcpLmV4dG5hbWVcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgRVhUUkFDVF9UWVBFX1JFR0VYUCA9IC9eXFxzKihbXjtcXHNdKikoPzo7fFxcc3wkKS9cbnZhciBURVhUX1RZUEVfUkVHRVhQID0gL150ZXh0XFwvL2lcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmNoYXJzZXQgPSBjaGFyc2V0XG5leHBvcnRzLmNoYXJzZXRzID0geyBsb29rdXA6IGNoYXJzZXQgfVxuZXhwb3J0cy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlXG5leHBvcnRzLmV4dGVuc2lvbiA9IGV4dGVuc2lvblxuZXhwb3J0cy5leHRlbnNpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuZXhwb3J0cy5sb29rdXAgPSBsb29rdXBcbmV4cG9ydHMudHlwZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8vIFBvcHVsYXRlIHRoZSBleHRlbnNpb25zL3R5cGVzIG1hcHNcbnBvcHVsYXRlTWFwcyhleHBvcnRzLmV4dGVuc2lvbnMsIGV4cG9ydHMudHlwZXMpXG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IGNoYXJzZXQgZm9yIGEgTUlNRSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBjaGFyc2V0ICh0eXBlKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBtZWRpYS10eXBlclxuICB2YXIgbWF0Y2ggPSBFWFRSQUNUX1RZUEVfUkVHRVhQLmV4ZWModHlwZSlcbiAgdmFyIG1pbWUgPSBtYXRjaCAmJiBkYlttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXVxuXG4gIGlmIChtaW1lICYmIG1pbWUuY2hhcnNldCkge1xuICAgIHJldHVybiBtaW1lLmNoYXJzZXRcbiAgfVxuXG4gIC8vIGRlZmF1bHQgdGV4dC8qIHRvIHV0Zi04XG4gIGlmIChtYXRjaCAmJiBURVhUX1RZUEVfUkVHRVhQLnRlc3QobWF0Y2hbMV0pKSB7XG4gICAgcmV0dXJuICdVVEYtOCdcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bGwgQ29udGVudC1UeXBlIGhlYWRlciBnaXZlbiBhIE1JTUUgdHlwZSBvciBleHRlbnNpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gY29udGVudFR5cGUgKHN0cikge1xuICAvLyBUT0RPOiBzaG91bGQgdGhpcyBldmVuIGJlIGluIHRoaXMgbW9kdWxlP1xuICBpZiAoIXN0ciB8fCB0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyIG1pbWUgPSBzdHIuaW5kZXhPZignLycpID09PSAtMVxuICAgID8gZXhwb3J0cy5sb29rdXAoc3RyKVxuICAgIDogc3RyXG5cbiAgaWYgKCFtaW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBUT0RPOiB1c2UgY29udGVudC10eXBlIG9yIG90aGVyIG1vZHVsZVxuICBpZiAobWltZS5pbmRleE9mKCdjaGFyc2V0JykgPT09IC0xKSB7XG4gICAgdmFyIGNoYXJzZXQgPSBleHBvcnRzLmNoYXJzZXQobWltZSlcbiAgICBpZiAoY2hhcnNldCkgbWltZSArPSAnOyBjaGFyc2V0PScgKyBjaGFyc2V0LnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIHJldHVybiBtaW1lXG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IGV4dGVuc2lvbiBmb3IgYSBNSU1FIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAodHlwZSkge1xuICBpZiAoIXR5cGUgfHwgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBUT0RPOiB1c2UgbWVkaWEtdHlwZXJcbiAgdmFyIG1hdGNoID0gRVhUUkFDVF9UWVBFX1JFR0VYUC5leGVjKHR5cGUpXG5cbiAgLy8gZ2V0IGV4dGVuc2lvbnNcbiAgdmFyIGV4dHMgPSBtYXRjaCAmJiBleHBvcnRzLmV4dGVuc2lvbnNbbWF0Y2hbMV0udG9Mb3dlckNhc2UoKV1cblxuICBpZiAoIWV4dHMgfHwgIWV4dHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZXh0c1swXVxufVxuXG4vKipcbiAqIExvb2t1cCB0aGUgTUlNRSB0eXBlIGZvciBhIGZpbGUgcGF0aC9leHRlbnNpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGxvb2t1cCAocGF0aCkge1xuICBpZiAoIXBhdGggfHwgdHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBnZXQgdGhlIGV4dGVuc2lvbiAoXCJleHRcIiBvciBcIi5leHRcIiBvciBmdWxsIHBhdGgpXG4gIHZhciBleHRlbnNpb24gPSBleHRuYW1lKCd4LicgKyBwYXRoKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnN1YnN0cigxKVxuXG4gIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy50eXBlc1tleHRlbnNpb25dIHx8IGZhbHNlXG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGV4dGVuc2lvbnMgYW5kIHR5cGVzIG1hcHMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWFwcyAoZXh0ZW5zaW9ucywgdHlwZXMpIHtcbiAgLy8gc291cmNlIHByZWZlcmVuY2UgKGxlYXN0IC0+IG1vc3QpXG4gIHZhciBwcmVmZXJlbmNlID0gWyduZ2lueCcsICdhcGFjaGUnLCB1bmRlZmluZWQsICdpYW5hJ11cblxuICBPYmplY3Qua2V5cyhkYikuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoTWltZVR5cGUgKHR5cGUpIHtcbiAgICB2YXIgbWltZSA9IGRiW3R5cGVdXG4gICAgdmFyIGV4dHMgPSBtaW1lLmV4dGVuc2lvbnNcblxuICAgIGlmICghZXh0cyB8fCAhZXh0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIG1pbWUgLT4gZXh0ZW5zaW9uc1xuICAgIGV4dGVuc2lvbnNbdHlwZV0gPSBleHRzXG5cbiAgICAvLyBleHRlbnNpb24gLT4gbWltZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dHNbaV1cblxuICAgICAgaWYgKHR5cGVzW2V4dGVuc2lvbl0pIHtcbiAgICAgICAgdmFyIGZyb20gPSBwcmVmZXJlbmNlLmluZGV4T2YoZGJbdHlwZXNbZXh0ZW5zaW9uXV0uc291cmNlKVxuICAgICAgICB2YXIgdG8gPSBwcmVmZXJlbmNlLmluZGV4T2YobWltZS5zb3VyY2UpXG5cbiAgICAgICAgaWYgKHR5cGVzW2V4dGVuc2lvbl0gIT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nICYmXG4gICAgICAgICAgKGZyb20gPiB0byB8fCAoZnJvbSA9PT0gdG8gJiYgdHlwZXNbZXh0ZW5zaW9uXS5zdWJzdHIoMCwgMTIpID09PSAnYXBwbGljYXRpb24vJykpKSB7XG4gICAgICAgICAgLy8gc2tpcCB0aGUgcmVtYXBwaW5nXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGV4dGVuc2lvbiAtPiBtaW1lXG4gICAgICB0eXBlc1tleHRlbnNpb25dID0gdHlwZVxuICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mime-types/index.js\n");

/***/ })

};
;