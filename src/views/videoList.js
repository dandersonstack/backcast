var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    //create collection of videos
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideoEntry, this);
    //render all sub compents
    //need a collection
    return this;
  },

  renderVideoEntry: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
