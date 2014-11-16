App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend();

App.Router.map(function() {
  this.resource('posts', { path: '/' }); // render posts template
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

App.PostController = Ember.ObjectController.extend({
  actions: {
    removePost: function() {
      var post = this.get('model');
      post.deleteRecord();
      post.save();
    }
  }
});

App.PostsController = Ember.ArrayController.extend({
  actions: {
    createPost: function () {
      var title = this.get('newPost');

      var post = this.store.createRecord('post', {
        title: title
      });

      // Clear input field
      this.set('newPost', '');

      post.save();
    }
  }
});

App.Post.FIXTURES = [
  {
    id: 1,
    title: 'Title 1',
    body: 'This is the body of Post 1'
  },
  {
    id: 2,
    title: 'Title 2',
    body: 'This is the body of Post 2'
  },
  {
    id: 3,
    title: 'Title 3',
    body: 'This is the body of Post 3'
  }
];
