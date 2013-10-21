(function() {
  var handle;
  var container;

  function setupTouchEvents() {
    xtag.addEvent(container, 'pinch', function(e) {
      console.log('pinch ' + e.detail.direction.toUpperCase());
      e.baseEvent.preventDefault();
      handle.style.top = e.detail.centroid.y + 'px';
      handle.style.left = e.detail.centroid.x + 'px';
    });

    xtag.addEvent(container, 'touchstart', function(e) {
      e.preventDefault();
      console.log('touchstart  ', e);
      handle.style.top = e.detail.centroid.y + 'px';
      handle.style.left = e.detail.centroid.x + 'px';

    });

    xtag.addEvent(container, 'swipe', function(e) {
      e.preventDefault();
      console.log('swipe', e);
      handle.style.top = e.detail.centroid.y + 'px';
      handle.style.left = e.detail.centroid.x + 'px';
    });

    xtag.addEvent(container, 'longtap', function(e) {
      e.preventDefault();
      console.log('long tap', e);
      handle.style.top = e.detail.centroid.y + 'px';
      handle.style.left = e.detail.centroid.x + 'px';
    });
  }
  xtag.register('x-tough-switch', {
    lifecycle: {
      created: function() {
        this.setAttribute('tabindex', this.getAttribute('tabindex') || 0);
        container = document.createElement('div');
        handle = document.createElement('div');
        handle.classList.add('handle');
        container.classList.add('container');
        this.appendChild(handle);
        this.appendChild(container);
        this.onText = this.onText;
        this.offText = this.offText;
        this.checked = this.checked;
        this.onIcon = this.onIcon;
        this.offIcon = this.offIcon;
        setupTouchEvents();
      },
      inserted: function() {},
      removed: function() {},
      attributeChanged: function() {}
    },
    events: {
     'tap:preventable:delegate(div)': function(e) {
        handle.style.top = e.clientY + 'px';
        handle.style.left = e.clientX + 'px';
        console.log('tapped', e);
      }
    },
    accessors: {

    },
    methods: {

    }
  });

})();
