require('blanket');
var should = require('should');
var tc = require('../dist/type-checker');

var types = [
  'Object', 'Array', 'Null', 'Undefined', 'Error',
  'Number', 'String', 'Date', 'RegExp', 'Function'
];

var values = [
  { name: 'empty object', type: 'Object', val: {} },
  { name: 'empty array', type: 'Array', val: [] },
  { name: 'null', type: 'Null', val: null },
  { name: 'undefined', type: 'Undefined', val: undefined },
  { name: 'number', type: 'Number', val: 1 },
  { name: 'number zero', type: 'Number', val: 0 },
  { name: 'empty string', type: 'String', val: '' },
  { name: 'string', type: 'String', val: 'this is string' },
  { name: 'date', type: 'Date', val: new Date() },
  { name: 'regexp', type: 'RegExp', val: new RegExp('d') },
  { name: 'error', type: 'Error', val: new Error() }
];

types.forEach(function (type) {
  describe(`${type} check`, function () {
    values.filter(function (t) {
      return t.type === type;
    }).map(function (d) {
      it(`${d.name} should be true`, function () {
        tc['is'+type](d.val).should.be.true();
      });
    });

    values.filter(function (t) {
      return t.type !== type;
    }).map(function (d) {
      it(`${d.name} should be false`, function () {
        tc['is'+type](d.val).should.be.false();
      });
    });
  });
});

describe('getType check', function () {
  values.forEach(function (obj) {
    it(`${obj.name} should be is ${obj.type}`, function () {
      tc.getType(obj.val).should.be.equal(obj.type);
    });
  });
});
