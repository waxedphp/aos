
;(function ( $, window, document, undefined ) {

    var pluginName = 'aos',
        _search = '^body.waxed-aos',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.aosName == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.aosName, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.refresh == 'boolean') {
          AOS.refresh();
        };
        if (typeof rec.refreshHard == 'boolean') {
          AOS.refreshHard();
        };
      },


      this.free = function() {

      },

      this.init=function() {
         AOS.init();
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
