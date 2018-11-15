import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | bands/band', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('bands/band', {});
    assert.ok(model);
  });
});
