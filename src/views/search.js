var SearchView = Backbone.View.extend({

  currentSearch: '',
  
  events: {
    'click .btn-search': 'handleClick',
    'keyup .form-control': 'handleType',
    'click .btn-next': 'handleNext',
  },
  

  handleType: function() {
    _.debounce(()=>{ this.collection.search(this.$el.find('.form-control').val()); }, 500)();
  },

  handleNext: function() {
    this.collection.next(this.$el.find('.form-control').val());
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
