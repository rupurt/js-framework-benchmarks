App = Em.Application.create({
  rootElement: '#ember-app'
});
App.deferReadiness();

App.IndexController = Em.ArrayController.extend({
  numPeople: 100,

  renderPeople: function() {
    var numPeople = this.get('numPeople');
    var people = new Array(numPeople);

    for (var i=0; i < numPeople; i++) {
      people[i] = { name: 'Kanye West' };
    }
    this.pushObjects(people);
  }
});

App.advanceReadiness();
