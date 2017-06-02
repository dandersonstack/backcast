var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    //create collection of videos
    this.listenTo(this.collection, 'sync', ()=>{ this.render(); });  

  },

  

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideoEntry, this);
    return this;
  },

  renderVideoEntry: function(video) {
    let node = $('<div></div>');

    var videoListEntryView = new VideoListEntryView(
      {model: video, el: node }).render();
    this.$('.video-list').append(node);
  },

  template: templateURL('src/templates/videoList.html')

});
