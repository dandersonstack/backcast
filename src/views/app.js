var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
  },

  

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.collection,
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.collection,
    }).render();

    new SearchView({
      el: this.$('.search'),
      collection: this.collection,
    }).render();
    return this;
  },
  
  template: templateURL('src/templates/app.html')

});
