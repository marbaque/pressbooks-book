jQuery(document).ready(function(t){t(document).keydown(function(e){var n=!1;37==e.which?n=t(".previous a").attr("href"):39==e.which&&(n=t(".next a").attr("href")),n&&!t("textarea, input").is(":focus")&&(window.location=n)})});