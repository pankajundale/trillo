/* globals TrilloChatApp */

(function() {

  TrilloChatApp.LinkedinProfileC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var LinkedinProfileC = TrilloChatApp.LinkedinProfileC.prototype;
  var SharedC = Shared.SharedC.prototype;

  LinkedinProfileC.handleAction = function(actionName, selectedObj, $e, targetController) {
    var t  = this.$elem();
    if (actionName === "button") {
        $('[nm="inputvalue"]').hide();
        return true;
        
    }
        $("#anOtherButton").click(function() {
  $("#FullName").attr('disabled', !$("#FullName").attr('disabled'));
});
        
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };
  
  LinkedinProfileC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };
})();
