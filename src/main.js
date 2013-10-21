(function() {
  var template = '<div class="tough-switch-wrapper">' +
    'tough switch test' +
    '<div id="handle"></div>' +
    '</div>';

  xtag.register('x-tough-switch', {
    lifecycle: {
      created: function() {
        this.setAttribute('tabindex', this.getAttribute('tabindex') || 0);
        this.innerHTML = template;
        this.onText = this.onText;
        this.offText = this.offText;
        this.checked = this.checked;
        this.onIcon = this.onIcon;
        this.offIcon = this.offIcon;
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
