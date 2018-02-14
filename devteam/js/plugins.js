/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * MIT License
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function(e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
  },
  easeInQuad: function(e, f, a, h, g) {
    return h * (f /= g) * f + a
  },
  easeOutQuad: function(e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a
  },
  easeInOutQuad: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f + a
    }
    return -h / 2 * ((--f) * (f - 2) - 1) + a
  },
  easeInCubic: function(e, f, a, h, g) {
    return h * (f /= g) * f * f + a
  },
  easeOutCubic: function(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a
  },
  easeInOutCubic: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f + 2) + a
  },
  easeInQuart: function(e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a
  },
  easeOutQuart: function(e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a
  },
  easeInOutQuart: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f + a
    }
    return -h / 2 * ((f -= 2) * f * f * f - 2) + a
  },
  easeInQuint: function(e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a
  },
  easeOutQuint: function(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a
  },
  easeInOutQuint: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
  },
  easeInSine: function(e, f, a, h, g) {
    return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
  },
  easeOutSine: function(e, f, a, h, g) {
    return h * Math.sin(f / g * (Math.PI / 2)) + a
  },
  easeInOutSine: function(e, f, a, h, g) {
    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
  },
  easeInExpo: function(e, f, a, h, g) {
    return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
  },
  easeOutExpo: function(e, f, a, h, g) {
    return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
  },
  easeInOutExpo: function(e, f, a, h, g) {
    if (f == 0) {
      return a
    }
    if (f == g) {
      return a + h
    }
    if ((f /= g / 2) < 1) {
      return h / 2 * Math.pow(2, 10 * (f - 1)) + a
    }
    return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
  },
  easeInCirc: function(e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
  },
  easeOutCirc: function(e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
  },
  easeInOutCirc: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
    }
    return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
  },
  easeInElastic: function(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e
    }
    if ((h /= k) == 1) {
      return e + l
    }
    if (!j) {
      j = k * 0.3
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
  },
  easeOutElastic: function(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e
    }
    if ((h /= k) == 1) {
      return e + l
    }
    if (!j) {
      j = k * 0.3
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
  },
  easeInOutElastic: function(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e
    }
    if ((h /= k / 2) == 2) {
      return e + l
    }
    if (!j) {
      j = k * (0.3 * 1.5)
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    if (h < 1) {
      return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    }
    return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
  },
  easeInBack: function(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a
  },
  easeOutBack: function(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
  },
  easeInOutBack: function(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158
    }
    if ((f /= h / 2) < 1) {
      return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
    }
    return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
  },
  easeInBounce: function(e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
  },
  easeOutBounce: function(e, f, a, h, g) {
    if ((f /= g) < (1 / 2.75)) {
      return h * (7.5625 * f * f) + a
    } else {
      if (f < (2 / 2.75)) {
        return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
      } else {
        if (f < (2.5 / 2.75)) {
          return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
        } else {
          return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
        }
      }
    }
  },
  easeInOutBounce: function(e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
    }
    return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
  }
});


/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function() {
  "use strict";

  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;)
      if (e[n].listener === t) return n;
    return -1
  }

  function n(e) {
    return function() {
      return this[e].apply(this, arguments)
    }
  }
  var i = e.prototype,
    r = this,
    s = r.EventEmitter;
  i.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, i.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
    return n
  }, i.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, i.addListener = function(e, n) {
    var i, r = this.getListenersAsObject(e),
      s = "object" == typeof n;
    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
      listener: n,
      once: !1
    });
    return this
  }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    })
  }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
    return this.getListeners(e), this
  }, i.defineEvents = function(e) {
    for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
    return this
  }, i.removeListener = function(e, n) {
    var i, r, s = this.getListenersAsObject(e);
    for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t)
  }, i.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t)
  }, i.manipulateListeners = function(e, t, n) {
    var i, r, s = e ? this.removeListener : this.addListener,
      o = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)
      for (i = n.length; i--;) s.call(this, t, n[i]);
    else
      for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
    return this
  }, i.removeEvent = function(e) {
    var t, n = typeof e,
      i = this._getEvents();
    if ("string" === n) delete i[e];
    else if ("object" === n)
      for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
    else delete this._events;
    return this
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
    var n, i, r, s, o = this.getListenersAsObject(e);
    for (r in o)
      if (o.hasOwnProperty(r))
        for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, i.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function() {
    return this._events || (this._events = {})
  }, e.noConflict = function() {
    return r.EventEmitter = s, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
  function(e) {
    function t(t) {
      var n = e.event;
      return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
      i = function() {};
    n.addEventListener ? i = function(e, t, n) {
      e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function(e, n, i) {
      e[n + i] = i.handleEvent ? function() {
        var n = t(e);
        i.handleEvent.call(i, n)
      } : function() {
        var n = t(e);
        i.call(e, n)
      }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
      e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function(e, t, n) {
      e.detachEvent("on" + t, e[t + n]);
      try {
        delete e[t + n]
      } catch (i) {
        e[t + n] = void 0
      }
    });
    var s = {
      bind: i,
      unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
  }(this),
  function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
      return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
  }(window, function(e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function r(e) {
      return "[object Array]" == f.call(e)
    }

    function s(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0; n < e.length; n++) t.push(e[n]);
      else t.push(e);
      return t
    }

    function o(e, t, n) {
      if (!(this instanceof o)) return new o(e, t, n);
      "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
      var r = this;
      setTimeout(function() {
        r.check()
      })
    }

    function h(e) {
      this.img = e
    }

    function a(e, t) {
      this.url = e, this.element = t, this.img = new Image
    }
    var u = e.jQuery,
      c = e.console,
      f = Object.prototype.toString;
    o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function() {
      this.images = [];
      for (var e = 0; e < this.elements.length; e++) {
        var t = this.elements[e];
        this.addElementImages(t)
      }
    }, o.prototype.addElementImages = function(e) {
      "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
      var t = e.nodeType;
      if (t && d[t]) {
        for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
          var r = n[i];
          this.addImage(r)
        }
        if ("string" == typeof this.options.background) {
          var s = e.querySelectorAll(this.options.background);
          for (i = 0; i < s.length; i++) {
            var o = s[i];
            this.addElementBackgroundImages(o)
          }
        }
      }
    };
    var d = {
      1: !0,
      9: !0,
      11: !0
    };
    o.prototype.addElementBackgroundImages = function(e) {
      for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
        var r = i && i[1];
        r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
      }
    };
    var m = e.getComputedStyle || function(e) {
      return e.currentStyle
    };
    return o.prototype.addImage = function(e) {
      var t = new h(e);
      this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
      var n = new a(e, t);
      this.images.push(n)
    }, o.prototype.check = function() {
      function e(e, n, i) {
        setTimeout(function() {
          t.progress(e, n, i)
        })
      }
      var t = this;
      if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
      for (var n = 0; n < this.images.length; n++) {
        var i = this.images[n];
        i.once("progress", e), i.check()
      }
    }, o.prototype.progress = function(e, t, n) {
      this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
    }, o.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
        var t = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[t](this)
      }
    }, h.prototype = new t, h.prototype.check = function() {
      var e = this.getIsImageComplete();
      return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
    }, h.prototype.getIsImageComplete = function() {
      return this.img.complete && void 0 !== this.img.naturalWidth
    }, h.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emit("progress", this, this.img, t)
    }, h.prototype.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, h.prototype.onload = function() {
      this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function() {
      this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function() {
      n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, a.prototype = new h, a.prototype.check = function() {
      n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
      var e = this.getIsImageComplete();
      e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function() {
      n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, a.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emit("progress", this, this.element, t)
    }, o.makeJQueryPlugin = function(t) {
      t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function(e, t) {
        var n = new o(this, e, t);
        return n.jqDeferred.promise(u(this))
      })
    }, o.makeJQueryPlugin(), o
  });


/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

! function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, n) {
      var o, s = "$()." + i + '("' + e + '")';
      return t.each(function(t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, n);
        o = void 0 === o ? l : o
      }), void 0 !== o ? o : t
    }

    function h(t, e) {
      t.each(function(t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
      })
    }
    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function(t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);
        return u(this, t, e)
      }
      return h(this, t), this
    }, n(a))
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var o = Array.prototype.slice,
    s = t.console,
    r = "undefined" == typeof s ? function() {} : function(t) {
      s.error(t)
    };
  return n(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[t] = i[t] || {};
      return n[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = 0,
        o = i[n];
      e = e || [];
      for (var s = this._onceEvents && this._onceEvents[t]; o;) {
        var r = s && s[o];
        r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
      }
      return this
    }
  }, t
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
    return e()
  }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = -1 == t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; h > e; e++) {
      var i = u[e];
      t[i] = 0
    }
    return t
  }

  function n(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
  }

  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
    }
  }

  function s(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var s = n(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; h > l; l++) {
        var f = u[l],
          c = s[f],
          m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        y = a.paddingTop + a.paddingBottom,
        g = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        I = a.borderTopWidth + a.borderBottomWidth,
        z = d && r,
        x = t(s.width);
      x !== !1 && (a.width = x + (z ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
    }
  }
  var r, a = "undefined" == typeof console ? e : function(t) {
      console.error(t)
    },
    u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    h = u.length,
    d = !1;
  return s
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
        o = n + "MatchesSelector";
      if (t[o]) return o
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function(t, e) {
    return (t % e + e) % e
  }, i.makeArray = function(t) {
    var e = [];
    if (Array.isArray(t)) e = t;
    else if (t && "number" == typeof t.length)
      for (var i = 0; i < t.length; i++) e.push(t[i]);
    else e.push(t);
    return e
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);
        for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
      }
    }), o
  }, i.debounceMethod = function(t, e, i) {
    var n = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[o];
      t && clearTimeout(t);
      var e = arguments,
        s = this;
      this[o] = setTimeout(function() {
        n.apply(s, e), delete s[o]
      }, i || 100)
    }
  }, i.docReady = function(t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function(e, o) {
    i.docReady(function() {
      var s = i.toDashed(o),
        r = "data-" + s,
        a = document.querySelectorAll("[" + r + "]"),
        u = document.querySelectorAll(".js-" + s),
        h = i.makeArray(a).concat(i.makeArray(u)),
        d = r + "-options",
        l = t.jQuery;
      h.forEach(function(t) {
        var i, s = t.getAttribute(r) || t.getAttribute(d);
        try {
          i = s && JSON.parse(s)
        } catch (a) {
          return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
        }
        var u = new e(t, i);
        l && l.data(t, o, u)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function n(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function o(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase()
    })
  }
  var s = document.documentElement.style,
    r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
    u = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[r],
    h = {
      transform: a,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    },
    d = n.prototype = Object.create(t.prototype);
  d.constructor = n, d._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, d.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, d.getSize = function() {
    this.size = e(this.element)
  }, d.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var n = h[i] || i;
      e[n] = t[i]
    }
  }, d.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      n = t[e ? "left" : "right"],
      o = t[i ? "top" : "bottom"],
      s = this.layout.size,
      r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
      a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
    r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
  }, d.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"),
      o = i ? "paddingLeft" : "paddingRight",
      s = i ? "left" : "right",
      r = i ? "right" : "left",
      a = this.position.x + t[o];
    e[s] = this.getXValue(a), e[r] = "";
    var u = n ? "paddingTop" : "paddingBottom",
      h = n ? "top" : "bottom",
      d = n ? "bottom" : "top",
      l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, d.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, d.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, d._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = parseInt(t, 10),
      s = parseInt(e, 10),
      r = o === this.position.x && s === this.position.y;
    if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
    var a = t - i,
      u = e - n,
      h = {};
    h.transform = this.getTranslate(a, u), this.transition({
      to: h,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, d.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop");
    return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, d.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
  }, d._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, d.transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + o(a);
  d.enableTransition = function() {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1)
    }
  }, d.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, d.onotransitionend = function(t) {
    this.ontransitionend(t)
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        n = f[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
        var o = e.onEnd[n];
        o.call(this), delete e.onEnd[n]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, d.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
    this.css(c)
  }, d.stagger = function(t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
  }, d.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, d.remove = function() {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, d.reveal = function() {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, d.hide = function() {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, d.onHideTransitionEnd = function() {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, d.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, n
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
    return e(t, i, n, o, s)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
  "use strict";

  function s(t, e) {
    var i = n.getQueryElement(t);
    if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++l;
    this.element.outlayerGUID = o, f[o] = this, this._create();
    var s = this._getOption("initLayout");
    s && this.layout()
  }

  function r(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
      i = e && e[1],
      n = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var o = m[n] || 1;
    return i * o
  }
  var u = t.console,
    h = t.jQuery,
    d = function() {},
    l = 0,
    f = {};
  s.namespace = "outlayer", s.Item = o, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  n.extend(c, e.prototype), c.option = function(t) {
    n.extend(this.options, t)
  }, c._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, c.reloadItems = function() {
    this.items = this._itemize(this.element.children)
  }, c._itemize = function(t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var s = e[o],
        r = new i(s, this);
      n.push(r)
    }
    return n
  }, c._filterFindItemElements = function(t) {
    return n.filterFindElements(t, this.options.itemSelector)
  }, c.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element
    })
  }, c.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, c._init = c.layout, c._resetLayout = function() {
    this.getSize()
  }, c.getSize = function() {
    this.size = i(this.element)
  }, c._getMeasurement = function(t, e) {
    var n, o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
  }, c.layoutItems = function(t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, c._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored
    })
  }, c._layoutItems = function(t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function(t) {
        var n = this._getItemLayoutPosition(t);
        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
      }, this), this._processLayoutQueue(i)
    }
  }, c._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    }
  }, c._processLayoutQueue = function(t) {
    this.updateStagger(), t.forEach(function(t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e)
    }, this)
  }, c.updateStagger = function() {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
  }, c._positionItem = function(t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
  }, c._postLayout = function() {
    this.resizeContainer()
  }, c.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, c._emitCompleteOnItems = function(t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e])
    }

    function n() {
      r++, r == s && i()
    }
    var o = this,
      s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function(e) {
      e.once(t, n)
    })
  }, c.dispatchEvent = function(t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), h)
      if (this.$element = this.$element || h(this.element), e) {
        var o = h.Event(e);
        o.type = t, this.$element.trigger(o, i)
      } else this.$element.trigger(t, i)
  }, c.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, c.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, c.stamp = function(t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, c.unstamp = function(t) {
    t = this._find(t), t && t.forEach(function(t) {
      n.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, c._find = function(t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
  }, c._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, c._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, c._manageStamp = d, c._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      n = this._boundingRect,
      o = i(t),
      s = {
        left: e.left - n.left - o.marginLeft,
        top: e.top - n.top - o.marginTop,
        right: n.right - e.right - o.marginRight,
        bottom: n.bottom - e.bottom - o.marginBottom
      };
    return s
  }, c.handleEvent = n.handleEvent, c.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, c.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, c.onresize = function() {
    this.resize()
  }, n.debounceMethod(s, "onresize", 100), c.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, c.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, c.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, c.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, c.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, c.reveal = function(t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.reveal()
      })
    }
  }, c.hide = function(t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function(t, i) {
        t.stagger(i * e), t.hide()
      })
    }
  }, c.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, c.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e)
  }, c.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, c.getItems = function(t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, c.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
      t.remove(), n.removeFrom(this.items, t)
    }, this)
  }, c.destroy = function() {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
  }, s.data = function(t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e]
  }, s.create = function(t, e) {
    var i = r(s);
    return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = o, s
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments)
  }
  var i = e.prototype = Object.create(t.Item.prototype),
    n = i._create;
  i._create = function() {
    this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
  }, i.updateSortData = function() {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
        e = this.layout._sorters;
      for (var i in t) {
        var n = e[i];
        this.sortData[i] = n(this.element, this)
      }
    }
  };
  var o = i.destroy;
  return i.destroy = function() {
    o.apply(this, arguments), this.css({
      display: ""
    })
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
  }
  var n = i.prototype,
    o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return o.forEach(function(t) {
    n[t] = function() {
      return e.prototype[t].apply(this.isotope, arguments)
    }
  }), n.needsVerticalResizeLayout = function() {
    var e = t(this.isotope.element),
      i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight
  }, n._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments)
  }, n.getColumnWidth = function() {
    this.getSegmentSize("column", "Width")
  }, n.getRowHeight = function() {
    this.getSegmentSize("row", "Height")
  }, n.getSegmentSize = function(t, e) {
    var i = t + e,
      n = "outer" + e;
    if (this._getMeasurement(i, n), !this[i]) {
      var o = this.getFirstItemSize();
      this[i] = o && o[n] || this.isotope.size["inner" + e]
    }
  }, n.getFirstItemSize = function() {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element)
  }, n.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments)
  }, n.getSize = function() {
    this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function(t, e) {
    function o() {
      i.apply(this, arguments)
    }
    return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0
  }, i.prototype.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var n = this.columnWidth += this.gutter,
      o = this.containerWidth + this.gutter,
      s = o / n,
      r = n - o % n,
      a = r && 1 > r ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1)
  }, i.prototype.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      n = e(i);
    this.containerWidth = n && n.innerWidth
  }, i.prototype._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && 1 > e ? "round" : "ceil",
      n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
        x: this.columnWidth * r,
        y: s
      }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; h > d; d++) this.colYs[r + d] = u;
    return a
  }, i.prototype._getColGroup = function(t) {
    if (2 > t) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
      var o = this.colYs.slice(n, n + t);
      e[n] = Math.max.apply(Math, o)
    }
    return e
  }, i.prototype._manageStamp = function(t) {
    var i = e(t),
      n = this._getElementOffset(t),
      o = this._getOption("originLeft"),
      s = o ? n.left : n.right,
      r = s + i.outerWidth,
      a = Math.floor(s / this.columnWidth);
    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
    for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; u >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
  }, i.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, i.prototype._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, i.prototype.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
  "use strict";
  var i = t.create("masonry"),
    n = i.prototype,
    o = {
      _getElementOffset: !0,
      layout: !0,
      _getMeasurement: !0
    };
  for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
  var r = n.measureColumns;
  n.measureColumns = function() {
    this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = n._getOption;
  return n._getOption = function(t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("fitRows"),
    i = e.prototype;
  return i._resetLayout = function() {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
      i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var n = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
  }, i._getContainerSize = function() {
    return {
      height: this.maxY
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
  "use strict";
  var e = t.create("vertical", {
      horizontalAlignment: 0
    }),
    i = e.prototype;
  return i._resetLayout = function() {
    this.y = 0
  }, i._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
      i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    }
  }, i._getContainerSize = function() {
    return {
      height: this.y
    }
  }, e
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
    return e(t, i, n, o, s, r, a)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, s, r) {
  function a(t, e) {
    return function(i, n) {
      for (var o = 0; o < t.length; o++) {
        var s = t[o],
          r = i.sortData[s],
          a = n.sortData[s];
        if (r > a || a > r) {
          var u = void 0 !== e[s] ? e[s] : e,
            h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h
        }
      }
      return 0
    }
  }
  var u = t.jQuery,
    h = String.prototype.trim ? function(t) {
      return t.trim()
    } : function(t) {
      return t.replace(/^\s+|\s+$/g, "")
    },
    d = e.create("isotope", {
      layoutMode: "masonry",
      isJQueryFiltering: !0,
      sortAscending: !0
    });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function() {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var t in r.modes) this._initLayoutMode(t)
  }, l.reloadItems = function() {
    this.itemGUID = 0, e.prototype.reloadItems.call(this)
  }, l._itemize = function() {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var n = t[i];
      n.id = this.itemGUID++
    }
    return this._updateItemsSortData(t), t
  }, l._initLayoutMode = function(t) {
    var e = r.modes[t],
      i = this.options[t] || {};
    this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
  }, l.layout = function() {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
  }, l._layout = function() {
    var t = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
  }, l.arrange = function(t) {
    this.option(t), this._getIsInstant();
    var e = this._filter(this.items);
    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
  }, l._init = l.arrange, l._hideReveal = function(t) {
    this.reveal(t.needReveal), this.hide(t.needHide)
  }, l._getIsInstant = function() {
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    return this._isInstant = e, e
  }, l._bindArrangeComplete = function() {
    function t() {
      e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
    }
    var e, i, n, o = this;
    this.once("layoutComplete", function() {
      e = !0, t()
    }), this.once("hideComplete", function() {
      i = !0, t()
    }), this.once("revealComplete", function() {
      n = !0, t()
    })
  }, l._filter = function(t) {
    var e = this.options.filter;
    e = e || "*";
    for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];
      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
      }
    }
    return {
      matches: i,
      needReveal: n,
      needHide: o
    }
  }, l._getFilterTest = function(t) {
    return u && this.options.isJQueryFiltering ? function(e) {
      return u(e.element).is(t)
    } : "function" == typeof t ? function(e) {
      return t(e.element)
    } : function(e) {
      return n(e.element, t)
    }
  }, l.updateSortData = function(t) {
    var e;
    t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
  }, l._getSorters = function() {
    var t = this.options.getSortData;
    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i)
    }
  }, l._updateItemsSortData = function(t) {
    for (var e = t && t.length, i = 0; e && e > i; i++) {
      var n = t[i];
      n.updateSortData()
    }
  };
  var f = function() {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
        n = i[0],
        o = n.match(/^\[(.+)\]$/),
        s = o && o[1],
        r = e(s, n),
        a = d.sortDataParsers[i[1]];
      return t = a ? function(t) {
        return t && a(r(t))
      } : function(t) {
        return t && r(t)
      }
    }

    function e(t, e) {
      return t ? function(e) {
        return e.getAttribute(t)
      } : function(t) {
        var i = t.querySelector(e);
        return i && i.textContent
      }
    }
    return t
  }();
  d.sortDataParsers = {
    parseInt: function(t) {
      return parseInt(t, 10)
    },
    parseFloat: function(t) {
      return parseFloat(t)
    }
  }, l._sort = function() {
    var t = this.options.sortBy;
    if (t) {
      var e = [].concat.apply(t, this.sortHistory),
        i = a(e, this.options.sortAscending);
      this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
    }
  }, l._mode = function() {
    var t = this.options.layoutMode,
      e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e
  }, l._resetLayout = function() {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, l._getItemLayoutPosition = function(t) {
    return this._mode()._getItemLayoutPosition(t)
  }, l._manageStamp = function(t) {
    this._mode()._manageStamp(t)
  }, l._getContainerSize = function() {
    return this._mode()._getContainerSize()
  }, l.needsResizeLayout = function() {
    return this._mode().needsResizeLayout()
  }, l.appended = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i = this._filterRevealAdded(e);
      this.filteredItems = this.filteredItems.concat(i)
    }
  }, l.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      this._resetLayout(), this._manageStamps();
      var i = this._filterRevealAdded(e);
      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
    }
  }, l._filterRevealAdded = function(t) {
    var e = this._filter(t);
    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
  }, l.insert = function(t) {
    var e = this.addItems(t);
    if (e.length) {
      var i, n, o = e.length;
      for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
      var s = this._filter(e).matches;
      for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
      for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
      this.reveal(s)
    }
  };
  var c = l.remove;
  return l.remove = function(t) {
    t = o.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);
    for (var i = e && e.length, n = 0; i && i > n; n++) {
      var s = e[n];
      o.removeFrom(this.filteredItems, s)
    }
  }, l.shuffle = function() {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random()
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, l._noTransition = function(t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var n = t.apply(this, e);
    return this.options.transitionDuration = i, n
  }, l.getFilteredItemElements = function() {
    return this.filteredItems.map(function(t) {
      return t.element
    })
  }, d
});



/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
  $.fn.appear = function(f, o) {
    var s = $.extend({
      one: true
    }, o);
    return this.each(function() {
      var t = $(this);
      t.appeared = false;
      if (!f) {
        t.trigger('appear', s.data);
        return;
      }
      var w = $(window);
      var c = function() {
        if (!t.is(':visible')) {
          t.appeared = false;
          return;
        }
        var a = w.scrollLeft();
        var b = w.scrollTop();
        var o = t.offset();
        var x = o.left;
        var y = o.top;
        if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
          if (!t.appeared) t.trigger('appear', s.data);
        } else {
          t.appeared = false;
        }
      };
      var m = function() {
        t.appeared = true;
        if (s.one) {
          w.unbind('scroll', c);
          var i = $.inArray(c, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }
        f.apply(this, arguments);
      };
      if (s.one) t.one('appear', s.data, m);
      else t.bind('appear', s.data, m);
      w.scroll(c);
      $.fn.appear.checks.push(c);
      (c)();
    });
  };
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function() {
      var l = $.fn.appear.checks.length;
      if (l > 0)
        while (l--)($.fn.appear.checks[l])();
    },
    run: function() {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    }
  });
  $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
    var u = $.fn[n];
    if (u) {
      $.fn[n] = function() {
        var r = u.apply(this, arguments);
        $.fn.appear.run();
        return r;
      }
    }
  });
})(jQuery);



// jQuery CountTo
! function(t) {
  "use strict";

  function e(t, e) {
    return t.toFixed(e.decimals)
  }
  t.fn.countTo = function(e) {
    return e = e || {}, t(this).each(function() {
      function a() {
        s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(i, s), c >= r && (f.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(i, s))
      }

      function n(t) {
        var e = o.formatter.call(i, t, o);
        f.text(e)
      }
      var o = t.extend({}, t.fn.countTo.defaults, {
          from: t(this).data("from"),
          to: t(this).data("to"),
          speed: t(this).data("speed"),
          refreshInterval: t(this).data("refresh-interval"),
          decimals: t(this).data("decimals")
        }, e),
        r = Math.ceil(o.speed / o.refreshInterval),
        l = (o.to - o.from) / r,
        i = this,
        f = t(this),
        c = 0,
        s = o.from,
        d = f.data("countTo") || {};
      f.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
    })
  }, t.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: e,
    onUpdate: null,
    onComplete: null
  }
}(jQuery);



/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.6
 **/
! function(a, b) {
  "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery)
}(this, function(a) {
  var b = function(a, b) {
      var c, d = document.createElement("canvas");
      a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() {
        return +new Date
      };
      var h = function(a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
        },
        i = function() {
          var a, c;
          e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
          for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
          e.restore()
        },
        j = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60)
          }
        }(),
        k = function() {
          b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
        };
      this.getCanvas = function() {
        return d
      }, this.getCtx = function() {
        return e
      }, this.clear = function() {
        e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
      }, this.draw = function(a) {
        b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
        var d;
        d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
      }.bind(this), this.animate = function(a, c) {
        var d = Date.now();
        b.onStart(a, c);
        var e = function() {
          var f = Math.min(Date.now() - d, b.animate.duration),
            g = b.easing(this, f, a, c - a, b.animate.duration);
          this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
        }.bind(this);
        j(e)
      }.bind(this)
    },
    c = function(a, c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: {
          duration: 1e3,
          enabled: !0
        },
        easing: function(a, b, c, d, e) {
          return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        onStart: function() {},
        onStep: function() {},
        onStop: function() {}
      };
      if ("undefined" != typeof b) d.renderer = b;
      else {
        if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer
      }
      var e = {},
        f = 0,
        g = function() {
          this.el = a, this.options = e;
          for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
            duration: e.animate,
            enabled: !0
          }), "boolean" != typeof e.animate || e.animate || (e.animate = {
            duration: 1e3,
            enabled: e.animate
          }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
        }.bind(this);
      this.update = function(a) {
        return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
      }.bind(this), this.disableAnimation = function() {
        return e.animate.enabled = !1, this
      }, this.enableAnimation = function() {
        return e.animate.enabled = !0, this
      }, g()
    };
  a.fn.easyPieChart = function(b) {
    return this.each(function() {
      var d;
      a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
    })
  }
});


/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
! function(t) {
  "use strict";
  t.fn.fitVids = function(e) {
    var i = {
      customSelector: null,
      ignore: null
    };
    if (!document.getElementById("fit-vids-style")) {
      var r = document.head || document.getElementsByTagName("head")[0],
        a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
        d = document.createElement("div");
      d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
    }
    return e && t.extend(i, e), this.each(function() {
      var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
      i.customSelector && e.push(i.customSelector);
      var r = ".fitvidsignore";
      i.ignore && (r = r + ", " + i.ignore);
      var a = t(this).find(e.join(","));
      a = a.not("object object"), a = a.not(r), a.each(function(e) {
        var i = t(this);
        if (!(i.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
          i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
          var a = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
            d = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
            o = a / d;
          if (!i.attr("id")) {
            var h = "fitvid" + e;
            i.attr("id", h)
          }
          i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), i.removeAttr("height").removeAttr("width")
        }
      })
    })
  }
}(window.jQuery || window.Zepto);



/*
 * jQuery FlexSlider v2.4.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
! function($) {
  $.flexslider = function(e, t) {
    var a = $(e);
    a.vars = $.extend({}, $.flexslider.defaults, t);
    var n = a.vars.namespace,
      i = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
      s = ("ontouchstart" in window || i || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch,
      r = "click touchend MSPointerUp keyup",
      o = "",
      l, c = "vertical" === a.vars.direction,
      d = a.vars.reverse,
      u = a.vars.itemWidth > 0,
      v = "fade" === a.vars.animation,
      p = "" !== a.vars.asNavFor,
      m = {},
      f = !0;
    $.data(e, "flexslider", a), m = {
      init: function() {
        a.animating = !1, a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10), isNaN(a.currentSlide) && (a.currentSlide = 0), a.animatingTo = a.currentSlide, a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last, a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" ")), a.slides = $(a.vars.selector, a), a.container = $(a.containerSelector, a), a.count = a.slides.length, a.syncExists = $(a.vars.sync).length > 0, "slide" === a.vars.animation && (a.vars.animation = "swing"), a.prop = c ? "top" : "marginLeft", a.args = {}, a.manualPause = !1, a.stopped = !1, a.started = !1, a.startTimeout = null, a.transitions = !a.vars.video && !v && a.vars.useCSS && function() {
          var e = document.createElement("div"),
            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
          for (var n in t)
            if (void 0 !== e.style[t[n]]) return a.pfx = t[n].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
          return !1
        }(), a.ensureAnimationEnd = "", "" !== a.vars.controlsContainer && (a.controlsContainer = $(a.vars.controlsContainer).length > 0 && $(a.vars.controlsContainer)), "" !== a.vars.manualControls && (a.manualControls = $(a.vars.manualControls).length > 0 && $(a.vars.manualControls)), a.vars.randomize && (a.slides.sort(function() {
          return Math.round(Math.random()) - .5
        }), a.container.empty().append(a.slides)), a.doMath(), a.setup("init"), a.vars.controlNav && m.controlNav.setup(), a.vars.directionNav && m.directionNav.setup(), a.vars.keyboard && (1 === $(a.containerSelector).length || a.vars.multipleKeyboard) && $(document).bind("keyup", function(e) {
          var t = e.keyCode;
          if (!a.animating && (39 === t || 37 === t)) {
            var n = 39 === t ? a.getTarget("next") : 37 === t ? a.getTarget("prev") : !1;
            a.flexAnimate(n, a.vars.pauseOnAction)
          }
        }), a.vars.mousewheel && a.bind("mousewheel", function(e, t, n, i) {
          e.preventDefault();
          var s = a.getTarget(0 > t ? "next" : "prev");
          a.flexAnimate(s, a.vars.pauseOnAction)
        }), a.vars.pausePlay && m.pausePlay.setup(), a.vars.slideshow && a.vars.pauseInvisible && m.pauseInvisible.init(), a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function() {
          a.manualPlay || a.manualPause || a.pause()
        }, function() {
          a.manualPause || a.manualPlay || a.stopped || a.play()
        }), a.vars.pauseInvisible && m.pauseInvisible.isHidden() || (a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play())), p && m.asNav.setup(), s && a.vars.touch && m.touch(), (!v || v && a.vars.smoothHeight) && $(window).bind("resize orientationchange focus", m.resize), a.find("img").attr("draggable", "false"), setTimeout(function() {
          a.vars.start(a)
        }, 200)
      },
      asNav: {
        setup: function() {
          a.asNav = !0, a.animatingTo = Math.floor(a.currentSlide / a.move), a.currentItem = a.currentSlide, a.slides.removeClass(n + "active-slide").eq(a.currentItem).addClass(n + "active-slide"), i ? (e._slider = a, a.slides.each(function() {
            var e = this;
            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(e) {
              e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
            }, !1), e.addEventListener("MSGestureTap", function(e) {
              e.preventDefault();
              var t = $(this),
                n = t.index();
              $(a.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (a.direction = a.currentItem < n ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction, !1, !0, !0))
            })
          })) : a.slides.on(r, function(e) {
            e.preventDefault();
            var t = $(this),
              i = t.index(),
              s = t.offset().left - $(a).scrollLeft();
            0 >= s && t.hasClass(n + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : $(a.vars.asNavFor).data("flexslider").animating || t.hasClass(n + "active-slide") || (a.direction = a.currentItem < i ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction, !1, !0, !0))
          })
        }
      },
      controlNav: {
        setup: function() {
          a.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
        },
        setupPaging: function() {
          var e = "thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging",
            t = 1,
            i, s;
          if (a.controlNavScaffold = $('<ol class="' + n + "control-nav " + n + e + '"></ol>'), a.pagingCount > 1)
            for (var l = 0; l < a.pagingCount; l++) {
              if (s = a.slides.eq(l), i = "thumbnails" === a.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"/>' : "<a>" + t + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions) {
                var c = s.attr("data-thumbcaption");
                "" != c && void 0 != c && (i += '<span class="' + n + 'caption">' + c + "</span>")
              }
              a.controlNavScaffold.append("<li>" + i + "</li>"), t++
            }
          a.controlsContainer ? $(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), a.controlNavScaffold.delegate("a, img", r, function(e) {
            if (e.preventDefault(), "" === o || o === e.type) {
              var t = $(this),
                i = a.controlNav.index(t);
              t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction))
            }
            "" === o && (o = e.type), m.setToClearWatchedEvent()
          })
        },
        setupManual: function() {
          a.controlNav = a.manualControls, m.controlNav.active(), a.controlNav.bind(r, function(e) {
            if (e.preventDefault(), "" === o || o === e.type) {
              var t = $(this),
                i = a.controlNav.index(t);
              t.hasClass(n + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction))
            }
            "" === o && (o = e.type), m.setToClearWatchedEvent()
          })
        },
        set: function() {
          var e = "thumbnails" === a.vars.controlNav ? "img" : "a";
          a.controlNav = $("." + n + "control-nav li " + e, a.controlsContainer ? a.controlsContainer : a)
        },
        active: function() {
          a.controlNav.removeClass(n + "active").eq(a.animatingTo).addClass(n + "active")
        },
        update: function(e, t) {
          a.pagingCount > 1 && "add" === e ? a.controlNavScaffold.append($("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(t).closest("li").remove(), m.controlNav.set(), a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(t, e) : m.controlNav.active()
        }
      },
      directionNav: {
        setup: function() {
          var e = $('<ul class="' + n + 'direction-nav"><li class="' + n + 'nav-prev"><a class="' + n + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + n + 'nav-next"><a class="' + n + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
          a.controlsContainer ? ($(a.controlsContainer).append(e), a.directionNav = $("." + n + "direction-nav li a", a.controlsContainer)) : (a.append(e), a.directionNav = $("." + n + "direction-nav li a", a)), m.directionNav.update(), a.directionNav.bind(r, function(e) {
            e.preventDefault();
            var t;
            ("" === o || o === e.type) && (t = a.getTarget($(this).hasClass(n + "next") ? "next" : "prev"), a.flexAnimate(t, a.vars.pauseOnAction)), "" === o && (o = e.type), m.setToClearWatchedEvent()
          })
        },
        update: function() {
          var e = n + "disabled";
          1 === a.pagingCount ? a.directionNav.addClass(e).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(e).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(e).filter("." + n + "prev").addClass(e).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(e).filter("." + n + "next").addClass(e).attr("tabindex", "-1") : a.directionNav.removeClass(e).removeAttr("tabindex")
        }
      },
      pausePlay: {
        setup: function() {
          var e = $('<div class="' + n + 'pauseplay"><a></a></div>');
          a.controlsContainer ? (a.controlsContainer.append(e), a.pausePlay = $("." + n + "pauseplay a", a.controlsContainer)) : (a.append(e), a.pausePlay = $("." + n + "pauseplay a", a)), m.pausePlay.update(a.vars.slideshow ? n + "pause" : n + "play"), a.pausePlay.bind(r, function(e) {
            e.preventDefault(), ("" === o || o === e.type) && ($(this).hasClass(n + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())), "" === o && (o = e.type), m.setToClearWatchedEvent()
          })
        },
        update: function(e) {
          "play" === e ? a.pausePlay.removeClass(n + "pause").addClass(n + "play").html(a.vars.playText) : a.pausePlay.removeClass(n + "play").addClass(n + "pause").html(a.vars.pauseText)
        }
      },
      touch: function() {
        function t(t) {
          a.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (a.pause(), g = c ? a.h : a.w, S = Number(new Date), x = t.touches[0].pageX, b = t.touches[0].pageY, f = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * g : (a.currentSlide + a.cloneOffset) * g, p = c ? b : x, m = c ? x : b, e.addEventListener("touchmove", n, !1), e.addEventListener("touchend", s, !1))
        }

        function n(e) {
          x = e.touches[0].pageX, b = e.touches[0].pageY, h = c ? p - b : p - x, y = c ? Math.abs(h) < Math.abs(x - m) : Math.abs(h) < Math.abs(b - m);
          var t = 500;
          (!y || Number(new Date) - S > t) && (e.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (h /= 0 === a.currentSlide && 0 > h || a.currentSlide === a.last && h > 0 ? Math.abs(h) / g + 2 : 1), a.setProps(f + h, "setTouch")))
        }

        function s(t) {
          if (e.removeEventListener("touchmove", n, !1), a.animatingTo === a.currentSlide && !y && null !== h) {
            var i = d ? -h : h,
              r = a.getTarget(i > 0 ? "next" : "prev");
            a.canAdvance(r) && (Number(new Date) - S < 550 && Math.abs(i) > 50 || Math.abs(i) > g / 2) ? a.flexAnimate(r, a.vars.pauseOnAction) : v || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
          }
          e.removeEventListener("touchend", s, !1), p = null, m = null, h = null, f = null
        }

        function r(t) {
          t.stopPropagation(), a.animating ? t.preventDefault() : (a.pause(), e._gesture.addPointer(t.pointerId), w = 0, g = c ? a.h : a.w, S = Number(new Date), f = u && d && a.animatingTo === a.last ? 0 : u && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : u && a.currentSlide === a.last ? a.limit : u ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * g : (a.currentSlide + a.cloneOffset) * g)
        }

        function o(t) {
          t.stopPropagation();
          var a = t.target._slider;
          if (a) {
            var n = -t.translationX,
              i = -t.translationY;
            return w += c ? i : n, h = w, y = c ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
              e._gesture.stop()
            }) : void((!y || Number(new Date) - S > 500) && (t.preventDefault(), !v && a.transitions && (a.vars.animationLoop || (h = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / g + 2 : 1)), a.setProps(f + h, "setTouch"))))
          }
        }

        function l(e) {
          e.stopPropagation();
          var t = e.target._slider;
          if (t) {
            if (t.animatingTo === t.currentSlide && !y && null !== h) {
              var a = d ? -h : h,
                n = t.getTarget(a > 0 ? "next" : "prev");
              t.canAdvance(n) && (Number(new Date) - S < 550 && Math.abs(a) > 50 || Math.abs(a) > g / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : v || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
            }
            p = null, m = null, h = null, f = null, w = 0
          }
        }
        var p, m, f, g, h, S, y = !1,
          x = 0,
          b = 0,
          w = 0;
        i ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", r, !1), e._slider = a, e.addEventListener("MSGestureChange", o, !1), e.addEventListener("MSGestureEnd", l, !1)) : e.addEventListener("touchstart", t, !1)
      },
      resize: function() {
        !a.animating && a.is(":visible") && (u || a.doMath(), v ? m.smoothHeight() : u ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : c ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && m.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
      },
      smoothHeight: function(e) {
        if (!c || v) {
          var t = v ? a : a.viewport;
          e ? t.animate({
            height: a.slides.eq(a.animatingTo).height()
          }, e) : t.height(a.slides.eq(a.animatingTo).height())
        }
      },
      sync: function(e) {
        var t = $(a.vars.sync).data("flexslider"),
          n = a.animatingTo;
        switch (e) {
          case "animate":
            t.flexAnimate(n, a.vars.pauseOnAction, !1, !0);
            break;
          case "play":
            t.playing || t.asNav || t.play();
            break;
          case "pause":
            t.pause()
        }
      },
      uniqueID: function(e) {
        return e.filter("[id]").add(e.find("[id]")).each(function() {
          var e = $(this);
          e.attr("id", e.attr("id") + "_clone")
        }), e
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var e = m.pauseInvisible.getHiddenProp();
          if (e) {
            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(t, function() {
              m.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : a.vars.initDelay > 0 ? setTimeout(a.play, a.vars.initDelay) : a.play()
            })
          }
        },
        isHidden: function() {
          var e = m.pauseInvisible.getHiddenProp();
          return e ? document[e] : !1
        },
        getHiddenProp: function() {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";
          for (var t = 0; t < e.length; t++)
            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          return null
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(l), l = setTimeout(function() {
          o = ""
        }, 3e3)
      }
    }, a.flexAnimate = function(e, t, i, r, o) {
      if (a.vars.animationLoop || e === a.currentSlide || (a.direction = e > a.currentSlide ? "next" : "prev"), p && 1 === a.pagingCount && (a.direction = a.currentItem < e ? "next" : "prev"), !a.animating && (a.canAdvance(e, o) || i) && a.is(":visible")) {
        if (p && r) {
          var l = $(a.vars.asNavFor).data("flexslider");
          if (a.atEnd = 0 === e || e === a.count - 1, l.flexAnimate(e, !0, !1, !0, o), a.direction = a.currentItem < e ? "next" : "prev", l.direction = a.direction, Math.ceil((e + 1) / a.visible) - 1 === a.currentSlide || 0 === e) return a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), !1;
          a.currentItem = e, a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), e = Math.floor(e / a.visible)
        }
        if (a.animating = !0, a.animatingTo = e, t && a.pause(), a.vars.before(a), a.syncExists && !o && m.sync("animate"), a.vars.controlNav && m.controlNav.active(), u || a.slides.removeClass(n + "active-slide").eq(e).addClass(n + "active-slide"), a.atEnd = 0 === e || e === a.last, a.vars.directionNav && m.directionNav.update(), e === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), v) s ? (a.slides.eq(a.currentSlide).css({
          opacity: 0,
          zIndex: 1
        }), a.slides.eq(e).css({
          opacity: 1,
          zIndex: 2
        }), a.wrapup(f)) : (a.slides.eq(a.currentSlide).css({
          zIndex: 1
        }).animate({
          opacity: 0
        }, a.vars.animationSpeed, a.vars.easing), a.slides.eq(e).css({
          zIndex: 2
        }).animate({
          opacity: 1
        }, a.vars.animationSpeed, a.vars.easing, a.wrapup));
        else {
          var f = c ? a.slides.filter(":first").height() : a.computedW,
            g, h, S;
          u ? (g = a.vars.itemMargin, S = (a.itemW + g) * a.move * a.animatingTo, h = S > a.limit && 1 !== a.visible ? a.limit : S) : h = 0 === a.currentSlide && e === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? d ? (a.count + a.cloneOffset) * f : 0 : a.currentSlide === a.last && 0 === e && a.vars.animationLoop && "prev" !== a.direction ? d ? 0 : (a.count + 1) * f : d ? (a.count - 1 - e + a.cloneOffset) * f : (e + a.cloneOffset) * f, a.setProps(h, "", a.vars.animationSpeed), a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function() {
            clearTimeout(a.ensureAnimationEnd), a.wrapup(f)
          }), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function() {
            a.wrapup(f)
          }, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function() {
            a.wrapup(f)
          })
        }
        a.vars.smoothHeight && m.smoothHeight(a.vars.animationSpeed)
      }
    }, a.wrapup = function(e) {
      v || u || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(e, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(e, "jumpStart")), a.animating = !1, a.currentSlide = a.animatingTo, a.vars.after(a)
    }, a.animateSlides = function() {
      !a.animating && f && a.flexAnimate(a.getTarget("next"))
    }, a.pause = function() {
      clearInterval(a.animatedSlides), a.animatedSlides = null, a.playing = !1, a.vars.pausePlay && m.pausePlay.update("play"), a.syncExists && m.sync("pause")
    }, a.play = function() {
      a.playing && clearInterval(a.animatedSlides), a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed), a.started = a.playing = !0, a.vars.pausePlay && m.pausePlay.update("pause"), a.syncExists && m.sync("play")
    }, a.stop = function() {
      a.pause(), a.stopped = !0
    }, a.canAdvance = function(e, t) {
      var n = p ? a.pagingCount - 1 : a.last;
      return t ? !0 : p && a.currentItem === a.count - 1 && 0 === e && "prev" === a.direction ? !0 : p && 0 === a.currentItem && e === a.pagingCount - 1 && "next" !== a.direction ? !1 : e !== a.currentSlide || p ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && e === n && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === n && 0 === e && "next" === a.direction ? !1 : !0 : !1
    }, a.getTarget = function(e) {
      return a.direction = e, "next" === e ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
    }, a.setProps = function(e, t, n) {
      var i = function() {
        var n = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo,
          i = function() {
            if (u) return "setTouch" === t ? e : d && a.animatingTo === a.last ? 0 : d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : n;
            switch (t) {
              case "setTotal":
                return d ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;
              case "setTouch":
                return d ? e : e;
              case "jumpEnd":
                return d ? e : a.count * e;
              case "jumpStart":
                return d ? a.count * e : e;
              default:
                return e
            }
          }();
        return -1 * i + "px"
      }();
      a.transitions && (i = c ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", n), a.container.css("transition-duration", n)), a.args[a.prop] = i, (a.transitions || void 0 === n) && a.container.css(a.args), a.container.css("transform", i)
    }, a.setup = function(e) {
      if (v) a.slides.css({
        width: "100%",
        "float": "left",
        marginRight: "-100%",
        position: "relative"
      }), "init" === e && (s ? a.slides.css({
        opacity: 0,
        display: "block",
        webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease",
        zIndex: 1
      }).eq(a.currentSlide).css({
        opacity: 1,
        zIndex: 2
      }) : 0 == a.vars.fadeFirstSlide ? a.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(a.currentSlide).css({
        zIndex: 2
      }).css({
        opacity: 1
      }) : a.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(a.currentSlide).css({
        zIndex: 2
      }).animate({
        opacity: 1
      }, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && m.smoothHeight();
      else {
        var t, i;
        "init" === e && (a.viewport = $('<div class="' + n + 'viewport"></div>').css({
          overflow: "hidden",
          position: "relative"
        }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, d && (i = $.makeArray(a.slides).reverse(), a.slides = $(i), a.container.empty().append(a.slides))), a.vars.animationLoop && !u && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== e && a.container.find(".clone").remove(), a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), a.newSlides = $(a.vars.selector, a), t = d ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset, c && !u ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
          a.newSlides.css({
            display: "block"
          }), a.doMath(), a.viewport.height(a.h), a.setProps(t * a.h, "init")
        }, "init" === e ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(t * a.computedW, "init"), setTimeout(function() {
          a.doMath(), a.newSlides.css({
            width: a.computedW,
            "float": "left",
            display: "block"
          }), a.vars.smoothHeight && m.smoothHeight()
        }, "init" === e ? 100 : 0))
      }
      u || a.slides.removeClass(n + "active-slide").eq(a.currentSlide).addClass(n + "active-slide"), a.vars.init(a)
    }, a.doMath = function() {
      var e = a.slides.first(),
        t = a.vars.itemMargin,
        n = a.vars.minItems,
        i = a.vars.maxItems;
      a.w = void 0 === a.viewport ? a.width() : a.viewport.width(), a.h = e.height(), a.boxPadding = e.outerWidth() - e.width(), u ? (a.itemT = a.vars.itemWidth + t, a.minW = n ? n * a.itemT : a.w, a.maxW = i ? i * a.itemT - t : a.w, a.itemW = a.minW > a.w ? (a.w - t * (n - 1)) / n : a.maxW < a.w ? (a.w - t * (i - 1)) / i : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1), a.computedW = a.itemW - a.boxPadding
    }, a.update = function(e, t) {
      a.doMath(), u || (e < a.currentSlide ? a.currentSlide += 1 : e <= a.currentSlide && 0 !== e && (a.currentSlide -= 1), a.animatingTo = a.currentSlide), a.vars.controlNav && !a.manualControls && ("add" === t && !u || a.pagingCount > a.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !u || a.pagingCount < a.controlNav.length) && (u && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), m.controlNav.update("remove", a.last))), a.vars.directionNav && m.directionNav.update()
    }, a.addSlide = function(e, t) {
      var n = $(e);
      a.count += 1, a.last = a.count - 1, c && d ? void 0 !== t ? a.slides.eq(a.count - t).after(n) : a.container.prepend(n) : void 0 !== t ? a.slides.eq(t).before(n) : a.container.append(n), a.update(t, "add"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.added(a)
    }, a.removeSlide = function(e) {
      var t = isNaN(e) ? a.slides.index($(e)) : e;
      a.count -= 1, a.last = a.count - 1, isNaN(e) ? $(e, a.slides).remove() : c && d ? a.slides.eq(a.last).remove() : a.slides.eq(e).remove(), a.doMath(), a.update(t, "remove"), a.slides = $(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.removed(a)
    }, m.init()
  }, $(window).blur(function(e) {
    focused = !1
  }).focus(function(e) {
    focused = !0
  }), $.flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: !1,
    animationLoop: !0,
    smoothHeight: !1,
    startAt: 0,
    slideshow: !0,
    slideshowSpeed: 7e3,
    animationSpeed: 600,
    initDelay: 0,
    randomize: !1,
    fadeFirstSlide: !0,
    thumbCaptions: !1,
    pauseOnAction: !0,
    pauseOnHover: !1,
    pauseInvisible: !0,
    useCSS: !0,
    touch: !0,
    video: !1,
    controlNav: !0,
    directionNav: !0,
    prevText: "Previous",
    nextText: "Next",
    keyboard: !0,
    multipleKeyboard: !1,
    mousewheel: !1,
    pausePlay: !1,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: !0,
    start: function() {},
    before: function() {},
    after: function() {},
    end: function() {},
    added: function() {},
    removed: function() {},
    init: function() {}
  }, $.fn.flexslider = function(e) {
    if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
      var t = $(this),
        a = e.selector ? e.selector : ".slides > li",
        n = t.find(a);
      1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
    });
    var t = $(this).data("flexslider");
    switch (e) {
      case "play":
        t.play();
        break;
      case "pause":
        t.pause();
        break;
      case "stop":
        t.stop();
        break;
      case "next":
        t.flexAnimate(t.getTarget("next"), !0);
        break;
      case "prev":
      case "previous":
        t.flexAnimate(t.getTarget("prev"), !0);
        break;
      default:
        "number" == typeof e && t.flexAnimate(e, !0)
    }
  }
}(jQuery);


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.0
 */
;
(function(a) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], a)
  } else {
    a(jQuery)
  }
}(function($) {
  var g = location.href.replace(/#.*/, '');
  var h = $.localScroll = function(a) {
    $('body').localScroll(a)
  };
  h.defaults = {
    duration: 1000,
    axis: 'y',
    event: 'click',
    stop: true,
    target: window
  };
  $.fn.localScroll = function(a) {
    a = $.extend({}, h.defaults, a);
    if (a.hash && location.hash) {
      if (a.target) window.scrollTo(0, 0);
      scroll(0, location, a)
    }
    return a.lazy ? this.on(a.event, 'a,area', function(e) {
      if (filter.call(this)) {
        scroll(e, this, a)
      }
    }) : this.find('a,area').filter(filter).bind(a.event, function(e) {
      scroll(e, this, a)
    }).end().end();

    function filter() {
      return !!this.href && !!this.hash && this.href.replace(this.hash, '') === g && (!a.filter || $(this).is(a.filter))
    }
  };
  h.hash = function() {};

  function scroll(e, a, b) {
    var c = a.hash.slice(1),
      elem = document.getElementById(c) || document.getElementsByName(c)[0];
    if (!elem) return;
    if (e) e.preventDefault();
    var d = $(b.target);
    if (b.lock && d.is(':animated') || b.onBefore && b.onBefore(e, elem, d) === false) return;
    if (b.stop) {
      d.stop(true)
    }
    if (b.hash) {
      var f = elem.id === c ? 'id' : 'name',
        $a = $('<a> </a>').attr(f, c).css({
          position: 'absolute',
          top: $(window).scrollTop(),
          left: $(window).scrollLeft()
        });
      elem[f] = '';
      $('body').prepend($a);
      location.hash = a.hash;
      $a.remove();
      elem[f] = c
    }
    d.scrollTo(elem, b).trigger('notify.serialScroll', [elem])
  }
  return h
}));


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.1
 */
;
(function(f) {
  "use strict";
  "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
})(function($) {
  "use strict";

  function n(a) {
    return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
  }

  function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : {
      top: a,
      left: a
    }
  }
  var p = $.scrollTo = function(a, d, b) {
    return $(window).scrollTo(a, d, b)
  };
  p.defaults = {
    axis: "xy",
    duration: 0,
    limit: !0
  };
  $.fn.scrollTo = function(a, d, b) {
    "object" === typeof d && (b = d, d = 0);
    "function" === typeof b && (b = {
      onAfter: b
    });
    "max" === a && (a = 9E9);
    b = $.extend({}, p.defaults, b);
    d = d || b.duration;
    var u = b.queue && 1 < b.axis.length;
    u && (d /= 2);
    b.offset = h(b.offset);
    b.over = h(b.over);
    return this.each(function() {
      function k(a) {
        var k = $.extend({}, b, {
          queue: !0,
          duration: d,
          complete: a && function() {
            a.call(q, e, b)
          }
        });
        r.animate(f, k)
      }
      if (null !== a) {
        var l = n(this),
          q = l ? this.contentWindow || window : this,
          r = $(q),
          e = a,
          f = {},
          t;
        switch (typeof e) {
          case "number":
          case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
              e = h(e);
              break
            }
            e = l ? $(e) : $(e, q);
            if (!e.length) return;
          case "object":
            if (e.is || e.style) t = (e = $(e)).offset()
        }
        var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
        $.each(b.axis.split(""), function(a, c) {
          var d = "x" === c ? "Left" : "Top",
            m = d.toLowerCase(),
            g = "scroll" + d,
            h = r[g](),
            n = p.max(q, c);
          t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
          b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
          !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
        });
        k(b.onAfter)
      }
    })
  };
  p.max = function(a, d) {
    var b = "x" === d ? "Width" : "Height",
      h = "scroll" + b;
    if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
    var b = "client" + b,
      k = a.ownerDocument || a.document,
      l = k.documentElement,
      k = k.body;
    return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
  };
  $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function(a) {
      return $(a.elem)[a.prop]()
    },
    set: function(a) {
      var d = this.get(a);
      if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
      var b = Math.round(a.now);
      d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
    }
  };
  return p
});


// Simple Text Rotator
! function(e) {
  var t = {
    animation: "dissolve",
    separator: ",",
    speed: 2e3
  };
  e.fn.textrotator = function(n) {
    var r = e.extend({}, t, n);
    return this.each(function() {
      var t = e(this);
      var n = [];
      e.each(t.text().split(r.separator), function(e, t) {
        n.push(t)
      });
      t.text(n[0]);
      var i = function() {
        switch (r.animation) {
          case "dissolve":
            t.animate({
              textShadowBlur: 20,
              opacity: 0
            }, 500, function() {
              s = e.inArray(t.text(), n);
              if (s + 1 == n.length) s = -1;
              t.text(n[s + 1]).animate({
                textShadowBlur: 0,
                opacity: 1
              }, 500)
            });
            break;
          case "flip":
            if (t.find(".back").length > 0) {
              t.html(t.find(".back").html())
            }
            var i = t.text();
            var s = e.inArray(i, n);
            if (s + 1 == n.length) s = -1;
            t.html("");
            e("<span class='front'>" + i + "</span>").appendTo(t);
            e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
            t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
              "-webkit-transform": " rotateY(-180deg)",
              "-moz-transform": " rotateY(-180deg)",
              "-o-transform": " rotateY(-180deg)",
              transform: " rotateY(-180deg)"
            });
            break;
          case "flipUp":
            if (t.find(".back").length > 0) {
              t.html(t.find(".back").html())
            }
            var i = t.text();
            var s = e.inArray(i, n);
            if (s + 1 == n.length) s = -1;
            t.html("");
            e("<span class='front'>" + i + "</span>").appendTo(t);
            e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
            t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
              "-webkit-transform": " rotateX(-180deg)",
              "-moz-transform": " rotateX(-180deg)",
              "-o-transform": " rotateX(-180deg)",
              transform: " rotateX(-180deg)"
            });
            break;
          case "flipCube":
            if (t.find(".back").length > 0) {
              t.html(t.find(".back").html())
            }
            var i = t.text();
            var s = e.inArray(i, n);
            if (s + 1 == n.length) s = -1;
            t.html("");
            e("<span class='front'>" + i + "</span>").appendTo(t);
            e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
            t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
              "-webkit-transform": " rotateY(180deg)",
              "-moz-transform": " rotateY(180deg)",
              "-o-transform": " rotateY(180deg)",
              transform: " rotateY(180deg)"
            });
            break;
          case "flipCubeUp":
            if (t.find(".back").length > 0) {
              t.html(t.find(".back").html())
            }
            var i = t.text();
            var s = e.inArray(i, n);
            if (s + 1 == n.length) s = -1;
            t.html("");
            e("<span class='front'>" + i + "</span>").appendTo(t);
            e("<span class='back'>" + n[s + 1] + "</span>").appendTo(t);
            t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
              "-webkit-transform": " rotateX(180deg)",
              "-moz-transform": " rotateX(180deg)",
              "-o-transform": " rotateX(180deg)",
              transform: " rotateX(180deg)"
            });
            break;
          case "spin":
            if (t.find(".rotating").length > 0) {
              t.html(t.find(".rotating").html())
            }
            s = e.inArray(t.text(), n);
            if (s + 1 == n.length) s = -1;
            t.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(n[s + 1]).show().css({
              "-webkit-transform": " rotate(0) scale(1)",
              "-moz-transform": "rotate(0) scale(1)",
              "-o-transform": "rotate(0) scale(1)",
              transform: "rotate(0) scale(1)"
            });
            break;
          case "fade":
            t.fadeOut(r.speed, function() {
              s = e.inArray(t.text(), n);
              if (s + 1 == n.length) s = -1;
              t.text(n[s + 1]).fadeIn(r.speed)
            });
            break
        }
      };
      setInterval(i, r.speed)
    })
  }
}(window.jQuery)


/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function(a, b, c, d) {
  function e(b, c) {
    this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function(a) {
        a.hide()
      },
      showElement: function(a) {
        a.show()
      }
    },
    h = {
      scroll: {
        getLeft: function(a) {
          return a.scrollLeft()
        },
        setLeft: function(a, b) {
          a.scrollLeft(b)
        },
        getTop: function(a) {
          return a.scrollTop()
        },
        setTop: function(a, b) {
          a.scrollTop(b)
        }
      },
      position: {
        getLeft: function(a) {
          return -1 * parseInt(a.css("left"), 10)
        },
        getTop: function(a) {
          return -1 * parseInt(a.css("top"), 10)
        }
      },
      margin: {
        getLeft: function(a) {
          return -1 * parseInt(a.css("margin-left"), 10)
        },
        getTop: function(a) {
          return -1 * parseInt(a.css("margin-top"), 10)
        }
      },
      transform: {
        getLeft: function(a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
        },
        getTop: function(a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
        }
      }
    },
    i = {
      position: {
        setLeft: function(a, b) {
          a.css("left", b)
        },
        setTop: function(a, b) {
          a.css("top", b)
        }
      },
      transform: {
        setPosition: function(a, b, c, d, e) {
          a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
        }
      }
    },
    j = function() {
      var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break
        }
      return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
        function(a) {
          return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
        }
    }(),
    k = j("transform"),
    l = a("<div />", {
      style: "background:#fff"
    }).css("background-position-x") !== d,
    m = l ? function(a, b, c) {
      a.css({
        "background-position-x": b,
        "background-position-y": c
      })
    } : function(a, b, c) {
      a.css("background-position", b + " " + c)
    },
    n = l ? function(a) {
      return [a.css("background-position-x"), a.css("background-position-y")]
    } : function(a) {
      return a.css("background-position").split(" ")
    },
    o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
      setTimeout(a, 1e3 / 60)
    };
  e.prototype = {
    init: function() {
      this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
        firstLoad: !0
      }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
    },
    _defineElements: function() {
      this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
    },
    _defineGetters: function() {
      var a = this,
        b = h[a.options.scrollProperty];
      this._getScrollLeft = function() {
        return b.getLeft(a.$scrollElement)
      }, this._getScrollTop = function() {
        return b.getTop(a.$scrollElement)
      }
    },
    _defineSetters: function() {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      this._setScrollLeft = "function" == typeof e ? function(a) {
        e(b.$scrollElement, a)
      } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) {
        f(b.$scrollElement, a)
      } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) {
        b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
      }
    },
    _handleWindowLoadAndResize: function() {
      var c = this,
        d = a(b);
      c.options.responsive && d.bind("load." + this.name, function() {
        c.refresh()
      }), d.bind("resize." + this.name, function() {
        c._detectViewport(), c.options.responsive && c.refresh()
      })
    },
    refresh: function(c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() {
        var a = d._getScrollLeft(),
          b = d._getScrollTop();
        d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
      }), this._setScrollLeft(e), this._setScrollTop(f)
    },
    _detectViewport: function() {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
    },
    _findParticles: function() {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop()
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
      this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
        var c, e, f, g, h, i, j, k, l, m = a(this),
          n = 0,
          o = 0,
          p = 0,
          q = 0;
        if (m.data("stellar-elementIsActive")) {
          if (m.data("stellar-elementIsActive") !== this) return
        } else m.data("stellar-elementIsActive", this);
        b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
        }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
          $element: m,
          $offsetParent: j,
          isFixed: "fixed" === m.css("position"),
          horizontalOffset: c,
          verticalOffset: e,
          startingPositionLeft: f,
          startingPositionTop: g,
          startingOffsetLeft: k,
          startingOffsetTop: l,
          parentOffsetLeft: n,
          parentOffsetTop: o,
          stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
          width: m.outerWidth(!0),
          height: m.outerHeight(!0),
          isHidden: !1
        })
      })
    },
    _findBackgrounds: function() {
      var b, c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() {
        var b, g, h, i, j, k, l, o = a(this),
          p = n(o),
          q = 0,
          r = 0,
          s = 0,
          t = 0;
        if (o.data("stellar-backgroundIsActive")) {
          if (o.data("stellar-backgroundIsActive") !== this) return
        } else o.data("stellar-backgroundIsActive", this);
        o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
        }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
          $element: o,
          $offsetParent: l,
          isFixed: "fixed" === o.css("background-attachment"),
          horizontalOffset: b,
          verticalOffset: g,
          startingValueLeft: p[0],
          startingValueTop: p[1],
          startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
          startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
          startingPositionLeft: o.position().left,
          startingPositionTop: o.position().top,
          startingOffsetLeft: j,
          startingOffsetTop: k,
          parentOffsetLeft: q,
          parentOffsetTop: r,
          stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
        })
      }))
    },
    _reset: function() {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
    },
    destroy: function() {
      this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
    },
    _setOffsets: function() {
      var c = this,
        d = a(b);
      d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() {
        c.horizontalOffset = c.options.horizontalOffset()
      })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() {
        c.verticalOffset = c.options.verticalOffset()
      })) : this.verticalOffset = this.options.verticalOffset
    },
    _repositionElements: function() {
      var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
        for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
        for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
      }
    },
    _handleScrollEvent: function() {
      var a = this,
        b = !1,
        c = function() {
          a._repositionElements(), b = !1
        },
        d = function() {
          b || (o(c), b = !0)
        };
      this.$scrollElement.bind("scroll." + this.name, d), d()
    },
    _startAnimationLoop: function() {
      var a = this;
      this._animationLoop = function() {
        o(a._animationLoop), a._repositionElements()
      }, this._animationLoop()
    }
  }, a.fn[f] = function(b) {
    var c = arguments;
    return b === d || "object" == typeof b ? this.each(function() {
      a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
    }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() {
      var d = a.data(this, "plugin_" + f);
      d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
    }) : void 0
  }, a[f] = function() {
    var c = a(b);
    return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
  }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);



/**
 * Lightbox v2.7.1
 * by Lokesh Dhakar - http://lokeshdhakar.com/projects/lightbox2/
 *
 * @license http://creativecommons.org/licenses/by/2.5/
 * - Free for use in both personal and commercial projects
 * - Attribution requires leaving author name, author link, and the license info intact
 */
(function() {
  var a = jQuery,
    b = function() {
      function a() {
        this.fadeDuration = 500, this.fitImagesInViewport = !0, this.resizeDuration = 700, this.positionFromTop = 50, this.showImageNumberLabel = !0, this.alwaysShowNavOnTouchDevices = !1, this.wrapAround = !1
      }
      return a.prototype.albumLabel = function(a, b) {
        return "Image " + a + " of " + b
      }, a
    }(),
    c = function() {
      function b(a) {
        this.options = a, this.album = [], this.currentImageIndex = void 0, this.init()
      }
      return b.prototype.init = function() {
        this.enable(), this.build()
      }, b.prototype.enable = function() {
        var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
          return b.start(a(c.currentTarget)), !1
        })
      }, b.prototype.build = function() {
        var b = this;
        a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
          return b.end(), !1
        }), this.$lightbox.hide().on("click", function(c) {
          return "lightbox" === a(c.target).attr("id") && b.end(), !1
        }), this.$outerContainer.on("click", function(c) {
          return "lightbox" === a(c.target).attr("id") && b.end(), !1
        }), this.$lightbox.find(".lb-prev").on("click", function() {
          return b.changeImage(0 === b.currentImageIndex ? b.album.length - 1 : b.currentImageIndex - 1), !1
        }), this.$lightbox.find(".lb-next").on("click", function() {
          return b.changeImage(b.currentImageIndex === b.album.length - 1 ? 0 : b.currentImageIndex + 1), !1
        }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
          return b.end(), !1
        })
      }, b.prototype.start = function(b) {
        function c(a) {
          d.album.push({
            link: a.attr("href"),
            title: a.attr("data-title") || a.attr("title")
          })
        }
        var d = this,
          e = a(window);
        e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({
          visibility: "hidden"
        }), this.sizeOverlay(), this.album = [];
        var f, g = 0,
          h = b.attr("data-lightbox");
        if (h) {
          f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
          for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i)
        } else if ("lightbox" === b.attr("rel")) c(b);
        else {
          f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
          for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j)
        }
        var k = e.scrollTop() + this.options.positionFromTop,
          l = e.scrollLeft();
        this.$lightbox.css({
          top: k + "px",
          left: l + "px"
        }).fadeIn(this.options.fadeDuration), this.changeImage(g)
      }, b.prototype.changeImage = function(b) {
        var c = this;
        this.disableKeyboardNav();
        var d = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var e = new Image;
        e.onload = function() {
          var f, g, h, i, j, k, l;
          d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerLeftPadding - c.containerRightPadding - 20, i = k - c.containerTopPadding - c.containerBottomPadding - 120, (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height())
        }, e.src = this.album[b].link, this.currentImageIndex = b
      }, b.prototype.sizeOverlay = function() {
        this.$overlay.width(a(window).width()).height(a(document).height())
      }, b.prototype.sizeContainer = function(a, b) {
        function c() {
          d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage()
        }
        var d = this,
          e = this.$outerContainer.outerWidth(),
          f = this.$outerContainer.outerHeight(),
          g = a + this.containerLeftPadding + this.containerRightPadding,
          h = b + this.containerTopPadding + this.containerBottomPadding;
        e !== g || f !== h ? this.$outerContainer.animate({
          width: g,
          height: h
        }, this.options.resizeDuration, "swing", function() {
          c()
        }) : c()
      }, b.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
      }, b.prototype.updateNav = function() {
        var a = !1;
        try {
          document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1
        } catch (b) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))))
      }, b.prototype.updateDetails = function() {
        var b = this;
        "undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function() {
          location.href = a(this).attr("href")
        }), this.album.length > 1 && this.options.showImageNumberLabel ? this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn("fast") : this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
          return b.sizeOverlay()
        })
      }, b.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
          var a = new Image;
          a.src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
          var b = new Image;
          b.src = this.album[this.currentImageIndex - 1].link
        }
      }, b.prototype.enableKeyboardNav = function() {
        a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
      }, b.prototype.disableKeyboardNav = function() {
        a(document).off(".keyboard")
      }, b.prototype.keyboardAction = function(a) {
        var b = 27,
          c = 37,
          d = 39,
          e = a.keyCode,
          f = String.fromCharCode(e).toLowerCase();
        e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
      }, b.prototype.end = function() {
        this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
          visibility: "visible"
        })
      }, b
    }();
  a(function() {
    {
      var a = new b;
      new c(a)
    }
  })
}).call(this);



// Owl Carousel
"function" != typeof Object.create && (Object.create = function(t) {
    function i() {}
    return i.prototype = t, new i
  }),
  function(t, i, s) {
    var e = {
      init: function(i, s) {
        this.$elem = t(s), this.options = t.extend({}, t.fn.owlCarousel.options, this.$elem.data(), i), this.userOptions = i, this.loadContent()
      },
      loadContent: function() {
        function i(t) {
          var i, s = "";
          if ("function" == typeof e.options.jsonSuccess) e.options.jsonSuccess.apply(this, [t]);
          else {
            for (i in t.owl) t.owl.hasOwnProperty(i) && (s += t.owl[i].item);
            e.$elem.html(s)
          }
          e.logIn()
        }
        var s, e = this;
        "function" == typeof e.options.beforeInit && e.options.beforeInit.apply(this, [e.$elem]), "string" == typeof e.options.jsonPath ? (s = e.options.jsonPath, t.getJSON(s, i)) : e.logIn()
      },
      logIn: function() {
        this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
          opacity: 0
        }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
      },
      setVars: function() {
        return 0 === this.$elem.children().length ? !1 : (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
      },
      onStartup: function() {
        this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
      },
      eachMoveUpdate: function() {
        !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
      },
      updateVars: function() {
        "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
      },
      reload: function() {
        var t = this;
        i.setTimeout(function() {
          t.updateVars()
        }, 0)
      },
      watchVisibility: function() {
        var t = this;
        return !1 !== t.$elem.is(":visible") ? !1 : (t.$elem.css({
          opacity: 0
        }), i.clearInterval(t.autoPlayInterval), i.clearInterval(t.checkVisible), void(t.checkVisible = i.setInterval(function() {
          t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
            opacity: 1
          }, 200), i.clearInterval(t.checkVisible))
        }, 500)))
      },
      wrapItems: function() {
        this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
      },
      baseClass: function() {
        var t = this.$elem.hasClass(this.options.baseClass),
          i = this.$elem.hasClass(this.options.theme);
        t || this.$elem.addClass(this.options.baseClass), i || this.$elem.addClass(this.options.theme)
      },
      updateItems: function() {
        var i, s;
        if (!1 === this.options.responsive) return !1;
        if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
        if (i = t(this.options.responsiveBaseWidth).width(), i > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
          for (this.options.itemsCustom.sort(function(t, i) {
              return t[0] - i[0]
            }), s = 0; s < this.options.itemsCustom.length; s += 1) this.options.itemsCustom[s][0] <= i && (this.options.items = this.options.itemsCustom[s][1]);
        else i <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), i <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), i <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), i <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), i <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
        this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
      },
      response: function() {
        var s, e, o = this;
        return !0 !== o.options.responsive ? !1 : (e = t(i).width(), o.resizer = function() {
          t(i).width() !== e && (!1 !== o.options.autoPlay && i.clearInterval(o.autoPlayInterval), i.clearTimeout(s), s = i.setTimeout(function() {
            e = t(i).width(), o.updateVars()
          }, o.options.responsiveRefreshRate))
        }, void t(i).resize(o.resizer))
      },
      updatePosition: function() {
        this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
      },
      appendItemsSizes: function() {
        var i = this,
          s = 0,
          e = i.itemsAmount - i.options.items;
        i.$owlItems.each(function(o) {
          var n = t(this);
          n.css({
            width: i.itemWidth
          }).data("owl-item", Number(o)), (0 === o % i.options.items || o === e) && (o > e || (s += 1)), n.data("owl-roundPages", s)
        })
      },
      appendWrapperSizes: function() {
        this.$owlWrapper.css({
          width: this.$owlItems.length * this.itemWidth * 2,
          left: 0
        }), this.appendItemsSizes()
      },
      calculateAll: function() {
        this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
      },
      calculateWidth: function() {
        this.itemWidth = Math.round(this.$elem.width() / this.options.items)
      },
      max: function() {
        var t = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
        return this.options.items > this.itemsAmount ? this.maximumPixels = t = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = t), t
      },
      min: function() {
        return 0
      },
      loops: function() {
        var i, s, e = 0,
          o = 0;
        for (this.positionsInArray = [0], this.pagesInArray = [], i = 0; i < this.itemsAmount; i += 1) o += this.itemWidth, this.positionsInArray.push(-o), !0 === this.options.scrollPerPage && (s = t(this.$owlItems[i]), s = s.data("owl-roundPages"), s !== e && (this.pagesInArray[e] = this.positionsInArray[i], e = s))
      },
      buildControls: function() {
        (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
      },
      buildButtons: function() {
        var i = this,
          s = t('<div class="owl-buttons"/>');
        i.owlControls.append(s), i.buttonPrev = t("<div/>", {
          "class": "owl-prev",
          html: i.options.navigationText[0] || ""
        }), i.buttonNext = t("<div/>", {
          "class": "owl-next",
          html: i.options.navigationText[1] || ""
        }), s.append(i.buttonPrev).append(i.buttonNext), s.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
          t.preventDefault()
        }), s.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(s) {
          s.preventDefault(), t(this).hasClass("owl-next") ? i.next() : i.prev()
        })
      },
      buildPagination: function() {
        var i = this;
        i.paginationWrapper = t('<div class="owl-pagination"/>'), i.owlControls.append(i.paginationWrapper), i.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(s) {
          s.preventDefault(), Number(t(this).data("owl-page")) !== i.currentItem && i.goTo(Number(t(this).data("owl-page")), !0)
        })
      },
      updatePagination: function() {
        var i, s, e, o, n, a;
        if (!1 === this.options.pagination) return !1;
        for (this.paginationWrapper.html(""), i = 0, s = this.itemsAmount - this.itemsAmount % this.options.items, o = 0; o < this.itemsAmount; o += 1) 0 === o % this.options.items && (i += 1, s === o && (e = this.itemsAmount - this.options.items), n = t("<div/>", {
          "class": "owl-page"
        }), a = t("<span></span>", {
          text: !0 === this.options.paginationNumbers ? i : "",
          "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
        }), n.append(a), n.data("owl-page", s === o ? e : o), n.data("owl-roundPages", i), this.paginationWrapper.append(n));
        this.checkPagination()
      },
      checkPagination: function() {
        var i = this;
        return !1 === i.options.pagination ? !1 : void i.paginationWrapper.find(".owl-page").each(function() {
          t(this).data("owl-roundPages") === t(i.$owlItems[i.currentItem]).data("owl-roundPages") && (i.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
        })
      },
      checkNavigation: function() {
        return !1 === this.options.navigation ? !1 : void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
      },
      updateControls: function() {
        this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
      },
      destroyControls: function() {
        this.owlControls && this.owlControls.remove()
      },
      next: function(t) {
        if (this.isTransition) return !1;
        if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
          if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
          this.currentItem = 0, t = "rewind"
        }
        this.goTo(this.currentItem, t)
      },
      prev: function(t) {
        if (this.isTransition) return !1;
        if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
          if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
          this.currentItem = this.maximumItem, t = "rewind"
        }
        this.goTo(this.currentItem, t)
      },
      goTo: function(t, s, e) {
        var o = this;
        return o.isTransition ? !1 : ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), t >= o.maximumItem ? t = o.maximumItem : 0 >= t && (t = 0), o.currentItem = o.owl.currentItem = t, !1 !== o.options.transitionStyle && "drag" !== e && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0), !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[t]) : o.css2slide(o.positionsInArray[t], 1), o.afterGo(), o.singleItemTransition(), !1) : (t = o.positionsInArray[t], !0 === o.browser.support3d ? (o.isCss3Finish = !1, !0 === s ? (o.swapSpeed("paginationSpeed"), i.setTimeout(function() {
          o.isCss3Finish = !0
        }, o.options.paginationSpeed)) : "rewind" === s ? (o.swapSpeed(o.options.rewindSpeed), i.setTimeout(function() {
          o.isCss3Finish = !0
        }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), i.setTimeout(function() {
          o.isCss3Finish = !0
        }, o.options.slideSpeed)), o.transition3d(t)) : !0 === s ? o.css2slide(t, o.options.paginationSpeed) : "rewind" === s ? o.css2slide(t, o.options.rewindSpeed) : o.css2slide(t, o.options.slideSpeed), void o.afterGo()))
      },
      jumpTo: function(t) {
        "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), t >= this.maximumItem || -1 === t ? t = this.maximumItem : 0 >= t && (t = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[t]) : this.css2slide(this.positionsInArray[t], 1), this.currentItem = this.owl.currentItem = t, this.afterGo()
      },
      afterGo: function() {
        this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
      },
      stop: function() {
        this.apStatus = "stop", i.clearInterval(this.autoPlayInterval)
      },
      checkAp: function() {
        "stop" !== this.apStatus && this.play()
      },
      play: function() {
        var t = this;
        return t.apStatus = "play", !1 === t.options.autoPlay ? !1 : (i.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = i.setInterval(function() {
          t.next(!0)
        }, t.options.autoPlay)))
      },
      swapSpeed: function(t) {
        "slideSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t))
      },
      addCssSpeed: function(t) {
        return {
          "-webkit-transition": "all " + t + "ms ease",
          "-moz-transition": "all " + t + "ms ease",
          "-o-transition": "all " + t + "ms ease",
          transition: "all " + t + "ms ease"
        }
      },
      removeTransition: function() {
        return {
          "-webkit-transition": "",
          "-moz-transition": "",
          "-o-transition": "",
          transition: ""
        }
      },
      doTranslate: function(t) {
        return {
          "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
          transform: "translate3d(" + t + "px, 0px,0px)"
        }
      },
      transition3d: function(t) {
        this.$owlWrapper.css(this.doTranslate(t))
      },
      css2move: function(t) {
        this.$owlWrapper.css({
          left: t
        })
      },
      css2slide: function(t, i) {
        var s = this;
        s.isCssFinish = !1, s.$owlWrapper.stop(!0, !0).animate({
          left: t
        }, {
          duration: i || s.options.slideSpeed,
          complete: function() {
            s.isCssFinish = !0
          }
        })
      },
      checkBrowser: function() {
        var t = s.createElement("div");
        t.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
          support3d: null !== t && 1 === t.length,
          isTouch: "ontouchstart" in i || i.navigator.msMaxTouchPoints
        }
      },
      moveEvents: function() {
        (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
      },
      eventTypes: function() {
        var t = ["s", "e", "x"];
        this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = t[0], this.ev_types.move = t[1], this.ev_types.end = t[2]
      },
      disabledEvents: function() {
        this.$elem.on("dragstart.owl", function(t) {
          t.preventDefault()
        }), this.$elem.on("mousedown.disableTextSelect", function(i) {
          return t(i.target).is("input, textarea, select, option")
        })
      },
      gestures: function() {
        function e(t) {
          if (void 0 !== t.touches) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
          };
          if (void 0 === t.touches) {
            if (void 0 !== t.pageX) return {
              x: t.pageX,
              y: t.pageY
            };
            if (void 0 === t.pageX) return {
              x: t.clientX,
              y: t.clientY
            }
          }
        }

        function o(i) {
          "on" === i ? (t(s).on(r.ev_types.move, n), t(s).on(r.ev_types.end, a)) : "off" === i && (t(s).off(r.ev_types.move), t(s).off(r.ev_types.end))
        }

        function n(o) {
          o = o.originalEvent || o || i.event, r.newPosX = e(o).x - l.offsetX, r.newPosY = e(o).y - l.offsetY, r.newRelativeX = r.newPosX - l.relativePos, "function" == typeof r.options.startDragging && !0 !== l.dragging && 0 !== r.newRelativeX && (l.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (8 < r.newRelativeX || -8 > r.newRelativeX) && !0 === r.browser.isTouch && (void 0 !== o.preventDefault ? o.preventDefault() : o.returnValue = !1, l.sliding = !0), (10 < r.newPosY || -10 > r.newPosY) && !1 === l.sliding && t(s).off("touchmove.owl"), r.newPosX = Math.max(Math.min(r.newPosX, r.newRelativeX / 5), r.maximumPixels + r.newRelativeX / 5), !0 === r.browser.support3d ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
        }

        function a(s) {
          s = s.originalEvent || s || i.event;
          var e;
          s.target = s.target || s.srcElement, l.dragging = !1, !0 !== r.browser.isTouch && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = 0 > r.newRelativeX ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", 0 !== r.newRelativeX && (e = r.getNewPosition(), r.goTo(e, !1, "drag"), l.targetElement === s.target && !0 !== r.browser.isTouch && (t(s.target).on("click.disable", function(i) {
            i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), t(i.target).off("click.disable")
          }), s = t._data(s.target, "events").click, e = s.pop(), s.splice(0, 0, e))), o("off")
        }
        var r = this,
          l = {
            offsetX: 0,
            offsetY: 0,
            baseElWidth: 0,
            relativePos: 0,
            position: null,
            minSwipe: null,
            maxSwipe: null,
            sliding: null,
            dargging: null,
            targetElement: null
          };
        r.isCssFinish = !0, r.$elem.on(r.ev_types.start, ".owl-wrapper", function(s) {
          s = s.originalEvent || s || i.event;
          var n;
          if (3 === s.which) return !1;
          if (!(r.itemsAmount <= r.options.items)) {
            if (!1 === r.isCssFinish && !r.options.dragBeforeAnimFinish || !1 === r.isCss3Finish && !r.options.dragBeforeAnimFinish) return !1;
            !1 !== r.options.autoPlay && i.clearInterval(r.autoPlayInterval), !0 === r.browser.isTouch || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, t(this).css(r.removeTransition()), n = t(this).position(), l.relativePos = n.left, l.offsetX = e(s).x - n.left, l.offsetY = e(s).y - n.top, o("on"), l.sliding = !1, l.targetElement = s.target || s.srcElement
          }
        })
      },
      getNewPosition: function() {
        var t = this.closestItem();
        return t > this.maximumItem ? t = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = t = 0), t
      },
      closestItem: function() {
        var i = this,
          s = !0 === i.options.scrollPerPage ? i.pagesInArray : i.positionsInArray,
          e = i.newPosX,
          o = null;
        return t.each(s, function(n, a) {
          e - i.itemWidth / 20 > s[n + 1] && e - i.itemWidth / 20 < a && "left" === i.moveDirection() ? (o = a, i.currentItem = !0 === i.options.scrollPerPage ? t.inArray(o, i.positionsInArray) : n) : e + i.itemWidth / 20 < a && e + i.itemWidth / 20 > (s[n + 1] || s[n] - i.itemWidth) && "right" === i.moveDirection() && (!0 === i.options.scrollPerPage ? (o = s[n + 1] || s[s.length - 1], i.currentItem = t.inArray(o, i.positionsInArray)) : (o = s[n + 1], i.currentItem = n + 1))
        }), i.currentItem
      },
      moveDirection: function() {
        var t;
        return 0 > this.newRelativeX ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
      },
      customEvents: function() {
        var t = this;
        t.$elem.on("owl.next", function() {
          t.next()
        }), t.$elem.on("owl.prev", function() {
          t.prev()
        }), t.$elem.on("owl.play", function(i, s) {
          t.options.autoPlay = s, t.play(), t.hoverStatus = "play"
        }), t.$elem.on("owl.stop", function() {
          t.stop(), t.hoverStatus = "stop"
        }), t.$elem.on("owl.goTo", function(i, s) {
          t.goTo(s)
        }), t.$elem.on("owl.jumpTo", function(i, s) {
          t.jumpTo(s)
        })
      },
      stopOnHover: function() {
        var t = this;
        !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function() {
          t.stop()
        }), t.$elem.on("mouseout", function() {
          "stop" !== t.hoverStatus && t.play()
        }))
      },
      lazyLoad: function() {
        var i, s, e, o, n;
        if (!1 === this.options.lazyLoad) return !1;
        for (i = 0; i < this.itemsAmount; i += 1) s = t(this.$owlItems[i]), "loaded" !== s.data("owl-loaded") && (e = s.data("owl-item"), o = s.find(".lazyOwl"), "string" != typeof o.data("src") ? s.data("owl-loaded", "loaded") : (void 0 === s.data("owl-loaded") && (o.hide(), s.addClass("loading").data("owl-loaded", "checked")), (n = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && o.length && this.lazyPreload(s, o)))
      },
      lazyPreload: function(t, s) {
        function e() {
          t.data("owl-loaded", "loaded").removeClass("loading"), s.removeAttr("data-src"), "fade" === a.options.lazyEffect ? s.fadeIn(400) : s.show(), "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem])
        }

        function o() {
          r += 1, a.completeImg(s.get(0)) || !0 === n ? e() : 100 >= r ? i.setTimeout(o, 100) : e()
        }
        var n, a = this,
          r = 0;
        "DIV" === s.prop("tagName") ? (s.css("background-image", "url(" + s.data("src") + ")"), n = !0) : s[0].src = s.data("src"), o()
      },
      autoHeight: function() {
        function s() {
          var s = t(n.$owlItems[n.currentItem]).height();
          n.wrapperOuter.css("height", s + "px"), n.wrapperOuter.hasClass("autoHeight") || i.setTimeout(function() {
            n.wrapperOuter.addClass("autoHeight")
          }, 0)
        }

        function e() {
          o += 1, n.completeImg(a.get(0)) ? s() : 100 >= o ? i.setTimeout(e, 100) : n.wrapperOuter.css("height", "")
        }
        var o, n = this,
          a = t(n.$owlItems[n.currentItem]).find("img");
        void 0 !== a.get(0) ? (o = 0, e()) : s()
      },
      completeImg: function(t) {
        return !t.complete || "undefined" != typeof t.naturalWidth && 0 === t.naturalWidth ? !1 : !0
      },
      onVisibleItems: function() {
        var i;
        for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], i = this.currentItem; i < this.currentItem + this.options.items; i += 1) this.visibleItems.push(i), !0 === this.options.addClassActive && t(this.$owlItems[i]).addClass("active");
        this.owl.visibleItems = this.visibleItems
      },
      transitionTypes: function(t) {
        this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
      },
      singleItemTransition: function() {
        var t = this,
          i = t.outClass,
          s = t.inClass,
          e = t.$owlItems.eq(t.currentItem),
          o = t.$owlItems.eq(t.prevItem),
          n = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
          a = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
        t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
          "-webkit-transform-origin": a + "px",
          "-moz-perspective-origin": a + "px",
          "perspective-origin": a + "px"
        }), o.css({
          position: "relative",
          left: n + "px"
        }).addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
          t.endPrev = !0, o.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(o, i)
        }), e.addClass(s).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
          t.endCurrent = !0, e.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(e, s)
        })
      },
      clearTransStyle: function(t, i) {
        t.css({
          position: "",
          left: ""
        }).removeClass(i), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
      },
      owlStatus: function() {
        this.owl = {
          userOptions: this.userOptions,
          baseElement: this.$elem,
          userItems: this.$userItems,
          owlItems: this.$owlItems,
          currentItem: this.currentItem,
          prevItem: this.prevItem,
          visibleItems: this.visibleItems,
          isTouch: this.browser.isTouch,
          browser: this.browser,
          dragDirection: this.dragDirection
        }
      },
      clearEvents: function() {
        this.$elem.off(".owl owl mousedown.disableTextSelect"), t(s).off(".owl owl"), t(i).off("resize", this.resizer)
      },
      unWrap: function() {
        0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
      },
      destroy: function() {
        this.stop(), i.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
      },
      reinit: function(i) {
        i = t.extend({}, this.userOptions, i), this.unWrap(), this.init(i, this.$elem)
      },
      addItem: function(t, i) {
        var s;
        return t ? 0 === this.$elem.children().length ? (this.$elem.append(t), this.setVars(), !1) : (this.unWrap(), s = void 0 === i || -1 === i ? -1 : i, s >= this.$userItems.length || -1 === s ? this.$userItems.eq(-1).after(t) : this.$userItems.eq(s).before(t), void this.setVars()) : !1
      },
      removeItem: function(t) {
        return 0 === this.$elem.children().length ? !1 : (t = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(t).remove(), void this.setVars())
      }
    };
    t.fn.owlCarousel = function(i) {
      return this.each(function() {
        if (!0 === t(this).data("owl-init")) return !1;
        t(this).data("owl-init", !0);
        var s = Object.create(e);
        s.init(i, this), t.data(this, "owlCarousel", s)
      })
    }, t.fn.owlCarousel.options = {
      items: 5,
      itemsCustom: !1,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsTabletSmall: !1,
      itemsMobile: [479, 1],
      singleItem: !1,
      itemsScaleUp: !1,
      slideSpeed: 200,
      paginationSpeed: 800,
      rewindSpeed: 1e3,
      autoPlay: !1,
      stopOnHover: !1,
      navigation: !1,
      navigationText: ["prev", "next"],
      rewindNav: !0,
      scrollPerPage: !1,
      pagination: !0,
      paginationNumbers: !1,
      responsive: !0,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: i,
      baseClass: "owl-carousel",
      theme: "owl-theme",
      lazyLoad: !1,
      lazyFollow: !0,
      lazyEffect: "fade",
      autoHeight: !1,
      jsonPath: !1,
      jsonSuccess: !1,
      dragBeforeAnimFinish: !0,
      mouseDrag: !0,
      touchDrag: !0,
      addClassActive: !1,
      transitionStyle: !1,
      beforeUpdate: !1,
      afterUpdate: !1,
      beforeInit: !1,
      afterInit: !1,
      beforeMove: !1,
      afterMove: !1,
      afterAction: !1,
      startDragging: !1,
      afterLazyLoad: !1
    }
  }(jQuery, window, document);



//
// SmoothScroll for websites v1.4.0 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//
! function() {
  function e() {
    z.keyboardSupport && m("keydown", a)
  }

  function t() {
    if (!A && document.body) {
      A = !0;
      var t = document.body,
        o = document.documentElement,
        n = window.innerHeight,
        r = t.scrollHeight;
      if (B = document.compatMode.indexOf("CSS") >= 0 ? o : t, D = t, e(), top != self) X = !0;
      else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
        var a = document.createElement("div");
        a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + B.scrollHeight + "px", document.body.appendChild(a);
        var i;
        T = function() {
          i || (i = setTimeout(function() {
            L || (a.style.height = "0", a.style.height = B.scrollHeight + "px", i = null)
          }, 500))
        }, setTimeout(T, 10), m("resize", T);
        var l = {
          attributes: !0,
          childList: !0,
          characterData: !1
        };
        if (M = new V(T), M.observe(t, l), B.offsetHeight <= n) {
          var c = document.createElement("div");
          c.style.clear = "both", t.appendChild(c)
        }
      }
      z.fixedBackground || L || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
    }
  }

  function o() {
    M && M.disconnect(), h(I, r), h("mousedown", i), h("keydown", a), h("resize", T), h("load", t)
  }

  function n(e, t, o) {
    if (p(t, o), 1 != z.accelerationMax) {
      var n = Date.now(),
        r = n - R;
      if (r < z.accelerationDelta) {
        var a = (1 + 50 / r) / 2;
        a > 1 && (a = Math.min(a, z.accelerationMax), t *= a, o *= a)
      }
      R = Date.now()
    }
    if (q.push({
        x: t,
        y: o,
        lastX: 0 > t ? .99 : -.99,
        lastY: 0 > o ? .99 : -.99,
        start: Date.now()
      }), !P) {
      var i = e === document.body,
        l = function(n) {
          for (var r = Date.now(), a = 0, c = 0, u = 0; u < q.length; u++) {
            var d = q[u],
              s = r - d.start,
              f = s >= z.animationTime,
              m = f ? 1 : s / z.animationTime;
            z.pulseAlgorithm && (m = x(m));
            var h = d.x * m - d.lastX >> 0,
              w = d.y * m - d.lastY >> 0;
            a += h, c += w, d.lastX += h, d.lastY += w, f && (q.splice(u, 1), u--)
          }
          i ? window.scrollBy(a, c) : (a && (e.scrollLeft += a), c && (e.scrollTop += c)), t || o || (q = []), q.length ? _(l, e, 1e3 / z.frameRate + 1) : P = !1
        };
      _(l, e, 0), P = !0
    }
  }

  function r(e) {
    A || t();
    var o = e.target,
      r = u(o);
    if (!r || e.defaultPrevented || e.ctrlKey) return !0;
    if (w(D, "embed") || w(o, "embed") && /\.pdf/i.test(o.src) || w(D, "object")) return !0;
    var a = -e.wheelDeltaX || e.deltaX || 0,
      i = -e.wheelDeltaY || e.deltaY || 0;
    return K && (e.wheelDeltaX && b(e.wheelDeltaX, 120) && (a = -120 * (e.wheelDeltaX / Math.abs(e.wheelDeltaX))), e.wheelDeltaY && b(e.wheelDeltaY, 120) && (i = -120 * (e.wheelDeltaY / Math.abs(e.wheelDeltaY)))), a || i || (i = -e.wheelDelta || 0), 1 === e.deltaMode && (a *= 40, i *= 40), !z.touchpadSupport && v(i) ? !0 : (Math.abs(a) > 1.2 && (a *= z.stepSize / 120), Math.abs(i) > 1.2 && (i *= z.stepSize / 120), n(r, a, i), e.preventDefault(), void l())
  }

  function a(e) {
    var t = e.target,
      o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== N.spacebar;
    document.contains(D) || (D = document.activeElement);
    var r = /^(textarea|select|embed|object)$/i,
      a = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (r.test(t.nodeName) || w(t, "input") && !a.test(t.type) || w(D, "video") || y(e) || t.isContentEditable || e.defaultPrevented || o) return !0;
    if ((w(t, "button") || w(t, "input") && a.test(t.type)) && e.keyCode === N.spacebar) return !0;
    var i, c = 0,
      d = 0,
      s = u(D),
      f = s.clientHeight;
    switch (s == document.body && (f = window.innerHeight), e.keyCode) {
      case N.up:
        d = -z.arrowScroll;
        break;
      case N.down:
        d = z.arrowScroll;
        break;
      case N.spacebar:
        i = e.shiftKey ? 1 : -1, d = -i * f * .9;
        break;
      case N.pageup:
        d = .9 * -f;
        break;
      case N.pagedown:
        d = .9 * f;
        break;
      case N.home:
        d = -s.scrollTop;
        break;
      case N.end:
        var m = s.scrollHeight - s.scrollTop - f;
        d = m > 0 ? m + 10 : 0;
        break;
      case N.left:
        c = -z.arrowScroll;
        break;
      case N.right:
        c = z.arrowScroll;
        break;
      default:
        return !0
    }
    n(s, c, d), e.preventDefault(), l()
  }

  function i(e) {
    D = e.target
  }

  function l() {
    clearTimeout(E), E = setInterval(function() {
      F = {}
    }, 1e3)
  }

  function c(e, t) {
    for (var o = e.length; o--;) F[j(e[o])] = t;
    return t
  }

  function u(e) {
    var t = [],
      o = document.body,
      n = B.scrollHeight;
    do {
      var r = F[j(e)];
      if (r) return c(t, r);
      if (t.push(e), n === e.scrollHeight) {
        var a = s(B) && s(o),
          i = a || f(B);
        if (X && d(B) || !X && i) return c(t, $())
      } else if (d(e) && f(e)) return c(t, e)
    } while (e = e.parentElement)
  }

  function d(e) {
    return e.clientHeight + 10 < e.scrollHeight
  }

  function s(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "hidden" !== t
  }

  function f(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t
  }

  function m(e, t) {
    window.addEventListener(e, t, !1)
  }

  function h(e, t) {
    window.removeEventListener(e, t, !1)
  }

  function w(e, t) {
    return (e.nodeName || "").toLowerCase() === t.toLowerCase()
  }

  function p(e, t) {
    e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (Y.x !== e || Y.y !== t) && (Y.x = e, Y.y = t, q = [], R = 0)
  }

  function v(e) {
    return e ? (O.length || (O = [e, e, e]), e = Math.abs(e), O.push(e), O.shift(), clearTimeout(H), H = setTimeout(function() {
      window.localStorage && (localStorage.SS_deltaBuffer = O.join(","))
    }, 1e3), !g(120) && !g(100)) : void 0
  }

  function b(e, t) {
    return Math.floor(e / t) == e / t
  }

  function g(e) {
    return b(O[0], e) && b(O[1], e) && b(O[2], e)
  }

  function y(e) {
    var t = e.target,
      o = !1;
    if (-1 != document.URL.indexOf("www.youtube.com/watch"))
      do
        if (o = t.classList && t.classList.contains("html5-video-controls")) break; while (t = t.parentNode);
    return o
  }

  function S(e) {
    var t, o, n;
    return e *= z.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (o = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = o + n * (1 - o)), t * z.pulseNormalize
  }

  function x(e) {
    return e >= 1 ? 1 : 0 >= e ? 0 : (1 == z.pulseNormalize && (z.pulseNormalize /= S(1)), S(e))
  }

  function k(e) {
    for (var t in e) C.hasOwnProperty(t) && (z[t] = e[t])
  }
  var D, M, T, E, H, C = {
      frameRate: 150,
      animationTime: 400,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      touchpadSupport: !1,
      fixedBackground: !0,
      excluded: ""
    },
    z = C,
    L = !1,
    X = !1,
    Y = {
      x: 0,
      y: 0
    },
    A = !1,
    B = document.documentElement,
    O = [],
    K = /^Mac/.test(navigator.platform),
    N = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36
    },
    q = [],
    P = !1,
    R = Date.now(),
    j = function() {
      var e = 0;
      return function(t) {
        return t.uniqueID || (t.uniqueID = e++)
      }
    }(),
    F = {};
  window.localStorage && localStorage.SS_deltaBuffer && (O = localStorage.SS_deltaBuffer.split(","));
  var I, _ = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, o) {
        window.setTimeout(e, o || 1e3 / 60)
      }
    }(),
    V = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    $ = function() {
      var e;
      return function() {
        if (!e) {
          var t = document.createElement("div");
          t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
          var o = document.body.scrollTop;
          document.documentElement.scrollTop;
          window.scrollBy(0, 1), e = document.body.scrollTop != o ? document.body : document.documentElement, window.scrollBy(0, -1), document.body.removeChild(t)
        }
        return e
      }
    }(),
    U = window.navigator.userAgent,
    W = /Edge/.test(U),
    G = /chrome/i.test(U) && !W,
    J = /safari/i.test(U) && !W,
    Q = /mobile/i.test(U),
    Z = (G || J) && !Q;
  "onwheel" in document.createElement("div") ? I = "wheel" : "onmousewheel" in document.createElement("div") && (I = "mousewheel"), I && Z && (m(I, r), m("mousedown", i), m("load", t)), k.destroy = o, window.SmoothScrollOptions && k(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
    return k
  }) : "object" == typeof exports ? module.exports = k : window.SmoothScroll = k
}();


/*! WOW - v1.1.2 - 2015-04-07
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
  var a, b, c, d, e, f = function(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    },
    g = [].indexOf || function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (b in this && this[b] === a) return b;
      return -1
    };
  b = function() {
    function a() {}
    return a.prototype.extend = function(a, b) {
      var c, d;
      for (c in b) d = b[c], null == a[c] && (a[c] = d);
      return a
    }, a.prototype.isMobile = function(a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }, a.prototype.createEvent = function(a, b, c, d) {
      var e;
      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }, a.prototype.emitEvent = function(a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
    }, a.prototype.addEvent = function(a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }, a.prototype.removeEvent = function(a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }, a.prototype.innerHeight = function() {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, a
  }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
    function a() {
      this.keys = [], this.values = []
    }
    return a.prototype.get = function(a) {
      var b, c, d, e, f;
      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
        if (c = f[b], c === a) return this.values[b]
    }, a.prototype.set = function(a, b) {
      var c, d, e, f, g;
      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
        if (d = g[c], d === a) return void(this.values[c] = b);
      return this.keys.push(a), this.values.push(b)
    }, a
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }
    return a.notSupported = !0, a.prototype.observe = function() {}, a
  }()), d = this.getComputedStyle || function(a) {
    return this.getPropertyValue = function(b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
        return b.toUpperCase()
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
    }, this
  }, e = /(\-([a-z]){1})/g, this.WOW = function() {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }
    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null
    }, e.prototype.init = function() {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, e.prototype.start = function() {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function() {
          var a, c, d, e;
          for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.all = function() {
          var a, c, d, e;
          for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.boxes.length)
        if (this.disabled()) this.resetStyle();
        else
          for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
      return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
        return function(b) {
          var c, d, e, f, g;
          for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
            var a, b, c, d;
            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
            return d
          }.call(a));
          return g
        }
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      }) : void 0
    }, e.prototype.stop = function() {
      return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, e.prototype.sync = function() {
      return a.notSupported ? this.doSync(this.element) : void 0
    }, e.prototype.doSync = function(a) {
      var b, c, d, e, f;
      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        return f
      }
    }, e.prototype.show = function(a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
    }, e.prototype.applyStyle = function(a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
        return function() {
          return f.customStyle(a, b, d, c, e)
        }
      }(this))
    }, e.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(a) {
        return window.requestAnimationFrame(a)
      } : function(a) {
        return a()
      }
    }(), e.prototype.resetStyle = function() {
      var a, b, c, d, e;
      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
      return e
    }, e.prototype.resetAnimation = function(a) {
      var b;
      return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
    }, e.prototype.customStyle = function(a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
        animationDuration: c
      }), d && this.vendorSet(a.style, {
        animationDelay: d
      }), e && this.vendorSet(a.style, {
        animationIterationCount: e
      }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
      var c, d, e, f;
      d = [];
      for (c in b) e = b[c], a["" + c] = e, d.push(function() {
        var b, d, g, h;
        for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
        return h
      }.call(this));
      return d
    }, e.prototype.vendorCSS = function(a, b) {
      var c, e, f, g, h, i;
      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      return g
    }, e.prototype.animationName = function(a) {
      var b;
      try {
        b = this.vendorCSS(a, "animation-name").cssText
      } catch (c) {
        b = d(a).getPropertyValue("animation-name")
      }
      return "none" === b ? "" : b
    }, e.prototype.cacheAnimationName = function(a) {
      return this.animationNameCache.set(a, this.animationName(a))
    }, e.prototype.cachedAnimationName = function(a) {
      return this.animationNameCache.get(a)
    }, e.prototype.scrollHandler = function() {
      return this.scrolled = !0
    }, e.prototype.scrollCallback = function() {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
        var b, c, d, e;
        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        return e
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, e.prototype.offsetTop = function(a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;
      for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
      return b
    }, e.prototype.isVisible = function(a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
    }, e.prototype.util = function() {
      return null != this._util ? this._util : this._util = new b
    }, e.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, e
  }()
}).call(this);


/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
! function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery)
}(this, function(a) {
  "use strict";

  function b(a) {
    var b, c, d, e, f, g, h, i = {};
    for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === -1 && c.search(":") !== -1); h++) b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || "false" !== e && e), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e;
    return null == d && null == e ? a : i
  }

  function c(a) {
    a = "" + a;
    var b, c, d, e = a.split(/\s+/),
      f = "50%",
      g = "50%";
    for (d = 0, b = e.length; d < b; d++) c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c;
    return {
      x: f,
      y: g
    }
  }

  function d(b, c) {
    var d = function() {
      c(this.src)
    };
    a('<img src="' + b + '.gif">').on("load", d), a('<img src="' + b + '.jpg">').on("load", d), a('<img src="' + b + '.jpeg">').on("load", d), a('<img src="' + b + '.png">').on("load", d)
  }

  function e(c, d, e) {
    if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, "");
    else if ("object" == typeof d)
      for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
    this.settings = a.extend({}, g, e), this.path = d;
    try {
      this.init()
    } catch (i) {
      if (i.message !== h) throw i
    }
  }
  var f = "vide",
    g = {
      volume: 1,
      playbackRate: 1,
      muted: !0,
      loop: !0,
      autoplay: !0,
      position: "50% 50%",
      posterType: "detect",
      resizing: !0,
      bgColor: "transparent",
      className: ""
    },
    h = "Not implemented";
  e.prototype.init = function() {
    var b, e, f = this,
      g = f.path,
      i = g,
      j = "",
      k = f.$element,
      l = f.settings,
      m = c(l.position),
      n = l.posterType;
    e = f.$wrapper = a("<div>").addClass(l.className).css({
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      "background-color": l.bgColor,
      "background-repeat": "no-repeat",
      "background-position": m.x + " " + m.y
    }), "object" == typeof g && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)), "detect" === n ? d(i, function(a) {
      e.css("background-image", "url(" + a + ")")
    }) : "none" !== n && e.css("background-image", "url(" + i + "." + n + ")"), "static" === k.css("position") && k.css("position", "relative"), k.prepend(e), "object" == typeof g ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a("<video>" + j + "</video>")) : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>');
    try {
      b.prop({
        autoplay: l.autoplay,
        loop: l.loop,
        volume: l.volume,
        muted: l.muted,
        defaultMuted: l.muted,
        playbackRate: l.playbackRate,
        defaultPlaybackRate: l.playbackRate
      })
    } catch (o) {
      throw new Error(h)
    }
    b.css({
      margin: "auto",
      position: "absolute",
      "z-index": -1,
      top: m.y,
      left: m.x,
      "-webkit-transform": "translate(-" + m.x + ", -" + m.y + ")",
      "-ms-transform": "translate(-" + m.x + ", -" + m.y + ")",
      "-moz-transform": "translate(-" + m.x + ", -" + m.y + ")",
      transform: "translate(-" + m.x + ", -" + m.y + ")",
      visibility: "hidden",
      opacity: 0
    }).one("canplaythrough.vide", function() {
      f.resize()
    }).one("playing.vide", function() {
      b.css({
        visibility: "visible",
        opacity: 1
      }), e.css("background-image", "none")
    }), k.on("resize.vide", function() {
      l.resizing && f.resize()
    }), e.append(b)
  }, e.prototype.getVideoObject = function() {
    return this.$video[0]
  }, e.prototype.resize = function() {
    if (this.$video) {
      var a = this.$wrapper,
        b = this.$video,
        c = b[0],
        d = c.videoHeight,
        e = c.videoWidth,
        f = a.height(),
        g = a.width();
      g / e > f / d ? b.css({
        width: g + 2,
        height: "auto"
      }) : b.css({
        width: "auto",
        height: f + 2
      })
    }
  }, e.prototype.destroy = function() {
    delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove()
  }, a[f] = {
    lookup: []
  }, a.fn[f] = function(b, c) {
    var d;
    return this.each(function() {
      d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d)
    }), this
  }, a(document).ready(function() {
    var b = a(window);
    b.on("resize.vide", function() {
      for (var b, c = a[f].lookup.length, d = 0; d < c; d++) b = a[f].lookup[d], b && b.settings.resizing && b.resize()
    }), b.on("unload.vide", function() {
      return !1
    }), a(document).find("[data-vide-bg]").each(function(b, c) {
      var d = a(c),
        e = d.data("vide-options"),
        g = d.data("vide-bg");
      d[f](g, e)
    })
  })
});


/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
  var b, c, d, e, f, g, h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function() {},
    u = !!window.jQuery,
    v = a(window),
    w = function(a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function(b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    y = function(c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function(c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    },
    A = function() {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    },
    B = function() {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t,
    init: function() {
      var c = navigator.appVersion;
      b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    },
    open: function(c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break
          }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      } : {
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function() {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close: function() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
        b._close()
      }, b.st.removalDelay)) : b._close())
    },
    _close: function() {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    },
    updateSize: function(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    },
    appendContent: function(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    },
    parseEl: function(c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {
          el: a(e)
        } : (d = e.type, e = {
          data: e,
          src: e.src
        }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break
          }
        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    },
    addGroup: function(a, c) {
      var d = function(d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    },
    _openClick: function(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus: function(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    },
    _checkIfClose: function(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    },
    _addClassToMFP: function(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    },
    _setFocus: function() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    },
    _parseMarkup: function(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
        if (void 0 === c || c === !1) return !0;
        if (e = a.split("_"), e.length > 1) {
          var d = b.find(p + "-" + e[0]);
          if (d.length > 0) {
            var f = e[1];
            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
          }
        } else b.find(p + "-" + a).html(c)
      })
    },
    _getScrollbarSize: function() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, a.fn.magnificPopup = function(c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f)
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline",
    G = function() {
      E && (D.after(E.addClass(C)).detach(), E = null)
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        b.types.push(F), w(h + "." + F, function() {
          G()
        })
      },
      getInline: function(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax",
    J = function() {
      H && a(document.body).removeClass(H)
    },
    K = function() {
      J(), b.req && b.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      },
      getAjax: function(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          },
          error: function() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function() {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function() {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function() {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function(a) {
        var c = 0,
          d = a.img[0],
          e = function(f) {
            L && clearInterval(L), L = setInterval(function() {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
            }, f)
          };
        e(1)
      },
      getImage: function(c, d) {
        var e = 0,
          f = function() {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function() {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function(a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function() {
        var a, c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration,
            j = function(a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
            },
            k = function() {
              b.content.css("visibility", "visible")
            };
          w("BuildControls" + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                f.css(b._getOffset(!0)), e = setTimeout(function() {
                  k(), setTimeout(function() {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function() {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function() {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      },
      _allowZoom: function() {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function() {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function(a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function() {
        b.types.push(P), w("BeforeChange", function(a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function() {
          R()
        })
      },
      getIframe: function(c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function() {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function(a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var c = b.st.gallery,
          e = ".mfp-gallery",
          g = Boolean(a.fn.mfpFastClick);
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function(a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function(a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function(a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function() {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
              h = g ? "mfpFastClick" : "click";
            e[h](function() {
              b.prev()
            }), f[h](function() {
              b.next()
            }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
          }
        }), w(n + e, function() {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function() {
          d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
        })) : !1
      },
      next: function() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      },
      prev: function() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      },
      goTo: function(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      },
      preloadNearbyImages: function() {
        var a, c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
            d.hasSize = !0
          }).on("error.mfploader", function() {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
      options: {
        replaceSrc: function(a) {
          return a.src.replace(/\.\w+$/, function(a) {
            return "@2x" + a
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function() {
          if (window.devicePixelRatio > 1) {
            var a = b.st.retina,
              c = a.ratio;
            c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
              b.img.css({
                "max-width": b.img[0].naturalWidth / c,
                width: "100%"
              })
            }), w("ElementParse." + U, function(b, d) {
              d.src = a.replaceSrc(d, c)
            }))
          }
        }
      }
    }),
    function() {
      var b = 1e3,
        c = "ontouchstart" in window,
        d = function() {
          v.off("touchmove" + f + " touchend" + f)
        },
        e = "mfpFastClick",
        f = "." + e;
      a.fn.mfpFastClick = function(e) {
        return a(this).each(function() {
          var g, h = a(this);
          if (c) {
            var i, j, k, l, m, n;
            h.on("touchstart" + f, function(a) {
              l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
              }).on("touchend" + f, function(a) {
                d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                  g = !1
                }, b), e())
              })
            })
          }
          h.on("click" + f, function() {
            g || e()
          })
        })
      }, a.fn.destroyMfpFastClick = function() {
        a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
      }
    }(), A()
});
