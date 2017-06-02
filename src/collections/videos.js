var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',


  search: function(inputText) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: inputText,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
  },

  parse: function(response) {
    return response.items;
  }

});
