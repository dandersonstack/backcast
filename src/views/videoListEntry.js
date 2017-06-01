var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    let videoEntry = $(this.template());
    videoEntry.find('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    videoEntry.find('.video-list-entry-title').text(this.model.attributes.snippet.title);
    videoEntry.find('.video-list-entry-detail').text(this.model.attributes.snippet.description);

    this.$el.append(videoEntry);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
