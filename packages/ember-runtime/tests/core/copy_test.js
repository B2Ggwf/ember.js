import create from 'ember-metal/platform/create';
import copy from "ember-runtime/copy";

QUnit.module("Ember Copy Method");

test("Ember.copy null", function() {
  var obj = { field: null };

  equal(copy(obj, true).field, null, "null should still be null");
});

test("Ember.copy date", function() {
  var date = new Date(2014, 7, 22);
  var dateCopy = copy(date);

  equal(date.getTime(), dateCopy.getTime(), "dates should be equivalent");
});

test("Ember.copy null prototype object", function() {
  var obj = create(null);

  obj.foo = 'bar';

  equal(copy(obj).foo, 'bar', 'bar should still be bar');
});
