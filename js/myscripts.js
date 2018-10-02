jQuery(document).ready(function(a) {
    "use strict";
    a(".lang-currency-switcher").on("click", function() {
        a(this).parent().addClass("show"),
        a(this).parent().find(".dropdown-menu").addClass("show")
    }),
    a(document).on("click", function(b) {
        a(b.target).closest(".lang-currency-switcher-wrap").length || (a(".lang-currency-switcher-wrap").removeClass("show"),
        a(".lang-currency-switcher-wrap .dropdown-menu").removeClass("show"))
    })
});