(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Sweetalert2 = t();
})(this, function() {
  "use strict";
  function e(e2) {
    var t2 = function e3() {
      for (var t3 = arguments.length, n2 = Array(t3), o2 = 0; o2 < t3; o2++) n2[o2] = arguments[o2];
      return this instanceof e3 ? void Object.getPrototypeOf(e3).apply(this, n2) : new (Function.prototype.bind.apply(e3, [null].concat(n2)))();
    };
    return t2.prototype = s(Object.create(e2.prototype), { constructor: t2 }), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t2, e2) : t2.__proto__ = e2, t2;
  }
  function t() {
    var e2 = Ae.innerParams.get(this), t2 = Ae.domCache.get(this);
    e2.showConfirmButton || (V(t2.confirmButton), !e2.showCancelButton && V(t2.actions)), O([t2.popup, t2.actions], k.loading), t2.popup.removeAttribute("aria-busy"), t2.popup.removeAttribute("data-loading"), t2.confirmButton.disabled = false, t2.cancelButton.disabled = false;
  }
  function n(e2) {
    e2.inputValidator || Object.keys(Ee).forEach(function(t3) {
      e2.input === t3 && (e2.inputValidator = e2.expectRejections ? Ee[t3] : Oe.adaptInputValidator(Ee[t3]));
    }), e2.target && ("string" != typeof e2.target || document.querySelector(e2.target)) && ("string" == typeof e2.target || e2.target.appendChild) || (g('Target parameter is not valid, defaulting to "body"'), e2.target = "body");
    var t2, n2 = N(), o2 = "string" == typeof e2.target ? document.querySelector(e2.target) : e2.target;
    t2 = n2 && o2 && n2.parentNode !== o2.parentNode ? oe(e2) : n2 || oe(e2), e2.width && (t2.style.width = "number" == typeof e2.width ? e2.width + "px" : e2.width), e2.padding && (t2.style.padding = "number" == typeof e2.padding ? e2.padding + "px" : e2.padding), e2.background && (t2.style.background = e2.background);
    for (var a2 = window.getComputedStyle(t2).getPropertyValue("background-color"), r2 = t2.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), s2 = 0; s2 < r2.length; s2++) r2[s2].style.backgroundColor = a2;
    var i2 = M(), l2 = W(), d2 = U().querySelector("#" + k.content), u2 = J(), c2 = Q(), p2 = Y(), m2 = G(), f2 = X();
    if (e2.titleText ? l2.innerText = e2.titleText : e2.title && (l2.innerHTML = e2.title.split("\n").join("<br />")), "string" == typeof e2.backdrop ? M().style.background = e2.backdrop : !e2.backdrop && L([document.documentElement, document.body], k["no-backdrop"]), e2.html ? ie(e2.html, d2) : e2.text ? (d2.textContent = e2.text, T(d2)) : V(d2), e2.position in k ? L(i2, k[e2.position]) : (g('The "position" parameter is not valid, defaulting to "center"'), L(i2, k.center)), e2.grow && "string" == typeof e2.grow) {
      var b2 = "grow-" + e2.grow;
      b2 in k && L(i2, k[b2]);
    }
    "function" == typeof e2.animation && (e2.animation = e2.animation.call()), e2.showCloseButton ? (m2.setAttribute("aria-label", e2.closeButtonAriaLabel), T(m2)) : V(m2), t2.className = k.popup, e2.toast ? (L([document.documentElement, document.body], k["toast-shown"]), L(t2, k.toast)) : L(t2, k.modal), e2.customClass && L(t2, e2.customClass);
    var y2 = z(), v2 = parseInt(null === e2.currentProgressStep ? Oe.getQueueStep() : e2.currentProgressStep, 10);
    e2.progressSteps && e2.progressSteps.length ? (T(y2), q(y2), v2 >= e2.progressSteps.length && g("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), e2.progressSteps.forEach(function(t3, n3) {
      var o3 = document.createElement("li");
      if (L(o3, k.progresscircle), o3.innerHTML = t3, n3 === v2 && L(o3, k.activeprogressstep), y2.appendChild(o3), n3 !== e2.progressSteps.length - 1) {
        var i3 = document.createElement("li");
        L(i3, k.progressline), e2.progressStepsDistance && (i3.style.width = e2.progressStepsDistance), y2.appendChild(i3);
      }
    })) : V(y2);
    for (var w2 = H(), C2 = 0; C2 < w2.length; C2++) V(w2[C2]);
    if (e2.type) {
      var x2 = false;
      for (var A2 in B) if (e2.type === A2) {
        x2 = true;
        break;
      }
      if (!x2) return h("Unknown alert type: " + e2.type), false;
      var E2 = t2.querySelector("." + k.icon + "." + B[e2.type]);
      T(E2), e2.animation && L(E2, "swal2-animate-" + e2.type + "-icon");
    }
    var S2 = K();
    if (e2.imageUrl ? (S2.setAttribute("src", e2.imageUrl), S2.setAttribute("alt", e2.imageAlt), T(S2), e2.imageWidth ? S2.setAttribute("width", e2.imageWidth) : S2.removeAttribute("width"), e2.imageHeight ? S2.setAttribute("height", e2.imageHeight) : S2.removeAttribute("height"), S2.className = k.image, e2.imageClass && L(S2, e2.imageClass)) : V(S2), e2.showCancelButton ? p2.style.display = "inline-block" : V(p2), e2.showConfirmButton ? j(c2, "display") : V(c2), e2.showConfirmButton || e2.showCancelButton ? T(u2) : V(u2), c2.innerHTML = e2.confirmButtonText, p2.innerHTML = e2.cancelButtonText, c2.setAttribute("aria-label", e2.confirmButtonAriaLabel), p2.setAttribute("aria-label", e2.cancelButtonAriaLabel), c2.className = k.confirm, L(c2, e2.confirmButtonClass), p2.className = k.cancel, L(p2, e2.cancelButtonClass), e2.buttonsStyling) {
      L([c2, p2], k.styled), e2.confirmButtonColor && (c2.style.backgroundColor = e2.confirmButtonColor), e2.cancelButtonColor && (p2.style.backgroundColor = e2.cancelButtonColor);
      var P2 = window.getComputedStyle(c2).getPropertyValue("background-color");
      c2.style.borderLeftColor = P2, c2.style.borderRightColor = P2;
    } else O([c2, p2], k.styled), c2.style.backgroundColor = c2.style.borderLeftColor = c2.style.borderRightColor = "", p2.style.backgroundColor = p2.style.borderLeftColor = p2.style.borderRightColor = "";
    ie(e2.footer, f2), true === e2.animation ? O(t2, k.noanimation) : L(t2, k.noanimation), e2.showLoaderOnConfirm && !e2.preConfirm && g("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
  }
  function o() {
    if ("undefined" != typeof window) {
      "undefined" == typeof Promise && h("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
      for (var e2 = arguments.length, t2 = Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
      if ("undefined" == typeof t2[0]) return h("SweetAlert2 expects at least 1 attribute!"), false;
      Le = this;
      var o2 = Object.freeze(this.constructor.argsToParams(t2));
      Object.defineProperties(this, { params: { value: o2, writable: false, enumerable: true } });
      var i2 = this._main(this.params);
      Ae.promise.set(this, i2);
    }
  }
  var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, i = function(e2, t2) {
    if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }, r = /* @__PURE__ */ (function() {
    function e2(e3, t2) {
      for (var n2, o2 = 0; o2 < t2.length; o2++) n2 = t2[o2], n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
    }
    return function(t2, n2, o2) {
      return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
    };
  })(), s = Object.assign || function(e2) {
    for (var t2, n2 = 1; n2 < arguments.length; n2++) for (var o2 in t2 = arguments[n2], t2) Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
    return e2;
  }, l = function e2(t2, n2, o2) {
    null === t2 && (t2 = Function.prototype);
    var i2 = Object.getOwnPropertyDescriptor(t2, n2);
    if (void 0 === i2) {
      var a2 = Object.getPrototypeOf(t2);
      return null === a2 ? void 0 : e2(a2, n2, o2);
    }
    if ("value" in i2) return i2.value;
    var r2 = i2.get;
    return void 0 === r2 ? void 0 : r2.call(o2);
  }, d = function(e2, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
    e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
  }, u = function(e2, t2) {
    if (!e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t2 && ("object" == typeof t2 || "function" == typeof t2) ? t2 : e2;
  }, c = /* @__PURE__ */ (function() {
    function e2(e3, t2) {
      var n2 = [], o2 = true, i2 = false, a2 = void 0;
      try {
        for (var r2, s2 = e3[Symbol.iterator](); !(o2 = (r2 = s2.next()).done) && (n2.push(r2.value), !(t2 && n2.length === t2)); o2 = true) ;
      } catch (e4) {
        i2 = true, a2 = e4;
      } finally {
        try {
          !o2 && s2["return"] && s2["return"]();
        } finally {
          if (i2) throw a2;
        }
      }
      return n2;
    }
    return function(t2, n2) {
      if (Array.isArray(t2)) return t2;
      if (Symbol.iterator in Object(t2)) return e2(t2, n2);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  })(), p = "SweetAlert2:", m = function(e2) {
    for (var t2 = [], n2 = 0; n2 < e2.length; n2++) -1 === t2.indexOf(e2[n2]) && t2.push(e2[n2]);
    return t2;
  }, f = function(e2) {
    var t2 = [];
    return "undefined" != typeof Map && e2 instanceof Map ? e2.forEach(function(e3, n2) {
      t2.push([n2, e3]);
    }) : Object.keys(e2).forEach(function(n2) {
      t2.push([n2, e2[n2]]);
    }), t2;
  }, g = function(e2) {
    console.warn(p + " " + e2);
  }, h = function(e2) {
    console.error(p + " " + e2);
  }, b = [], y = function(e2) {
    -1 !== b.indexOf(e2) || (b.push(e2), g(e2));
  }, v = function(e2) {
    return "function" == typeof e2 ? e2() : e2;
  }, w = function(e2) {
    return "object" === ("undefined" == typeof e2 ? "undefined" : a(e2)) && "function" == typeof e2.then;
  }, C = Object.freeze({ cancel: "cancel", backdrop: "overlay", close: "close", esc: "esc", timer: "timer" }), x = function(e2) {
    var t2 = {};
    for (var n2 in e2) t2[e2[n2]] = "swal2-" + e2[n2];
    return t2;
  }, k = x(["container", "shown", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "icon-text", "image", "input", "has-input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen"]), B = x(["success", "warning", "info", "question", "templates.error"]), A = { previousActiveElement: null, previousBodyPadding: null }, E = function(e2, t2) {
    return !!e2.classList && e2.classList.contains(t2);
  }, S = function(e2) {
    if (e2.focus(), "file" !== e2.type) {
      var t2 = e2.value;
      e2.value = "", e2.value = t2;
    }
  }, P = function(e2, t2, n2) {
    e2 && t2 && ("string" == typeof t2 && (t2 = t2.split(/\s+/).filter(Boolean)), t2.forEach(function(t3) {
      e2.forEach ? e2.forEach(function(e3) {
        n2 ? e3.classList.add(t3) : e3.classList.remove(t3);
      }) : n2 ? e2.classList.add(t3) : e2.classList.remove(t3);
    }));
  }, L = function(e2, t2) {
    P(e2, t2, true);
  }, O = function(e2, t2) {
    P(e2, t2, false);
  }, _ = function(e2, t2) {
    for (var n2 = 0; n2 < e2.childNodes.length; n2++) if (E(e2.childNodes[n2], t2)) return e2.childNodes[n2];
  }, T = function(e2) {
    e2.style.opacity = "", e2.style.display = e2.id === k.content ? "block" : "flex";
  }, V = function(e2) {
    e2.style.opacity = "", e2.style.display = "none";
  }, q = function(e2) {
    for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
  }, D = function(e2) {
    return e2 && (e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, j = function(e2, t2) {
    e2.style.removeProperty ? e2.style.removeProperty(t2) : e2.style.removeAttribute(t2);
  }, R = function() {
    if (A.previousActiveElement && A.previousActiveElement.focus) {
      var e2 = window.scrollX, t2 = window.scrollY;
      A.previousActiveElement.focus(), "undefined" != typeof e2 && "undefined" != typeof t2 && window.scrollTo(e2, t2);
    }
  }, M = function() {
    return document.body.querySelector("." + k.container);
  }, I = function(e2) {
    var t2 = M();
    return t2 ? t2.querySelector("." + e2) : null;
  }, N = function() {
    return I(k.popup);
  }, H = function() {
    var e2 = N();
    return e2.querySelectorAll("." + k.icon);
  }, W = function() {
    return I(k.title);
  }, U = function() {
    return I(k.content);
  }, K = function() {
    return I(k.image);
  }, z = function() {
    return I(k.progresssteps);
  }, F = function() {
    return I(k.validationerror);
  }, Q = function() {
    return I(k.confirm);
  }, Y = function() {
    return I(k.cancel);
  }, J = function() {
    return I(k.actions);
  }, X = function() {
    return I(k.footer);
  }, G = function() {
    return I(k.close);
  }, Z = function() {
    var e2 = Array.prototype.slice.call(N().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e3, t3) {
      return (e3 = parseInt(e3.getAttribute("tabindex")), t3 = parseInt(t3.getAttribute("tabindex")), e3 > t3) ? 1 : e3 < t3 ? -1 : 0;
    }), t2 = Array.prototype.slice.call(N().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));
    return m(e2.concat(t2));
  }, $ = function() {
    return !document.body.classList.contains(k["toast-shown"]);
  }, ee = function() {
    return document.body.classList.contains(k["toast-shown"]);
  }, te = function() {
    return "undefined" == typeof window || "undefined" == typeof document;
  }, ne = ('\n <div aria-labelledby="' + k.title + '" aria-describedby="' + k.content + '" class="' + k.popup + '" tabindex="-1">\n   <div class="' + k.header + '">\n     <ul class="' + k.progresssteps + '"></ul>\n     <div class="' + k.icon + " " + B.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + k.icon + " " + B.question + '">\n       <span class="' + k["icon-text"] + '">?</span>\n      </div>\n     <div class="' + k.icon + " " + B.warning + '">\n       <span class="' + k["icon-text"] + '">!</span>\n      </div>\n     <div class="' + k.icon + " " + B.info + '">\n       <span class="' + k["icon-text"] + '">i</span>\n      </div>\n     <div class="' + k.icon + " " + B.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + k.image + '" />\n     <h2 class="' + k.title + '" id="' + k.title + '"></h2>\n     <button type="button" class="' + k.close + '">\xD7</button>\n   </div>\n   <div class="' + k.content + '">\n     <div id="' + k.content + '"></div>\n     <input class="' + k.input + '" />\n     <input type="file" class="' + k.file + '" />\n     <div class="' + k.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + k.select + '"></select>\n     <div class="' + k.radio + '"></div>\n     <label for="' + k.checkbox + '" class="' + k.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + k.textarea + '"></textarea>\n     <div class="' + k.validationerror + '" id="' + k.validationerror + '"></div>\n   </div>\n   <div class="' + k.actions + '">\n     <button type="button" class="' + k.confirm + '">OK</button>\n     <button type="button" class="' + k.cancel + '">Cancel</button>\n   </div>\n   <div class="' + k.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""), oe = function(e2) {
    var t2 = M();
    if (t2 && (t2.parentNode.removeChild(t2), O([document.documentElement, document.body], [k["no-backdrop"], k["has-input"], k["toast-shown"]])), te()) return void h("SweetAlert2 requires document to initialize");
    var n2 = document.createElement("div");
    n2.className = k.container, n2.innerHTML = ne;
    var o2 = "string" == typeof e2.target ? document.querySelector(e2.target) : e2.target;
    o2.appendChild(n2);
    var i2 = N(), a2 = U(), r2 = _(a2, k.input), s2 = _(a2, k.file), l2 = a2.querySelector("." + k.range + " input"), d2 = a2.querySelector("." + k.range + " output"), u2 = _(a2, k.select), c2 = a2.querySelector("." + k.checkbox + " input"), p2 = _(a2, k.textarea);
    i2.setAttribute("role", e2.toast ? "alert" : "dialog"), i2.setAttribute("aria-live", e2.toast ? "polite" : "assertive"), e2.toast || i2.setAttribute("aria-modal", "true");
    var m2 = function() {
      Oe.isVisible() && Oe.resetValidationError();
    };
    return r2.oninput = m2, s2.onchange = m2, u2.onchange = m2, c2.onchange = m2, p2.oninput = m2, l2.oninput = function() {
      m2(), d2.value = l2.value;
    }, l2.onchange = function() {
      m2(), l2.nextSibling.value = l2.value;
    }, i2;
  }, ie = function(e2, t2) {
    if (!e2) return V(t2);
    if ("object" === ("undefined" == typeof e2 ? "undefined" : a(e2))) {
      if (t2.innerHTML = "", 0 in e2) for (var n2 = 0; n2 in e2; n2++) t2.appendChild(e2[n2].cloneNode(true));
      else t2.appendChild(e2.cloneNode(true));
    } else if (e2) t2.innerHTML = e2;
    else ;
    T(t2);
  }, ae = (function() {
    if (te()) return false;
    var e2 = document.createElement("div"), t2 = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
    for (var n2 in t2) if (t2.hasOwnProperty(n2) && "undefined" != typeof e2.style[n2]) return t2[n2];
    return false;
  })(), re = function() {
    var e2 = "ontouchstart" in window || navigator.msMaxTouchPoints;
    if (e2) return 0;
    var t2 = document.createElement("div");
    t2.style.width = "50px", t2.style.height = "50px", t2.style.overflow = "scroll", document.body.appendChild(t2);
    var n2 = t2.offsetWidth - t2.clientWidth;
    return document.body.removeChild(t2), n2;
  }, se = function() {
    null !== A.previousBodyPadding || document.body.scrollHeight > window.innerHeight && (A.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = re() + "px");
  }, le = function() {
    null !== A.previousBodyPadding && (document.body.style.paddingRight = A.previousBodyPadding, A.previousBodyPadding = null);
  }, de = function() {
    var e2 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (e2 && !E(document.body, k.iosfix)) {
      var t2 = document.body.scrollTop;
      document.body.style.top = -1 * t2 + "px", L(document.body, k.iosfix);
    }
  }, ue = function() {
    if (E(document.body, k.iosfix)) {
      var e2 = parseInt(document.body.style.top, 10);
      O(document.body, k.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e2;
    }
  }, ce = {}, pe = function(e2, t2) {
    var n2 = M(), o2 = N();
    if (o2) {
      null !== e2 && "function" == typeof e2 && e2(o2), O(o2, k.show), L(o2, k.hide), clearTimeout(o2.timeout), ee() || (R(), window.onkeydown = ce.previousWindowKeyDown, ce.windowOnkeydownOverridden = false);
      var i2 = function() {
        n2.parentNode && n2.parentNode.removeChild(n2), O([document.documentElement, document.body], [k.shown, k["no-backdrop"], k["has-input"], k["toast-shown"]]), $() && (le(), ue()), null !== t2 && "function" == typeof t2 && setTimeout(function() {
          t2();
        });
      };
      ae && !E(o2, k.noanimation) ? o2.addEventListener(ae, function e3() {
        o2.removeEventListener(ae, e3), E(o2, k.hide) && i2();
      }) : i2();
    }
  }, me = { title: "", titleText: "", text: "", html: "", footer: "", type: null, toast: false, customClass: "", target: "body", backdrop: true, animation: true, allowOutsideClick: true, allowEscapeKey: true, allowEnterKey: true, showConfirmButton: true, showCancelButton: false, preConfirm: null, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: null, confirmButtonClass: null, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: null, cancelButtonClass: null, buttonsStyling: true, reverseButtons: false, focusConfirm: true, focusCancel: false, showCloseButton: false, closeButtonAriaLabel: "Close this dialog", showLoaderOnConfirm: false, imageUrl: null, imageWidth: null, imageHeight: null, imageAlt: "", imageClass: null, timer: null, width: null, padding: null, background: null, input: null, inputPlaceholder: "", inputValue: "", inputOptions: {}, inputAutoTrim: true, inputClass: null, inputAttributes: {}, inputValidator: null, grow: false, position: "center", progressSteps: [], currentProgressStep: null, progressStepsDistance: null, onBeforeOpen: null, onAfterClose: null, onOpen: null, onClose: null, useRejections: false, expectRejections: false }, fe = ["useRejections", "expectRejections"], ge = function(e2) {
    return me.hasOwnProperty(e2) || "extraParams" === e2;
  }, he = function(e2) {
    return -1 !== fe.indexOf(e2);
  }, be = function(e2) {
    for (var t2 in e2) ge(t2) || g('Unknown parameter "' + t2 + '"'), he(t2) && y('The parameter "' + t2 + '" is deprecated and will be removed in the next major release.');
  }, ye = {}, ve = [], we = function(e2, t2) {
    return t2 && t2 < ve.length ? ve.splice(t2, 0, e2) : ve.push(e2);
  }, Ce = function(e2) {
    "undefined" != typeof ve[e2] && ve.splice(e2, 1);
  }, xe = function() {
    var e2 = N();
    e2 || Oe(""), e2 = N();
    var t2 = J(), n2 = Q(), o2 = Y();
    T(t2), T(n2), L([e2, t2], k.loading), n2.disabled = true, o2.disabled = true, e2.setAttribute("data-loading", true), e2.setAttribute("aria-busy", true), e2.focus();
  }, ke = Object.freeze({ isValidParameter: ge, isDeprecatedParameter: he, argsToParams: function(e2) {
    var t2 = {};
    switch (a(e2[0])) {
      case "string":
        ["title", "html", "type"].forEach(function(n2, o2) {
          void 0 !== e2[o2] && (t2[n2] = e2[o2]);
        });
        break;
      case "object":
        s(t2, e2[0]);
        break;
      default:
        return h('Unexpected type of argument! Expected "string" or "object", got ' + a(e2[0])), false;
    }
    return t2;
  }, adaptInputValidator: function(e2) {
    return function(t2, n2) {
      return e2.call(this, t2, n2).then(function() {
      }, function(e3) {
        return e3;
      });
    };
  }, close: pe, closePopup: pe, closeModal: pe, closeToast: pe, isVisible: function() {
    return !!N();
  }, clickConfirm: function() {
    return Q().click();
  }, clickCancel: function() {
    return Y().click();
  }, getPopup: N, getTitle: W, getContent: U, getImage: K, getButtonsWrapper: function() {
    return y("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), I(k.actions);
  }, getActions: J, getConfirmButton: Q, getCancelButton: Y, getFooter: X, isLoading: function() {
    return N().hasAttribute("data-loading");
  }, mixin: function(t2) {
    var n2 = this;
    return e((function(e2) {
      function n3() {
        return i(this, n3), u(this, (n3.__proto__ || Object.getPrototypeOf(n3)).apply(this, arguments));
      }
      return d(n3, e2), r(n3, [{ key: "_main", value: function(e3) {
        return l(n3.prototype.__proto__ || Object.getPrototypeOf(n3.prototype), "_main", this).call(this, s({}, t2, e3));
      } }]), n3;
    })(n2));
  }, queue: function(e2) {
    var t2 = this;
    ve = e2;
    var n2 = function() {
      ve = [], document.body.removeAttribute("data-swal2-queue-step");
    }, o2 = [];
    return new Promise(function(e3) {
      (function a2(r2, i2) {
        r2 < ve.length ? (document.body.setAttribute("data-swal2-queue-step", r2), t2(ve[r2]).then(function(t3) {
          "undefined" == typeof t3.value ? (n2(), e3({ dismiss: t3.dismiss })) : (o2.push(t3.value), a2(r2 + 1, i2));
        })) : (n2(), e3({ value: o2 }));
      })(0);
    });
  }, getQueueStep: function() {
    return document.body.getAttribute("data-swal2-queue-step");
  }, insertQueueStep: we, deleteQueueStep: Ce, showLoading: xe, enableLoading: xe, fire: function() {
    for (var e2 = this, t2 = arguments.length, n2 = Array(t2), o2 = 0; o2 < t2; o2++) n2[o2] = arguments[o2];
    return new (Function.prototype.bind.apply(e2, [null].concat(n2)))();
  } });
  if ("undefined" != typeof window && "function" != typeof window.WeakMap) {
    var Be = 0;
    window.Symbol = function(e2) {
      return "__" + e2 + "_" + Math.floor(1e9 * Math.random()) + "_" + ++Be + "__";
    }, Symbol.iterator = /* @__PURE__ */ Symbol("Symbol.iterator"), window.WeakMap = (function(e2, t2, n2) {
      function o2() {
        t2(this, e2, { value: /* @__PURE__ */ Symbol("WeakMap") });
      }
      return o2.prototype = { delete: function(t3) {
        delete t3[this[e2]];
      }, get: function(t3) {
        return t3[this[e2]];
      }, has: function(t3) {
        return n2.call(t3, this[e2]);
      }, set: function(n3, o3) {
        t2(n3, this[e2], { configurable: true, value: o3 });
      } }, o2;
    })(/* @__PURE__ */ Symbol("WeakMap"), Object.defineProperty, {}.hasOwnProperty);
  }
  var Ae = { promise: /* @__PURE__ */ new WeakMap(), innerParams: /* @__PURE__ */ new WeakMap(), domCache: /* @__PURE__ */ new WeakMap() }, Ee = { email: function(e2) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e2) ? Promise.resolve() : Promise.reject("Invalid email address");
  }, url: function(e2) {
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e2) ? Promise.resolve() : Promise.reject("Invalid URL");
  } }, Se = function(e2, t2, n2) {
    var o2 = M(), i2 = N();
    null !== t2 && "function" == typeof t2 && t2(i2), e2 ? (L(i2, k.show), L(o2, k.fade), O(i2, k.hide)) : O(i2, k.fade), T(i2), o2.style.overflowY = "hidden", ae && !E(i2, k.noanimation) ? i2.addEventListener(ae, function e3() {
      i2.removeEventListener(ae, e3), o2.style.overflowY = "auto";
    }) : o2.style.overflowY = "auto", L([document.documentElement, document.body, o2], k.shown), $() && (se(), de()), A.previousActiveElement = document.activeElement, null !== n2 && "function" == typeof n2 && setTimeout(function() {
      n2(i2);
    });
  }, Pe = Object.freeze({ hideLoading: t, disableLoading: t, getInput: function(e2) {
    var t2 = Ae.innerParams.get(this), n2 = Ae.domCache.get(this);
    return (e2 = e2 || t2.input, !e2) ? null : "select" === e2 || "textarea" === e2 || "file" === e2 ? _(n2.content, k[e2]) : "checkbox" === e2 ? n2.popup.querySelector("." + k.checkbox + " input") : "radio" === e2 ? n2.popup.querySelector("." + k.radio + " input:checked") || n2.popup.querySelector("." + k.radio + " input:first-child") : "range" === e2 ? n2.popup.querySelector("." + k.range + " input") : _(n2.content, k.input);
  }, enableButtons: function() {
    var e2 = Ae.domCache.get(this);
    e2.confirmButton.disabled = false, e2.cancelButton.disabled = false;
  }, disableButtons: function() {
    var e2 = Ae.domCache.get(this);
    e2.confirmButton.disabled = true, e2.cancelButton.disabled = true;
  }, enableConfirmButton: function() {
    var e2 = Ae.domCache.get(this);
    e2.confirmButton.disabled = false;
  }, disableConfirmButton: function() {
    var e2 = Ae.domCache.get(this);
    e2.confirmButton.disabled = true;
  }, enableInput: function() {
    var e2 = this.getInput();
    if (!e2) return false;
    if ("radio" === e2.type) for (var t2 = e2.parentNode.parentNode, n2 = t2.querySelectorAll("input"), o2 = 0; o2 < n2.length; o2++) n2[o2].disabled = false;
    else e2.disabled = false;
  }, disableInput: function() {
    var e2 = this.getInput();
    if (!e2) return false;
    if (e2 && "radio" === e2.type) for (var t2 = e2.parentNode.parentNode, n2 = t2.querySelectorAll("input"), o2 = 0; o2 < n2.length; o2++) n2[o2].disabled = true;
    else e2.disabled = true;
  }, showValidationError: function(e2) {
    var t2 = Ae.domCache.get(this);
    t2.validationError.innerHTML = e2;
    var n2 = window.getComputedStyle(t2.popup);
    t2.validationError.style.marginLeft = "-" + n2.getPropertyValue("padding-left"), t2.validationError.style.marginRight = "-" + n2.getPropertyValue("padding-right"), T(t2.validationError);
    var o2 = this.getInput();
    o2 && (o2.setAttribute("aria-invalid", true), o2.setAttribute("aria-describedBy", k.validationerror), S(o2), L(o2, k.inputerror));
  }, resetValidationError: function() {
    var e2 = Ae.domCache.get(this);
    e2.validationError && V(e2.validationError);
    var t2 = this.getInput();
    t2 && (t2.removeAttribute("aria-invalid"), t2.removeAttribute("aria-describedBy"), O(t2, k.inputerror));
  }, _main: function(e2) {
    var t2 = this;
    be(e2);
    var o2 = s({}, me, e2);
    n(o2), Object.freeze(o2), Ae.innerParams.set(this, o2);
    var r2 = { popup: N(), container: M(), content: U(), actions: J(), confirmButton: Q(), cancelButton: Y(), closeButton: G(), validationError: F(), progressSteps: z() };
    Ae.domCache.set(this, r2);
    var l2 = this.constructor;
    return new Promise(function(e3, n2) {
      var s2 = function(t3) {
        l2.closePopup(o2.onClose, o2.onAfterClose), o2.useRejections ? e3(t3) : e3({ value: t3 });
      }, d2 = function(t3) {
        l2.closePopup(o2.onClose, o2.onAfterClose), o2.useRejections ? n2(t3) : e3({ dismiss: t3 });
      }, u2 = function(e4) {
        l2.closePopup(o2.onClose, o2.onAfterClose), n2(e4);
      };
      o2.timer && (r2.popup.timeout = setTimeout(function() {
        return d2("timer");
      }, o2.timer));
      var p2 = function() {
        var e4 = t2.getInput();
        if (!e4) return null;
        switch (o2.input) {
          case "checkbox":
            return e4.checked ? 1 : 0;
          case "radio":
            return e4.checked ? e4.value : null;
          case "file":
            return e4.files.length ? e4.files[0] : null;
          default:
            return o2.inputAutoTrim ? e4.value.trim() : e4.value;
        }
      };
      o2.input && setTimeout(function() {
        var e4 = t2.getInput();
        e4 && S(e4);
      }, 0);
      for (var m2 = function(e4) {
        if (o2.showLoaderOnConfirm && l2.showLoading(), o2.preConfirm) {
          t2.resetValidationError();
          var n3 = Promise.resolve().then(function() {
            return o2.preConfirm(e4, o2.extraParams);
          });
          o2.expectRejections ? n3.then(function(t3) {
            return s2(t3 || e4);
          }, function(e5) {
            t2.hideLoading(), e5 && t2.showValidationError(e5);
          }) : n3.then(function(n4) {
            D(r2.validationError) || false === n4 ? t2.hideLoading() : s2(n4 || e4);
          }, function(e5) {
            return u2(e5);
          });
        } else s2(e4);
      }, g2 = function(n3) {
        var i3 = n3 || window.event, e4 = i3.target || i3.srcElement, a2 = r2.confirmButton, s3 = r2.cancelButton, c2 = a2 && (a2 === e4 || a2.contains(e4)), f2 = s3 && (s3 === e4 || s3.contains(e4));
        switch (i3.type) {
          case "click":
            if (!(c2 && l2.isVisible())) f2 && l2.isVisible() && (t2.disableButtons(), d2(l2.DismissReason.cancel));
            else if (t2.disableButtons(), o2.input) {
              var g3 = p2();
              if (o2.inputValidator) {
                t2.disableInput();
                var h2 = Promise.resolve().then(function() {
                  return o2.inputValidator(g3, o2.extraParams);
                });
                o2.expectRejections ? h2.then(function() {
                  t2.enableButtons(), t2.enableInput(), m2(g3);
                }, function(e5) {
                  t2.enableButtons(), t2.enableInput(), e5 && t2.showValidationError(e5);
                }) : h2.then(function(e5) {
                  t2.enableButtons(), t2.enableInput(), e5 ? t2.showValidationError(e5) : m2(g3);
                }, function(e5) {
                  return u2(e5);
                });
              } else m2(g3);
            } else m2(true);
            break;
          default:
        }
      }, b2 = r2.popup.querySelectorAll("button"), y2 = 0; y2 < b2.length; y2++) b2[y2].onclick = g2, b2[y2].onmouseover = g2, b2[y2].onmouseout = g2, b2[y2].onmousedown = g2;
      if (r2.closeButton.onclick = function() {
        d2(l2.DismissReason.close);
      }, o2.toast) r2.popup.onclick = function() {
        o2.showConfirmButton || o2.showCancelButton || o2.showCloseButton || o2.input || (l2.closePopup(o2.onClose, o2.onAfterClose), d2(l2.DismissReason.close));
      };
      else {
        var i2 = false;
        r2.popup.onmousedown = function() {
          r2.container.onmouseup = function(t3) {
            r2.container.onmouseup = void 0, t3.target === r2.container && (i2 = true);
          };
        }, r2.container.onmousedown = function() {
          r2.popup.onmouseup = function(t3) {
            r2.popup.onmouseup = void 0, (t3.target === r2.popup || r2.popup.contains(t3.target)) && (i2 = true);
          };
        }, r2.container.onclick = function(t3) {
          return i2 ? void (i2 = false) : void (t3.target !== r2.container || v(o2.allowOutsideClick) && d2(l2.DismissReason.backdrop));
        };
      }
      o2.reverseButtons ? r2.confirmButton.parentNode.insertBefore(r2.cancelButton, r2.confirmButton) : r2.confirmButton.parentNode.insertBefore(r2.confirmButton, r2.cancelButton);
      var C2 = function(e4, t3) {
        for (var n3 = Z(o2.focusCancel), i3 = 0; i3 < n3.length; i3++) {
          e4 += t3, e4 === n3.length ? e4 = 0 : -1 === e4 && (e4 = n3.length - 1);
          var a2 = n3[e4];
          if (D(a2)) return a2.focus();
        }
      };
      o2.toast && ce.windowOnkeydownOverridden && (window.onkeydown = ce.previousWindowKeyDown, ce.windowOnkeydownOverridden = false), o2.toast || ce.windowOnkeydownOverridden || (ce.previousWindowKeyDown = window.onkeydown, ce.windowOnkeydownOverridden = true, window.onkeydown = function(n3) {
        var i3 = n3 || window.event;
        if ("Enter" === i3.key && !i3.isComposing) {
          if (i3.target === t2.getInput()) {
            if (-1 !== ["textarea", "file"].indexOf(o2.input)) return;
            l2.clickConfirm(), i3.preventDefault();
          }
        } else if ("Tab" === i3.key) {
          for (var e4 = i3.target || i3.srcElement, a2 = Z(o2.focusCancel), s3 = -1, u3 = 0; u3 < a2.length; u3++) if (e4 === a2[u3]) {
            s3 = u3;
            break;
          }
          i3.shiftKey ? C2(s3, -1) : C2(s3, 1), i3.stopPropagation(), i3.preventDefault();
        } else -1 === ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(i3.key) ? ("Escape" === i3.key || "Esc" === i3.key) && true === v(o2.allowEscapeKey) && d2(l2.DismissReason.esc) : document.activeElement === r2.confirmButton && D(r2.cancelButton) ? r2.cancelButton.focus() : document.activeElement === r2.cancelButton && D(r2.confirmButton) && r2.confirmButton.focus();
      }), t2.enableButtons(), t2.hideLoading(), t2.resetValidationError(), o2.input && L(document.body, k["has-input"]);
      for (var x2 = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], B2 = void 0, A2 = 0; A2 < x2.length; A2++) {
        var E2 = k[x2[A2]], P2 = _(r2.content, E2);
        if (B2 = t2.getInput(x2[A2]), B2) {
          for (var O2 in B2.attributes) if (B2.attributes.hasOwnProperty(O2)) {
            var q2 = B2.attributes[O2].name;
            "type" !== q2 && "value" !== q2 && B2.removeAttribute(q2);
          }
          for (var j2 in o2.inputAttributes) B2.setAttribute(j2, o2.inputAttributes[j2]);
        }
        P2.className = E2, o2.inputClass && L(P2, o2.inputClass), V(P2);
      }
      var R2;
      switch (o2.input) {
        case "text":
        case "email":
        case "password":
        case "number":
        case "tel":
        case "url":
          B2 = _(r2.content, k.input), B2.value = o2.inputValue, B2.placeholder = o2.inputPlaceholder, B2.type = o2.input, T(B2);
          break;
        case "file":
          B2 = _(r2.content, k.file), B2.placeholder = o2.inputPlaceholder, B2.type = o2.input, T(B2);
          break;
        case "range":
          var M2 = _(r2.content, k.range), I2 = M2.querySelector("input"), N2 = M2.querySelector("output");
          I2.value = o2.inputValue, I2.type = o2.input, N2.value = o2.inputValue, T(M2);
          break;
        case "select":
          var H2 = _(r2.content, k.select);
          if (H2.innerHTML = "", o2.inputPlaceholder) {
            var W2 = document.createElement("option");
            W2.innerHTML = o2.inputPlaceholder, W2.value = "", W2.disabled = true, W2.selected = true, H2.appendChild(W2);
          }
          R2 = function(e4) {
            e4.forEach(function(e5) {
              var t3 = c(e5, 2), n3 = t3[0], i3 = t3[1], a2 = document.createElement("option");
              a2.value = n3, a2.innerHTML = i3, o2.inputValue.toString() === n3.toString() && (a2.selected = true), H2.appendChild(a2);
            }), T(H2), H2.focus();
          };
          break;
        case "radio":
          var U2 = _(r2.content, k.radio);
          U2.innerHTML = "", R2 = function(e4) {
            e4.forEach(function(e5) {
              var t4 = c(e5, 2), n3 = t4[0], i3 = t4[1], a2 = document.createElement("input"), r3 = document.createElement("label");
              a2.type = "radio", a2.name = k.radio, a2.value = n3, o2.inputValue.toString() === n3.toString() && (a2.checked = true), r3.innerHTML = i3, r3.insertBefore(a2, r3.firstChild), U2.appendChild(r3);
            }), T(U2);
            var t3 = U2.querySelectorAll("input");
            t3.length && t3[0].focus();
          };
          break;
        case "checkbox":
          var K2 = _(r2.content, k.checkbox), z2 = t2.getInput("checkbox");
          z2.type = "checkbox", z2.value = 1, z2.id = k.checkbox, z2.checked = !!o2.inputValue;
          var F2 = K2.getElementsByTagName("span");
          F2.length && K2.removeChild(F2[0]), F2 = document.createElement("span"), F2.innerHTML = o2.inputPlaceholder, K2.appendChild(F2), T(K2);
          break;
        case "textarea":
          var Q2 = _(r2.content, k.textarea);
          Q2.value = o2.inputValue, Q2.placeholder = o2.inputPlaceholder, T(Q2);
          break;
        case null:
          break;
        default:
          h('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + o2.input + '"');
      }
      if ("select" === o2.input || "radio" === o2.input) {
        var Y2 = function(e4) {
          return R2(f(e4));
        };
        w(o2.inputOptions) ? (l2.showLoading(), o2.inputOptions.then(function(e4) {
          t2.hideLoading(), Y2(e4);
        })) : "object" === a(o2.inputOptions) ? Y2(o2.inputOptions) : h("Unexpected type of inputOptions! Expected object, Map or Promise, got " + a(o2.inputOptions));
      } else -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(o2.input) && w(o2.inputValue) && (l2.showLoading(), V(B2), o2.inputValue.then(function(e4) {
        B2.value = "number" === o2.input ? parseFloat(e4) || 0 : e4 + "", T(B2), t2.hideLoading();
      }).catch(function(e4) {
        h("Error in inputValue promise: " + e4), B2.value = "", T(B2), t2.hideLoading();
      }));
      Se(o2.animation, o2.onBeforeOpen, o2.onOpen), o2.toast || (v(o2.allowEnterKey) ? o2.focusCancel && D(r2.cancelButton) ? r2.cancelButton.focus() : o2.focusConfirm && D(r2.confirmButton) ? r2.confirmButton.focus() : C2(-1, 1) : document.activeElement && document.activeElement.blur()), r2.container.scrollTop = 0;
    });
  } }), Le = void 0;
  o.prototype.then = function(e2, t2) {
    var n2 = Ae.promise.get(this);
    return n2.then(e2, t2);
  }, o.prototype.catch = function(e2) {
    var t2 = Ae.promise.get(this);
    return t2.catch(e2);
  }, o.prototype.finally = function(e2) {
    var t2 = Ae.promise.get(this);
    return t2.finally(e2);
  }, s(o.prototype, Pe), s(o, ke), Object.keys(Pe).forEach(function(e2) {
    o[e2] = function() {
      if (Le) {
        var t2;
        return (t2 = Le)[e2].apply(t2, arguments);
      }
    };
  }), o.DismissReason = C, o.noop = function() {
  }, o.version = "7.19.3";
  var Oe = e((function(e2) {
    var t2 = (function(t3) {
      function n2() {
        return i(this, n2), u(this, (n2.__proto__ || Object.getPrototypeOf(n2)).apply(this, arguments));
      }
      return d(n2, t3), r(n2, [{ key: "_main", value: function(e3) {
        return l(n2.prototype.__proto__ || Object.getPrototypeOf(n2.prototype), "_main", this).call(this, s({}, ye, e3));
      } }], [{ key: "setDefaults", value: function(t4) {
        if (y('"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.'), !t4 || "object" !== ("undefined" == typeof t4 ? "undefined" : a(t4))) throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");
        be(t4), Object.keys(t4).forEach(function(n3) {
          e2.isValidParameter(n3) && (ye[n3] = t4[n3]);
        });
      } }, { key: "resetDefaults", value: function() {
        y('"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.'), ye = {};
      } }]), n2;
    })(e2);
    return "undefined" != typeof window && "object" === a(window._swalDefaults) && t2.setDefaults(window._swalDefaults), t2;
  })(o));
  return Oe.default = Oe, Oe;
}), "undefined" != typeof window && window.Sweetalert2 && (window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2);
//# sourceMappingURL=scripts.js.map
