var template = '<div>tough switch test</div>';

xtag.register('x-tough-switch', {
  lifecycle: {
    ready: function() {
      this.innerHTML = template;
    }
  },
  events: {
    'tap:preventable:delegate(div)': function() {
      alert('tapped on tough switch');
    }
  }
});
