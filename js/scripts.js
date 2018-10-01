jQuery(document).ready(function(a) {
    "use strict";
    function b(b) {
        var c = a("body")
          , d = a(b.target).attr("href");
        a(d).addClass("active"),
        console.log(d),
        c.css("overflow", "hidden"),
        c.addClass("offcanvas-open"),
        b.preventDefault()
    }
    function c() {
        var b = a("body");
        b.removeClass("offcanvas-open"),
        setTimeout(function() {
            b.css("overflow", "visible"),
            a(".offcanvas-container").removeClass("active")
        }, 450)
    }
    function d() {
        k.parent().removeClass("expanded")
    }
    function e(b) {
        var c = b.item.index
          , d = a(".owl-item").eq(c).find("[data-hash]").attr("data-hash");
        a(".product-thumbnails li").removeClass("active"),
        a('[href="#' + d + '"]').parent().addClass("active"),
        a(".gallery-wrapper .gallery-item").removeClass("active"),
        a('[data-hash="' + d + '"]').parent().addClass("active")
    }
    (function() {
        if ("number" == typeof window.innerWidth)
            return window.innerWidth > document.documentElement.clientWidth;
        var a, b = document.documentElement || document.body;
        void 0 !== b.currentStyle && (a = b.currentStyle.overflow),
        a = a || window.getComputedStyle(b, "").overflow;
        var c;
        void 0 !== b.currentStyle && (c = b.currentStyle.overflowY),
        c = c || window.getComputedStyle(b, "").overflowY;
        var d = b.scrollHeight > b.clientHeight
          , e = /^(visible|auto)$/.test(a) || /^(visible|auto)$/.test(c)
          , f = "scroll" === a || "scroll" === c;
        return d && e || f
    }
    )() && a("body").addClass("hasScrollbar"),
    a('a[href="#"]').on("click", function(a) {
        a.preventDefault()
    }),
    function() {
        var b = a("body")
          , c = a(".navbar-sticky")
          , d = a(".topbar").outerHeight()
          , e = c.outerHeight();
        c.length && a(window).on("scroll", function() {
            a(this).scrollTop() > d ? (c.addClass("navbar-stuck"),
            c.hasClass("navbar-ghost") || b.css("padding-top", e)) : (c.removeClass("navbar-stuck"),
            b.css("padding-top", 0))
        })
    }(),
    function(b, c, d, e) {
        a(b).on("click", function() {
            a(e).addClass("search-visible"),
            setTimeout(function() {
                a(e + " > input").focus()
            }, 200)
        }),
        a(c).on("click", function() {
            a(e).removeClass("search-visible")
        }),
        a(d).on("click", function() {
            a(e + " > input").val(""),
            setTimeout(function() {
                a(e + " > input").focus()
            }, 200)
        })
    }(".toolbar .tools .search", ".close-search", ".clear-search", ".site-search"),
    a(".lang-currency-switcher").on("click", function() {
        a(this).parent().addClass("show"),
        a(this).parent().find(".dropdown-menu").addClass("show")
    }),
    a(document).on("click", function(b) {
        a(b.target).closest(".lang-currency-switcher-wrap").length || (a(".lang-currency-switcher-wrap").removeClass("show"),
        a(".lang-currency-switcher-wrap .dropdown-menu").removeClass("show"))
    }),
    a('[data-toggle="offcanvas"]').on("click", b),
    a(".site-backdrop").on("click", c);
    var f = a(".offcanvas-menu .menu").height();
    a(".offcanvas-menu .offcanvas-submenu").each(function() {
        a(this).prepend('<li class="back-btn"><a href="#">Back</a></li>')
    });
    var g = a(".has-children .sub-menu-toggle");
    a(".offcanvas-menu .offcanvas-submenu .back-btn").on("click", function(b) {
        var c = this
          , d = a(c).parent()
          , e = a(c).parent().parent().siblings().parent()
          , g = a(c).parents(".menu");
        d.removeClass("in-view"),
        e.removeClass("off-view"),
        "menu" === e.attr("class") ? g.css("height", f) : g.css("height", e.height()),
        b.preventDefault()
    }),
    g.on("click", function(b) {
        var c = this
          , d = a(c).parent().parent().parent()
          , e = a(c).parents(".menu");
        return d.addClass("off-view"),
        a(c).parent().parent().find("> .offcanvas-submenu").addClass("in-view"),
        e.css("height", a(c).parent().parent().find("> .offcanvas-submenu").height()),
        b.preventDefault(),
        !1
    });
    var h = a(".scroll-to-top-btn");
    if (h.length > 0 && (a(window).on("scroll", function() {
        a(this).scrollTop() > 600 ? h.addClass("visible") : h.removeClass("visible")
    }),
    h.on("click", function(b) {
        b.preventDefault(),
        a("html").velocity("scroll", {
            offset: 0,
            duration: 1200,
            easing: "easeOutExpo",
            mobileHA: !1
        })
    })),
    a(document).on("click", ".scroll-to", function(b) {
        var c = a(this).attr("href");
        if ("#" === c)
            return !1;
        var d = a(c);
        if (d.length > 0) {
            var e = d.data("offset-top") || 70;
            a("html").velocity("scroll", {
                offset: a(this.hash).offset().top - e,
                duration: 1e3,
                easing: "easeOutExpo",
                mobileHA: !1
            })
        }
        b.preventDefault()
    }),
    function(b) {
        b.each(function() {
            var b = a(this)
              , c = b.data("filter-list")
              , d = b.find("input[type=text]")
              , e = b.find("input[type=radio]")
              , f = a(c).find(".list-group-item");
            d.keyup(function() {
                var b = d.val();
                f.each(function() {
                    0 == a(this).text().toLowerCase().indexOf(b.toLowerCase()) ? a(this).show() : a(this).hide()
                })
            }),
            e.on("click", function(b) {
                var c = a(this).val();
                "all" !== c ? (f.hide(),
                a("[data-filter-item=" + c + "]").show()) : f.show()
            })
        })
    }(a("[data-filter-list]")),
    function(b, c) {
        b.each(function() {
            var b = a(this)
              , d = a(this).data("date-time");
            (c || b).downCount({
                date: d,
                offset: 10
            })
        })
    }(a(".countdown")),
    a("[data-toast]").on("click", function() {
        var b = a(this)
          , c = b.data("toast-type")
          , d = b.data("toast-icon")
          , e = b.data("toast-position")
          , f = b.data("toast-title")
          , g = b.data("toast-message")
          , h = "";
        switch (e) {
        case "topRight":
            h = {
                class: "iziToast-" + c || "",
                title: f || "Title",
                message: g || "toast message",
                animateInside: !1,
                position: "topRight",
                progressBar: !1,
                icon: d,
                timeout: 3200,
                transitionIn: "fadeInLeft",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeIn",
                transitionOutMobile: "fadeOut"
            };
            break;
        case "bottomRight":
            h = {
                class: "iziToast-" + c || "",
                title: f || "Title",
                message: g || "toast message",
                animateInside: !1,
                position: "bottomRight",
                progressBar: !1,
                icon: d,
                timeout: 3200,
                transitionIn: "fadeInLeft",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeIn",
                transitionOutMobile: "fadeOut"
            };
            break;
        case "topLeft":
            h = {
                class: "iziToast-" + c || "",
                title: f || "Title",
                message: g || "toast message",
                animateInside: !1,
                position: "topLeft",
                progressBar: !1,
                icon: d,
                timeout: 3200,
                transitionIn: "fadeInRight",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeIn",
                transitionOutMobile: "fadeOut"
            };
            break;
        case "bottomLeft":
            h = {
                class: "iziToast-" + c || "",
                title: f || "Title",
                message: g || "toast message",
                animateInside: !1,
                position: "bottomLeft",
                progressBar: !1,
                icon: d,
                timeout: 3200,
                transitionIn: "fadeInRight",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeIn",
                transitionOutMobile: "fadeOut"
            };
            break;
        case "topCenter":
            h = {
                class: "iziToast-" + c || "",
                title: f || "Title",
                message: g || "toast message",
                animateInside: !1,
                position: "topCenter",
                progressBar: !1,
                icon: d,
                timeout: 3200,
                transitionIn: "fadeInDown",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeIn",
                transitionOutMobile: "fadeOut"
            };
            break;
        case "bottomCenter":
            h = {
                class: "iziToast-" + c || "",
                title: f || "Title",
                message: g || "toast message",
                animateInside: !1,
                position: "bottomCenter",
                progressBar: !1,
                icon: d,
                timeout: 3200,
                transitionIn: "fadeInUp",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeIn",
                transitionOutMobile: "fadeOut"
            };
            break;
        default:
            h = {
                class: "iziToast-" + c || "",
                title: f || "Title",
                message: g || "toast message",
                animateInside: !1,
                position: "topRight",
                progressBar: !1,
                icon: d,
                timeout: 3200,
                transitionIn: "fadeInLeft",
                transitionOut: "fadeOut",
                transitionInMobile: "fadeIn",
                transitionOutMobile: "fadeOut"
            }
        }
        iziToast.show(h)
    }),
    a(".btn-wishlist").on("click", function() {
        var b = a(this).data("iteration") || 1
          , c = {
            title: "Product",
            animateInside: !1,
            position: "topRight",
            progressBar: !1,
            timeout: 3200,
            transitionIn: "fadeInLeft",
            transitionOut: "fadeOut",
            transitionInMobile: "fadeIn",
            transitionOutMobile: "fadeOut"
        };
        switch (b) {
        case 1:
            a(this).addClass("active"),
            c.class = "iziToast-info",
            c.message = "added to your wishlist!",
            c.icon = "icon-bell";
            break;
        case 2:
            a(this).removeClass("active"),
            c.class = "iziToast-danger",
            c.message = "removed from your wishlist!",
            c.icon = "icon-ban"
        }
        iziToast.show(c),
        b++,
        b > 2 && (b = 1),
        a(this).data("iteration", b)
    }),
    a(".isotope-grid").length)
        var i = a(".isotope-grid").imagesLoaded(function() {
            i.isotope({
                itemSelector: ".grid-item",
                transitionDuration: "0.7s",
                masonry: {
                    columnWidth: ".grid-sizer",
                    gutter: ".gutter-sizer"
                }
            })
        });
    if (a(".filter-grid").length > 0) {
        var j = a(".filter-grid");
        a(".nav-pills").on("click", "a", function(b) {
            b.preventDefault(),
            a(".nav-pills a").removeClass("active"),
            a(this).addClass("active");
            var c = a(this).attr("data-filter");
            j.isotope({
                filter: c
            })
        })
    }
    var k = a(".widget-categories .has-children > a");
    k.on("click", function(b) {
        a(b.target).parent().is(".expanded") ? d() : (d(),
        a(this).parent().addClass("expanded"))
    }),
    a('[data-toggle="tooltip"]').tooltip(),
    a('[data-toggle="popover"]').popover();
    var l = document.querySelector(".ui-range-slider");
    if (void 0 !== l && null !== l) {
        var m = parseInt(l.parentNode.getAttribute("data-start-min"), 10)
          , n = parseInt(l.parentNode.getAttribute("data-start-max"), 10)
          , o = parseInt(l.parentNode.getAttribute("data-min"), 10)
          , p = parseInt(l.parentNode.getAttribute("data-max"), 10)
          , q = parseInt(l.parentNode.getAttribute("data-step"), 10)
          , r = document.querySelector(".ui-range-value-min span")
          , s = document.querySelector(".ui-range-value-max span")
          , t = document.querySelector(".ui-range-value-min input")
          , u = document.querySelector(".ui-range-value-max input");
        noUiSlider.create(l, {
            start: [m, n],
            connect: !0,
            step: q,
            range: {
                min: o,
                max: p
            }
        }),
        l.noUiSlider.on("update", function(a, b) {
            var c = a[b];
            b ? (s.innerHTML = Math.round(c),
            u.value = Math.round(c)) : (r.innerHTML = Math.round(c),
            t.value = Math.round(c))
        })
    }
    var v = a(".interactive-credit-card");
    if (v.length && v.card({
        form: ".interactive-credit-card",
        container: ".card-wrapper"
    }),
    a(".gallery-wrapper").length) {
        !function(b) {
            function c(a, b) {
                return (" " + a.className + " ").indexOf(" " + b + " ") > -1
            }
            for (var d = function(b) {
                for (var c, d, e, f, g = a(b).find(".gallery-item:not(.isotope-hidden)").get(), h = g.length, i = [], j = 0; j < h; j++)
                    c = g[j],
                    1 === c.nodeType && (d = c.children[0],
                    "video" == a(d).data("type") ? f = {
                        html: a(d).data("video")
                    } : (e = d.getAttribute("data-size").split("x"),
                    f = {
                        src: d.getAttribute("href"),
                        w: parseInt(e[0], 10),
                        h: parseInt(e[1], 10)
                    }),
                    c.children.length > 1 && (f.title = a(c).find(".caption").html()),
                    d.children.length > 0 && (f.msrc = d.children[0].getAttribute("src")),
                    f.el = c,
                    i.push(f));
                return i
            }, e = function a(b, c) {
                return b && (c(b) ? b : a(b.parentNode, c))
            }, f = function(b) {
                b = b || window.event,
                b.preventDefault ? b.preventDefault() : b.returnValue = !1;
                var d = b.target || b.srcElement
                  , f = e(d, function(a) {
                    return c(a, "gallery-item")
                });
                if (f) {
                    for (var h, i = f.closest(".gallery-wrapper"), j = a(f.closest(".gallery-wrapper")).find(".gallery-item:not(.isotope-hidden)").get(), k = j.length, l = 0, m = 0; m < k; m++)
                        if (1 === j[m].nodeType) {
                            if (j[m] === f) {
                                h = l;
                                break
                            }
                            l++
                        }
                    return h >= 0 && g(h, i),
                    !1
                }
            }, g = function(b, c, e, f) {
                var g, h, i, j = document.querySelectorAll(".pswp")[0];
                if (i = d(c),
                h = {
                    closeOnScroll: !1,
                    galleryUID: c.getAttribute("data-pswp-uid"),
                    getThumbBoundsFn: function(b) {
                        var c = i[b].el.getElementsByTagName("img")[0];
                        if (a(c).length > 0) {
                            var d = window.pageYOffset || document.documentElement.scrollTop
                              , e = c.getBoundingClientRect();
                            return {
                                x: e.left,
                                y: e.top + d,
                                w: e.width
                            }
                        }
                    }
                },
                f)
                    if (h.galleryPIDs) {
                        for (var k = 0; k < i.length; k++)
                            if (i[k].pid == b) {
                                h.index = k;
                                break
                            }
                    } else
                        h.index = parseInt(b, 10) - 1;
                else
                    h.index = parseInt(b, 10);
                isNaN(h.index) || (e && (h.showAnimationDuration = 0),
                g = new PhotoSwipe(j,PhotoSwipeUI_Default,i,h),
                g.init(),
                g.listen("beforeChange", function() {
                    var b = a(g.currItem.container);
                    a(".pswp__video").removeClass("active");
                    b.find(".pswp__video").addClass("active");
                    a(".pswp__video").each(function() {
                        a(this).hasClass("active") || a(this).attr("src", a(this).attr("src"))
                    })
                }),
                g.listen("close", function() {
                    a(".pswp__video").each(function() {
                        a(this).attr("src", a(this).attr("src"))
                    })
                }))
            }, h = document.querySelectorAll(b), i = 0, j = h.length; i < j; i++)
                h[i].setAttribute("data-pswp-uid", i + 1),
                h[i].onclick = f;
            var k = function() {
                var a = window.location.hash.substring(1)
                  , b = {};
                if (a.length < 5)
                    return b;
                for (var c = a.split("&"), d = 0; d < c.length; d++)
                    if (c[d]) {
                        var e = c[d].split("=");
                        e.length < 2 || (b[e[0]] = e[1])
                    }
                return b.gid && (b.gid = parseInt(b.gid, 10)),
                b
            }();
            k.pid && k.gid && g(k.pid, h[k.gid - 1], !0, !0)
        }(".gallery-wrapper")
    }
    var w = a(".product-carousel");
    w.length && w.owlCarousel({
        items: 1,
        loop: !1,
        dots: !1,
        URLhashListener: !0,
        startPosition: "URLHash",
        onTranslate: e
    });
    var x = a(".google-map");
    x.length && x.each(function() {
        var b = a(this).data("height")
          , c = a(this).data("address")
          , d = a(this).data("zoom")
          , e = a(this).data("disable-controls")
          , f = a(this).data("scrollwheel")
          , g = a(this).data("marker")
          , h = a(this).data("marker-title")
          , i = a(this).data("styles");
        a(this).height(b),
        a(this).gmap3({
            marker: {
                address: c,
                data: h,
                options: {
                    icon: g
                },
                events: {
                    mouseover: function(b, c, d) {
                        var e = a(this).gmap3("get")
                          , f = a(this).gmap3({
                            get: {
                                name: "infowindow"
                            }
                        });
                        f ? (f.open(e, b),
                        f.setContent(d.data)) : a(this).gmap3({
                            infowindow: {
                                anchor: b,
                                options: {
                                    content: d.data
                                }
                            }
                        })
                    },
                    mouseout: function() {
                        var b = a(this).gmap3({
                            get: {
                                name: "infowindow"
                            }
                        });
                        b && b.close()
                    }
                }
            },
            map: {
                options: {
                    zoom: d,
                    disableDefaultUI: e,
                    scrollwheel: f,
                    styles: i
                }
            }
        })
    })
});
