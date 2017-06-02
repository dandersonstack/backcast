var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.currentVideo = this.collection.models[0];
    Backbone.on('select', this.updateVideo, this);
    this.listenTo(this.collection, 'sync', ()=>{ this.updateVideo(this.collection.models[0]); });  
  },

  updateVideo(e) {
    this.currentVideo = e;
    this.render();
  },

  render: function() {   
    let template = $(this.template());
    template.find('.embed-responsive-item').attr('src', `https://www.youtube.com/embed/${this.currentVideo.id}`);
    template.find('.video-player-details h3').text(this.currentVideo.attributes.snippet.title);
    template.find('.video-player-details div').text(this.currentVideo.attributes.snippet.description);
    this.$el.html(template);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
