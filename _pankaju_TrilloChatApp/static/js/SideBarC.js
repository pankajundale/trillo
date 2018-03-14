/* globals TrilloChatApp */

(function() {

  TrilloChatApp.SideBarC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var SideBarC = TrilloChatApp.SideBarC.prototype;
  var SharedC = Shared.SharedC.prototype;

  SideBarC.handleAction = function(actionName, selectedObj, $e, targetController) {
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };
  
  SideBarC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };
})();
