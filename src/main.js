(function() {
  var template = '<div>tough switch test</div>';

  xtag.register('x-tough-switch', {
    lifecycle: {
      created: function() {
        this.innerHTML = template;
      },
      inserted: function() {},
      removed: function() {},
      attributeChanged: function() {}
    },
    events: {
     'tap:preventable:delegate(div)': function() {
        alert('tapped on tough switch');
      }
    },
    accessors: {

    },
    methods: {

    }
  });

})();
