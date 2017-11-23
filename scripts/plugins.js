/*! lozad.js - v1.0.9 - 2017-10-26
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2017 Apoorv Saxena; Licensed MIT */
!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd ? define(e) : (t.lozad = e())
})(this, function() {
  'use strict'
  function t(t) {
    t.setAttribute('data-loaded', !0)
  }
  var e =
      Object.assign ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e]
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
        return t
      },
    r = {
      rootMargin: '0px',
      threshold: 0,
      load: function(t) {
        t.getAttribute('data-src') && (t.src = t.getAttribute('data-src')),
          t.getAttribute('data-srcset') &&
            (t.srcset = t.getAttribute('data-srcset')),
          t.getAttribute('data-background-image') &&
            (t.style.backgroundImage =
              'url(' + t.getAttribute('data-background-image') + ')')
      }
    },
    o = function(t) {
      return 'true' === t.getAttribute('data-loaded')
    },
    n = function(e) {
      return function(r, n) {
        r.forEach(function(r) {
          r.intersectionRatio > 0 &&
            (n.unobserve(r.target), o(r.target) || (e(r.target), t(r.target)))
        })
      }
    }
  return function() {
    var a =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : '.lozad',
      i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      u = e({}, r, i),
      d = u.rootMargin,
      c = u.threshold,
      s = u.load,
      g = void 0
    return (
      window.IntersectionObserver &&
        (g = new IntersectionObserver(n(s), { rootMargin: d, threshold: c })),
      {
        observe: function() {
          for (var e = document.querySelectorAll(a), r = 0; r < e.length; r++)
            o(e[r]) || (g ? g.observe(e[r]) : (s(e[r]), t(e[r])))
        },
        triggerLoad: function(e) {
          o(e) || (s(e), t(e))
        }
      }
    )
  }
})

jQuery.easing.jswing = jQuery.easing.swing
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
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
    return -h / 2 * (--f * (f - 2) - 1) + a
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
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
  },
  easeOutExpo: function(e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
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
    var i = 1.70158
    var j = 0
    var g = l
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
      g = l
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin((h * k - i) * (2 * Math.PI) / j)
      ) + e
    )
  },
  easeOutElastic: function(f, h, e, l, k) {
    var i = 1.70158
    var j = 0
    var g = l
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
      g = l
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) +
      l +
      e
    )
  },
  easeInOutElastic: function(f, h, e, l, k) {
    var i = 1.70158
    var j = 0
    var g = l
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
      g = l
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin((h * k - i) * (2 * Math.PI) / j)) +
        e
      )
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin((h * k - i) * (2 * Math.PI) / j) *
        0.5 +
      l +
      e
    )
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
      return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a
    }
    return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a
  },
  easeInBounce: function(e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
  },
  easeOutBounce: function(e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a
        }
      }
    }
  },
  easeInOutBounce: function(e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    )
  }
})

/**
 *  Parallax Scrolling Library
	scrollax
 *
 */
// (function(e) {
//     "function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
// })(function(e) {
//     function W(a) {
//         if (console && console.warn) console.warn("Scrollax: " + a);
//         else throw "Scrollax: " + a;
//     }

//     function ka(a) {
//         var g = !!("pageYOffset" in a);
//         return {
//             width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
//             height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
//             left: a[g ? "pageXOffset" : "scrollLeft"],
//             top: a[g ? "pageYOffset" : "scrollTop"]
//         }
//     }

//     function X(a) {
//         return (a = a.data("scrollax")) && eval("({" + a + "})") || {}
//     }

//     function Y(a) {
//         var g, c;
//         return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a)
//     }
//     var v = Array.prototype,
//         C = v.push,
//         Z = v.splice,
//         aa = Object.prototype.hasOwnProperty,
//         la = /[-+]?\d+(\.\d+)?/g,
//         ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
//         ba = e(window),
//         ca = e(document.body),
//         da, ea, L, M, N, q = function(a, g, c) {
//             function k() {
//                 O = fa ? ca.find(ga) : P.find(ga);
//                 x.length = 0;
//                 r = !!t.horizontal;
//                 O.each(na);
//                 d();
//                 t.performanceTrick && (F = fa ? ca : P);
//                 u("load");
//                 return f
//             }

//             function l() {
//                 G && (G = clearTimeout(G));
//                 G = setTimeout(function() {
//                     f.reload()
//                 })
//             }

//             function d() {
//                 var ha = x.length;
//                 t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = !0), ia = setTimeout(function() {
//                     F.removeClass("scrollax-performance");
//                     Q = !1
//                 }, 100));
//                 if (ha) {
//                     H = ka(a);
//                     for (var c = 0; c < ha; c++) I = x[c],
//                         y = L(I.element, a), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
//                     u("scroll", H)
//                 }
//             }

//             function b(a, b) {
//                 S = a.parallaxElements;
//                 var c = S.length;
//                 if (c)
//                     for (var f = 0; f < c; f++) {
//                         T = S[f];
//                         var g = oa = T.element,
//                             d = b;
//                         U = T.properties || (r ? {
//                             translateX: "100%"
//                         } : {
//                             translateY: "100%"
//                         });
//                         D = "";
//                         for (B in U) {
//                             n = U[B];
//                             if ("number" === typeof n) n *=
//                                 d;
//                             else if ("string" === typeof n)
//                                 for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d));
//                             if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
//                             else {
//                                 var k = g.style,
//                                     l = B,
//                                     h;
//                                 "opacity" === B ? (h = 0 > d ? 1 + n : 1 - n, h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
//                                 k[l] = h
//                             }
//                         }
//                         D && (g.style[da] = ea + D)
//                     }
//             }

//             function pa(a) {
//                 return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1
//             }

//             function u(a, b) {
//                 if (h[a]) {
//                     E = h[a].length;
//                     for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
//                     for (m = 0; m < E; m++) V[m].call(f,
//                         a, b)
//                 }
//             }

//             function p(a, b) {
//                 for (var c = 0, f = h[a].length; c < f; c++)
//                     if (h[a][c] === b) return c;
//                 return -1
//             }
//             var f = this,
//                 P = a && e(a).eq(0) || ba,
//                 w = q.instances,
//                 v = null;
//             a = P[0];
//             e.each(w, function(b, c) {
//                 b && b.frame === a && (v = !0)
//             });
//             if (!a || v) v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
//             else {
//                 var t = e.extend({}, q.defaults, g),
//                     x = [],
//                     O = null,
//                     ga = t.parentSelector || "[data-scrollax-parent]",
//                     qa = t.elementsSelector || "[data-scrollax]",
//                     h = {},
//                     V = [],
//                     G, fa = Y(a),
//                     m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U,
//                     B, n, D, K;
//                 f.frame = a;
//                 f.options = t;
//                 f.parents = x;
//                 f.initialized = !1;
//                 f.reload = k;
//                 var na = function(a, b) {
//                     var c = e(b),
//                         f = X(e(b)),
//                         d = {};
//                     d.element = b;
//                     d.options = f;
//                     d.parallaxElements = [];
//                     c.find(qa).each(function(a, b) {
//                         var c = X(e(b));
//                         c.element = b;
//                         C.call(d.parallaxElements, c)
//                     });
//                     C.call(x, d)
//                 };
//                 f.scroll = d;
//                 f.getIndex = pa;
//                 f.one = function(a, b) {
//                     function c() {
//                         b.apply(f, arguments);
//                         f.off(a, c)
//                     }
//                     f.on(a, c);
//                     return f
//                 };
//                 f.on = function(a, b) {
//                     if ("object" === typeof a)
//                         for (var c in a) {
//                             if (aa.call(a, c)) f.on(c, a[c])
//                         } else if ("function" === typeof b) {
//                             c = a.split(" ");
//                             for (var d = 0, g = c.length; d < g; d++) h[c[d]] = h[c[d]] || [], -1 === p(c[d], b) && C.call(h[c[d]], b)
//                         } else if ("array" === typeof b)
//                         for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
//                     return f
//                 };
//                 f.off = function(a, c) {
//                     if (c instanceof Array)
//                         for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);
//                     else
//                         for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
//                             if (h[b[d]] = h[b[d]] || [], "undefined" === typeof c) h[b[d]].length = 0;
//                             else {
//                                 var k = p(b[d], c); - 1 !== k && Z.call(h[b[d]], k, 1)
//                             } return f
//                 };
//                 f.set = function(a, b) {
//                     e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
//                     k();
//                     return f
//                 };
//                 f.destroy = function() {
//                     N(window, "resize", l);
//                     N(a, "scroll", d);
//                     e.each(w, function(b, c) {
//                         b && b.frame === a && Z.call(q.instances, c, 1)
//                     });
//                     x.length = 0;
//                     f.initialized = !1;
//                     u("destroy");
//                     return f
//                 };
//                 f.init = function() {
//                     if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a, "scroll", d), C.call(q.instances, f), f.initialized = !0, u("initialized"), f
//                 }
//             }
//         };
//     q.instances = [];
//     (function() {
//         var a, g, c, k, l, d, b, e;
//         L = function(u, p) {
//             g = u.ownerDocument || u;
//             c = g.documentElement;
//             k = Y(p) ? p : g.defaultView || window;
//             p = p && p !== g ? p : c;
//             l = (k.pageYOffset ||
//                 c.scrollTop) - c.clientTop;
//             d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
//             b = {
//                 top: 0,
//                 left: 0
//             };
//             if (u && u.getBoundingClientRect) {
//                 var f = {},
//                     q = u.getBoundingClientRect();
//                 for (a in q) f[a] = q[a];
//                 b = f;
//                 b.width = b.right - b.left;
//                 b.height = b.bottom - b.top
//             } else return null;
//             if (p === k) return b;
//             b.top += l;
//             b.left += d;
//             b.right += d;
//             b.bottom += l;
//             if (p === c) return b;
//             e = L(p);
//             b.left -= e.left;
//             b.right -= e.left;
//             b.top -= e.top;
//             b.bottom -= e.top;
//             return b
//         }
//     })();
//     (function() {
//         function a() {
//             this.returnValue = !1
//         }

//         function g() {
//             this.cancelBubble = !0
//         }
//         M = window.addEventListener ?
//             function(a, g, e, d) {
//                 a.addEventListener(g, e, d || !1);
//                 return e
//             } : function(c, e, l) {
//                 var d = e + l;
//                 c[d] = c[d] || function() {
//                     var b = window.event;
//                     b.target = b.srcElement;
//                     b.preventDefault = a;
//                     b.stopPropagation = g;
//                     l.call(c, b)
//                 };
//                 c.attachEvent("on" + e, c[d]);
//                 return l
//             };
//         N = window.removeEventListener ? function(a, g, e, d) {
//             a.removeEventListener(g, e, d || !1);
//             return e
//         } : function(a, g, e) {
//             var d = g + e;
//             a.detachEvent("on" + g, a[d]);
//             try {
//                 delete a[d]
//             } catch (b) {
//                 a[d] = void 0
//             }
//             return e
//         }
//     })();
//     (function() {
//         function a(a) {
//             for (var e = 0, d = g.length; e < d; e++) {
//                 var b = g[e] ? g[e] +
//                     a.charAt(0).toUpperCase() + a.slice(1) : a;
//                 if (null != c.style[b]) return b
//             }
//         }
//         var g = ["", "webkit", "-moz-", "ms", "o"],
//             c = document.createElement("div");
//         da = a("transform");
//         ea = a("perspective") ? "translateZ(0) " : ""
//     })();
//     q.defaults = {
//         horizontal: !1,
//         offset: 0,
//         parentSelector: null,
//         elementsSelector: null,
//         performanceTrick: !1
//     };
//     window.Scrollax = q;
//     e.fn.Scrollax = function(a, g) {
//         var c, k;
//         if (!e.isPlainObject(a)) {
//             if ("string" === typeof a || !1 === a) c = !1 === a ? "destroy" : a, k = slice.call(arguments, 1);
//             a = {}
//         }
//         return this.each(function(l, d) {
//             var b = e.data(d,
//                 "scrollax");
//             b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", (new q(d, a, g)).init())
//         })
//     };
//     e.Scrollax = function(a, e) {
//         ba.Scrollax(a, e)
//     };
//     // var v = document.head || document.getElementsByTagName("head")[0],
//     //     w = document.createElement("style");
//     // w.type = "text/css";
//     // w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" :
//     //     w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
//     // v.appendChild(w);
//     return q
// });
;(function($) {
  $.fn.appear = function(f, o) {
    var s = $.extend(
      {
        one: true
      },
      o
    )
    return this.each(function() {
      var t = $(this)
      t.appeared = false
      if (!f) {
        t.trigger('appear', s.data)
        return
      }
      var w = $(window)
      var c = function() {
        if (!t.is(':visible')) {
          t.appeared = false
          return
        }
        var a = w.scrollLeft()
        var b = w.scrollTop()
        var o = t.offset()
        var x = o.left
        var y = o.top
        if (
          y + t.height() >= b &&
          y <= b + w.height() &&
          x + t.width() >= a &&
          x <= a + w.width()
        ) {
          if (!t.appeared) t.trigger('appear', s.data)
        } else {
          t.appeared = false
        }
      }
      var m = function() {
        t.appeared = true
        if (s.one) {
          w.unbind('scroll', c)
          var i = $.inArray(c, $.fn.appear.checks)
          if (i >= 0) $.fn.appear.checks.splice(i, 1)
        }
        f.apply(this, arguments)
      }
      if (s.one) t.one('appear', s.data, m)
      else t.bind('appear', s.data, m)
      w.scroll(c)
      $.fn.appear.checks.push(c)
      c()
    })
  }
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function() {
      var l = $.fn.appear.checks.length
      if (l > 0) while (l--) $.fn.appear.checks[l]()
    },
    run: function() {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout)
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20)
    }
  })
  $.each(
    [
      'append',
      'prepend',
      'after',
      'before',
      'attr',
      'removeAttr',
      'addClass',
      'removeClass',
      'toggleClass',
      'remove',
      'css',
      'show',
      'hide'
    ],
    function(i, n) {
      var u = $.fn[n]
      if (u) {
        $.fn[n] = function() {
          var r = u.apply(this, arguments)
          $.fn.appear.run()
          return r
        }
      }
    }
  )
})(jQuery)

/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */

// Utility
if (typeof Object.create !== 'function') {
  Object.create = function(obj) {
    function F() {}
    F.prototype = obj
    return new F()
  }
}
;(function($, window, document, undefined) {
  'use strict'
  var SinglePageNav = {
    init: function(options, container) {
      this.options = $.extend({}, $.fn.singlePageNav.defaults, options)
      this.container = container
      this.$container = $(container)
      this.$links = this.$container.find('a')
      if (this.options.filter !== '') {
        this.$links = this.$links.filter(this.options.filter)
      }
      this.$window = $(window)
      this.$htmlbody = $('html, body')
      this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this))
      this.didScroll = false
      this.checkPosition()
      this.setTimer()
    },
    handleClick: function(e) {
      var self = this,
        link = e.currentTarget,
        $elem = $(link.hash)
      e.preventDefault()
      if ($elem.length) {
        self.clearTimer()
        if (typeof self.options.beforeStart === 'function') {
          self.options.beforeStart()
        }
        self.setActiveLink(link.hash)
        self.scrollTo($elem, function() {
          if (self.options.updateHash && history.pushState) {
            history.pushState(null, null, link.hash)
          }
          self.setTimer()
          if (typeof self.options.onComplete === 'function') {
            self.options.onComplete()
          }
        })
      }
    },
    scrollTo: function($elem, callback) {
      var self = this
      var target = self.getCoords($elem).top
      var called = false
      self.$htmlbody.stop().animate(
        {
          scrollTop: target
        },
        {
          duration: self.options.speed,
          easing: self.options.easing,
          complete: function() {
            if (typeof callback === 'function' && !called) {
              callback()
            }
            called = true
          }
        }
      )
    },
    setTimer: function() {
      var self = this
      self.$window.on('scroll.singlePageNav', function() {
        self.didScroll = true
      })
      self.timer = setInterval(function() {
        if (self.didScroll) {
          self.didScroll = false
          self.checkPosition()
        }
      }, 250)
    },
    clearTimer: function() {
      clearInterval(this.timer)
      this.$window.off('scroll.singlePageNav')
      this.didScroll = false
    },
    checkPosition: function() {
      var scrollPos = this.$window.scrollTop()
      var currentSection = this.getCurrentSection(scrollPos)
      if (currentSection !== null) {
        this.setActiveLink(currentSection)
      }
    },
    getCoords: function($elem) {
      return {
        top: Math.round($elem.offset().top) - this.options.offset
      }
    },
    setActiveLink: function(href) {
      var $activeLink = this.$container.find("a[href$='" + href + "']")
      if (!$activeLink.hasClass(this.options.currentClass)) {
        this.$links.removeClass(this.options.currentClass)
        $activeLink.addClass(this.options.currentClass)
        if ($('.scroll-nav  a').hasClass('act-link'))
          $('.scroll-nav  a.act-link').each(function() {
            var a = $(this).data('bgscr'),
              b = $(this).data('bgtex')
            var ua = window.navigator.userAgent
            var msie = ua.indexOf('MSIE ')
            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
              $('.bg-title span').html(b)
            } else {
              $('.bg-title span')
                .html(b)
                .shuffleLetters({})
            }
            $('.column-image').addClass('scrbg')
            setTimeout(function() {
              $('.bg-scroll').css('background-image', 'url(' + a + ')')
              $('.column-image').removeClass('scrbg')
            }, 700)
          })
      }
    },
    getCurrentSection: function(scrollPos) {
      var i, hash, coords, section
      for (i = 0; i < this.$links.length; i++) {
        hash = this.$links[i].hash
        if ($(hash).length) {
          coords = this.getCoords($(hash))
          if (scrollPos >= coords.top - this.options.threshold) {
            section = hash
          }
        }
      }
      return section || (this.$links.length === 0 ? null : this.$links[0].hash)
    }
  }
  $.fn.singlePageNav = function(options) {
    return this.each(function() {
      var singlePageNav = Object.create(SinglePageNav)
      singlePageNav.init(options, this)
    })
  }
  $.fn.singlePageNav.defaults = {
    offset: 0,
    threshold: 120,
    speed: 400,
    currentClass: 'current',
    easing: 'swing',
    updateHash: false,
    filter: '',
    onComplete: false,
    beforeStart: false
  }
})(jQuery, window, document)

/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */
;(function(e) {
  function t(e) {
    var t = ''
    if (e == 'lowerLetter') {
      t = 'abcdefghijklmnopqrstuvwxyz0123456789'
    } else if (e == 'upperLetter') {
      t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    } else if (e == 'symbol') {
      t = '0123456789'
    }
    var n = t.split('')
    return n[Math.floor(Math.random() * n.length)]
  }
  e.fn.shuffleLetters = function(n) {
    var r = e.extend(
      {
        step: 8,
        fps: 25,
        text: '',
        callback: function() {}
      },
      n
    )
    return this.each(function() {
      var n = e(this),
        i = ''
      if (n.data('animated')) {
        return true
      }
      n.data('animated', true)
      if (r.text) {
        i = r.text.split('')
      } else {
        i = n.text().split('')
      }
      var s = [],
        o = []
      for (var u = 0; u < i.length; u++) {
        var a = i[u]
        if (a == ' ') {
          s[u] = 'space'
          continue
        } else if (/[a-z]/.test(a)) {
          s[u] = 'lowerLetter'
        } else if (/[A-Z]/.test(a)) {
          s[u] = 'upperLetter'
        } else {
          s[u] = 'symbol'
        }
        o.push(u)
      }
      n.html('')
      ;(function f(e) {
        var u,
          a = o.length,
          l = i.slice(0)
        if (e > a) {
          n.data('animated', false)
          r.callback(n)
          return
        }
        for (u = Math.max(e, 0); u < a; u++) {
          if (u < e + r.step) {
            l[o[u]] = t(s[o[u]])
          } else {
            l[o[u]] = ''
          }
        }
        n.text(l.join(''))
        setTimeout(function() {
          f(e + 1)
        }, 1e3 / r.fps)
      })(-r.step)
    })
  }
})(jQuery)
;(function(a) {
  a.isScrollToFixed = function(b) {
    return !!a(b).data('ScrollToFixed')
  }
  a.ScrollToFixed = function(d, i) {
    var l = this
    l.$el = a(d)
    l.el = d
    l.$el.data('ScrollToFixed', l)
    var c = false
    var G = l.$el
    var H
    var E
    var e
    var y
    var D = 0
    var q = 0
    var j = -1
    var f = -1
    var t = null
    var z
    var g

    function u() {
      G.trigger('preUnfixed.ScrollToFixed')
      k()
      G.trigger('unfixed.ScrollToFixed')
      f = -1
      D = G.offset().top
      q = G.offset().left
      if (l.options.offsets) {
        q += G.offset().left - G.position().left
      }
      if (j == -1) {
        j = q
      }
      H = G.css('position')
      c = true
      if (l.options.bottom != -1) {
        G.trigger('preFixed.ScrollToFixed')
        w()
        G.trigger('fixed.ScrollToFixed')
      }
    }

    function n() {
      var I = l.options.limit
      if (!I) {
        return 0
      }
      if (typeof I === 'function') {
        return I.apply(G)
      }
      return I
    }

    function p() {
      return H === 'fixed'
    }

    function x() {
      return H === 'absolute'
    }

    function h() {
      return !(p() || x())
    }

    function w() {
      if (!p()) {
        t.css({
          display: G.css('display'),
          width: G.outerWidth(true),
          height: G.outerHeight(true),
          float: G.css('float')
        })
        cssOptions = {
          'z-index': l.options.zIndex,
          position: 'fixed',
          top: l.options.bottom == -1 ? s() : '',
          bottom: l.options.bottom == -1 ? '' : l.options.bottom,
          'margin-left': '0px'
        }
        if (!l.options.dontSetWidth) {
          cssOptions.width = G.width()
        }
        G.css(cssOptions)
        G.addClass(l.options.baseClassName)
        if (l.options.className) {
          G.addClass(l.options.className)
        }
        H = 'fixed'
      }
    }

    function b() {
      var J = n()
      var I = q
      if (l.options.removeOffsets) {
        I = ''
        J = J - D
      }
      cssOptions = {
        position: 'absolute',
        top: J,
        left: I,
        'margin-left': '0px',
        bottom: ''
      }
      if (!l.options.dontSetWidth) {
        cssOptions.width = G.width()
      }
      G.css(cssOptions)
      H = 'absolute'
    }

    function k() {
      if (!h()) {
        f = -1
        t.css('display', 'none')
        G.css({
          'z-index': y,
          width: '',
          position: E,
          left: '',
          top: e,
          'margin-left': ''
        })
        G.removeClass('scroll-to-fixed-fixed')
        if (l.options.className) {
          G.removeClass(l.options.className)
        }
        H = null
      }
    }

    function v(I) {
      if (I != f) {
        G.css('left', q - I)
        f = I
      }
    }

    function s() {
      var I = l.options.marginTop
      if (!I) {
        return 0
      }
      if (typeof I === 'function') {
        return I.apply(G)
      }
      return I
    }

    function A() {
      if (!a.isScrollToFixed(G)) {
        return
      }
      var K = c
      if (!c) {
        u()
      } else {
        if (h()) {
          D = G.offset().top
          q = G.offset().left
        }
      }
      var I = a(window).scrollLeft()
      var L = a(window).scrollTop()
      var J = n()
      if (l.options.minWidth && a(window).width() < l.options.minWidth) {
        if (!h() || !K) {
          o()
          G.trigger('preUnfixed.ScrollToFixed')
          k()
          G.trigger('unfixed.ScrollToFixed')
        }
      } else {
        if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
          if (!h() || !K) {
            o()
            G.trigger('preUnfixed.ScrollToFixed')
            k()
            G.trigger('unfixed.ScrollToFixed')
          }
        } else {
          if (l.options.bottom == -1) {
            if (J > 0 && L >= J - s()) {
              if (!x() || !K) {
                o()
                G.trigger('preAbsolute.ScrollToFixed')
                b()
                G.trigger('unfixed.ScrollToFixed')
              }
            } else {
              if (L >= D - s()) {
                if (!p() || !K) {
                  o()
                  G.trigger('preFixed.ScrollToFixed')
                  w()
                  f = -1
                  G.trigger('fixed.ScrollToFixed')
                }
                v(I)
              } else {
                if (!h() || !K) {
                  o()
                  G.trigger('preUnfixed.ScrollToFixed')
                  k()
                  G.trigger('unfixed.ScrollToFixed')
                }
              }
            }
          } else {
            if (J > 0) {
              if (
                L + a(window).height() - G.outerHeight(true) >=
                J - (s() || -m())
              ) {
                if (p()) {
                  o()
                  G.trigger('preUnfixed.ScrollToFixed')
                  if (E === 'absolute') {
                    b()
                  } else {
                    k()
                  }
                  G.trigger('unfixed.ScrollToFixed')
                }
              } else {
                if (!p()) {
                  o()
                  G.trigger('preFixed.ScrollToFixed')
                  w()
                }
                v(I)
                G.trigger('fixed.ScrollToFixed')
              }
            } else {
              v(I)
            }
          }
        }
      }
    }

    function m() {
      if (!l.options.bottom) {
        return 0
      }
      return l.options.bottom
    }

    function o() {
      var I = G.css('position')
      if (I == 'absolute') {
        G.trigger('postAbsolute.ScrollToFixed')
      } else {
        if (I == 'fixed') {
          G.trigger('postFixed.ScrollToFixed')
        } else {
          G.trigger('postUnfixed.ScrollToFixed')
        }
      }
    }
    var C = function(I) {
      if (G.is(':visible')) {
        c = false
        A()
      }
    }
    var F = function(I) {
      !!window.requestAnimationFrame ? requestAnimationFrame(A) : A()
    }
    var B = function() {
      var J = document.body
      if (document.createElement && J && J.appendChild && J.removeChild) {
        var L = document.createElement('div')
        if (!L.getBoundingClientRect) {
          return null
        }
        L.innerHTML = 'x'
        L.style.cssText = 'position:fixed;top:100px;'
        J.appendChild(L)
        var M = J.style.height,
          N = J.scrollTop
        J.style.height = '3000px'
        J.scrollTop = 500
        var I = L.getBoundingClientRect().top
        J.style.height = M
        var K = I === 100
        J.removeChild(L)
        J.scrollTop = N
        return K
      }
      return null
    }
    var r = function(I) {
      I = I || window.event
      if (I.preventDefault) {
        I.preventDefault()
      }
      I.returnValue = false
    }
    l.init = function() {
      l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i)
      y = G.css('z-index')
      l.$el.css('z-index', l.options.zIndex)
      t = a('<div />')
      H = G.css('position')
      E = G.css('position')
      e = G.css('top')
      if (h()) {
        l.$el.after(t)
      }
      a(window).bind('resize.ScrollToFixed', C)
      a(window).bind('scroll.ScrollToFixed', F)
      if ('ontouchmove' in window) {
        a(window).bind('touchmove.ScrollToFixed', A)
      }
      if (l.options.preFixed) {
        G.bind('preFixed.ScrollToFixed', l.options.preFixed)
      }
      if (l.options.postFixed) {
        G.bind('postFixed.ScrollToFixed', l.options.postFixed)
      }
      if (l.options.preUnfixed) {
        G.bind('preUnfixed.ScrollToFixed', l.options.preUnfixed)
      }
      if (l.options.postUnfixed) {
        G.bind('postUnfixed.ScrollToFixed', l.options.postUnfixed)
      }
      if (l.options.preAbsolute) {
        G.bind('preAbsolute.ScrollToFixed', l.options.preAbsolute)
      }
      if (l.options.postAbsolute) {
        G.bind('postAbsolute.ScrollToFixed', l.options.postAbsolute)
      }
      if (l.options.fixed) {
        G.bind('fixed.ScrollToFixed', l.options.fixed)
      }
      if (l.options.unfixed) {
        G.bind('unfixed.ScrollToFixed', l.options.unfixed)
      }
      if (l.options.spacerClass) {
        t.addClass(l.options.spacerClass)
      }
      G.bind('resize.ScrollToFixed', function() {
        t.height(G.height())
      })
      G.bind('scroll.ScrollToFixed', function() {
        G.trigger('preUnfixed.ScrollToFixed')
        k()
        G.trigger('unfixed.ScrollToFixed')
        A()
      })
      G.bind('detach.ScrollToFixed', function(I) {
        r(I)
        G.trigger('preUnfixed.ScrollToFixed')
        k()
        G.trigger('unfixed.ScrollToFixed')
        a(window).unbind('resize.ScrollToFixed', C)
        a(window).unbind('scroll.ScrollToFixed', F)
        G.unbind('.ScrollToFixed')
        t.remove()
        l.$el.removeData('ScrollToFixed')
      })
      C()
    }
    l.init()
  }
  a.ScrollToFixed.defaultOptions = {
    marginTop: 0,
    limit: 0,
    bottom: -1,
    zIndex: 1000,
    baseClassName: 'scroll-to-fixed-fixed'
  }
  a.fn.scrollToFixed = function(b) {
    return this.each(function() {
      new a.ScrollToFixed(this, b)
    })
  }
})(jQuery)

/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
// Number Counter
;(function($) {
  $.fn.countTo = function(options) {
    options = options || {}
    return $(this).each(function() {
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data('from'),
          to: $(this).data('num'),
          speed: $(this).data('speed'),
          refreshInterval: $(this).data('refresh-interval'),
          decimals: $(this).data('decimals')
        },
        options
      )
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {}
      $self.data('countTo', data)
      if (data.interval) {
        clearInterval(data.interval)
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval)
      render(value)

      function updateTimer() {
        value += increment
        loopCount++
        render(value)
        if (typeof settings.onUpdate == 'function') {
          settings.onUpdate.call(self, value)
        }
        if (loopCount >= loops) {
          $self.removeData('countTo')
          clearInterval(data.interval)
          value = settings.to
          if (typeof settings.onComplete == 'function') {
            settings.onComplete.call(self, value)
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings)
        $self.text(formattedValue)
      }
    })
  }
  $.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 3000,
    refreshInterval: 100,
    decimals: 0,
    formatter: formatter,
    onUpdate: null,
    onComplete: null
  }

  function formatter(value, settings) {
    return value.toFixed(settings.decimals)
  }
})(jQuery)
;(function($) {
  $.fn.countToD = function(options) {
    options = options || {}
    return $(this).each(function() {
      var settings = $.extend(
        {},
        $.fn.countToD.defaults,
        {
          from: $(this).data('from'),
          to: $(this).data('num'),
          speed: $(this).data('speed'),
          refreshInterval: $(this).data('refresh-interval'),
          decimals: $(this).data('decimals')
        },
        options
      )
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countToD') || {}
      $self.data('countToD', data)
      if (data.interval) {
        clearInterval(data.interval)
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval)
      render(value)

      function updateTimer() {
        value += increment
        loopCount++
        render(value)
        if (typeof settings.onUpdate == 'function') {
          settings.onUpdate.call(self, value)
        }
        if (loopCount >= loops) {
          $self.removeData('countTo')
          clearInterval(data.interval)
          value = settings.to
          if (typeof settings.onComplete == 'function') {
            settings.onComplete.call(self, value)
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings)
        $self.text(formattedValue)
      }
    })
  }
  $.fn.countToD.defaults = {
    from: 0,
    to: 0,
    speed: 3000,
    refreshInterval: 100,
    decimals: 1,
    formatter: formatter,
    onUpdate: null,
    onComplete: null
  }

  function formatter(value, settings) {
    return value.toFixed(settings.decimals)
  }
})(jQuery)

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
//(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
