var Videos = Backbone.Collection.extend({

  model: Video,
  
  nextPageToken: undefined,

  url: 'https://www.googleapis.com/youtube/v3/search',

  next: function(inputText) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: inputText,
        pageToken: this.nextPageToken,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
  },


  search: function(inputText) {
    this.nextPageToken = undefined;
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
    this.nextPageToken = response.nextPageToken;
    return response.items;
  }

});
