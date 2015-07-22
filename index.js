var annotation_component = {
  template: '#annotation-template',
  props: ['href'],
  data: function() {
    return {
      about: '',
      annotation: {
        id: '',
        text: '',
        user: {},
        target: [],
        document: {}
      }
    };
  },
  created: function() {
    this.loadAnnotation();
  },
  watch: {
    href: 'loadAnnotation'
  },
  computed: {
    username: function() {
      return this.annotation.user.split('@')[0].split(':')[1];
    },
    target: function() {
      return this.annotation.target[0];
    },
    quote: function() {
      var quote;
      this.target.selector.forEach(function(selector) {
        if (selector.type === 'TextQuoteSelector') {
          quote = selector.exact;
        }
      });
      return quote;
    }
  },
  methods: {
    loadAnnotation: function() {
      if (this.href) {
        this.$http.get(this.href,
          function(data, status) {
            this.$set('annotation', data);
          }
        );
      }
    }
  }
};

var app = new Vue({
  el: 'body',
  data: {
    url: '',
    urls: []
  },
  methods: {
    addUrl: function() {
      var annotation = this.$addChild(
        { href: this.url },
        Vue.extend(annotation_component)
      );
      annotation.$set('href', this.url);
      annotation.$mount();
      annotation.$after('#create-form');
    }
  },
  components: {
    annotation: annotation_component
  }
});
