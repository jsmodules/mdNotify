angular.module("notifyMd",["ngMaterial"]).service("$notifyMd",["$q","$window","$mdToast",function(i,e,n){"use strict";var t,o;return"undefined"!=typeof e.document.hidden?(t="hidden",o="visibilitychange"):"undefined"!=typeof e.document.mozHidden?(t="mozHidden",o="mozvisibilitychange"):"undefined"!=typeof e.document.msHidden?(t="msHidden",o="msvisibilitychange"):"undefined"!=typeof e.document.webkitHidden&&(t="webkitHidden",o="webkitvisibilitychange"),"denied"!==e.Notification.permission&&Notification.requestPermission(),function(d,s){s=s||{};var a=i.defer(),c=function(i){i&&e.document.removeEventListener(o,this);var t=n.simple().content(d);s.hideDelay&&t.hideDelay(s.hideDelay),s.action&&t.action(s.action),s.position&&t.position(s.position),n.show(t).then(a.resolve)};return"Notification"in e&&"granted"===e.Notification.permission?(a.resolve(new e.Notification(d)),a.promise):(t&&o&&e.document[t]?e.document.addEventListener(o,c):c(null),a.promise)}}]);