App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend(); // using fixtures instead of persitant backend

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
