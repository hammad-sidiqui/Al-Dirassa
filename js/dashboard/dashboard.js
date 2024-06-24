
var direction = getUrlParams('dir');
if (direction != 'rtl')(function ($) {
          
                var dlabSettingsOptions = {
                    layout: "Vertical",
                    sidebarStyle: "full",
                    sidebarPosition: "fixed",
                    headerPosition: "fixed",
                    containerLayout: "full",
                    direction: direction
                };
                jQuery(document).ready(function () {
                    new dlabSettings(dlabSettingsOptions);
                });
               
            })(jQuery);