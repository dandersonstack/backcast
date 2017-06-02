var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleClick',
    'keyup .form-control': 'handleType'
  },
  
  handleType: function() {
    _.debounce(()=>{ this.collection.search(this.$el.find('.form-control').val()); }, 500)();
  },

  handleClick: function() {
    let newModels = this.collection.search(this.$el.find('.form-control').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
