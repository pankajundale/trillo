/* globals Webapplicationdemo */
/* globals Shared */

(function() {

  "use strict";

  Trillo.CSS.selected = "active";

  Webapplicationdemo.WebapplicationdemoC = Trillo.inherits(Shared.AppC, function(viewSpec) {
    Shared.AppC.call(this, viewSpec);
  });

  var WebapplicationdemoC = Webapplicationdemo.WebapplicationdemoC.prototype;
  var AppC = Shared.AppC.prototype;

  WebapplicationdemoC.handleAction = function(actionName, selectedObj) {
    if (actionName === "sideBarToggler") {
      $('body').toggleClass('sidebar-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "asideBarToggler") {
      $('body').toggleClass('aside-menu-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "mobileSideBarToggler") {
      $('body').toggleClass('sidebar-mobile-show');
      this.view().windowResized();
      return true;
    }
    return AppC.handleAction.call(this, actionName, selectedObj);
  };

})();
