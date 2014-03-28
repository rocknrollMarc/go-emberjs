App.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api'
});

App.Store = DS.Store.extend({
  adapter: "App.ApplicationAdapter",
});
