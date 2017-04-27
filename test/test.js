'use strict';

var expect = require('chai').expect;
var filter = require('../index');

describe('filter', function() {
    it('should get included objects in an array', function() {
        var result = filter.getIncludedObjs([{id:1},{id:2},{id:3}], [{id:1}], 'id');
        expect(result).to.deep.have.same.members([{id:1}]);
    });
    it('should return an empty array', function() {
        var result = filter.getIncludedObjs([{id:1},{id:2},{id:3}], [], 'id');
        expect(result).to.deep.have.same.members([]);
    });
    it('if no valid key is present returns first array', function() {
        var result = filter.getIncludedObjs([{id:1},{id:2},{id:3}], [{id:1}], '');
        expect(result).to.deep.have.same.members([{id:1},{id:2},{id:3}]);
    });
    it('if no array is found returns empty array', function() {
        var result = filter.getIncludedObjs('', [{id:1}], 'id');
        expect(result).to.deep.have.same.members([]);
    });
    it('should get excluded objects in an array', function() {
        var result = filter.getExcludedObjs([{id:1},{id:2},{id:3}], [{id:1}], 'id');
        expect(result).to.deep.have.same.members([{id:2},{id:3}]);
    });
    it('if second array is empty returns first array', function() {
        var result = filter.getExcludedObjs([{id:1},{id:2},{id:3}], [], 'id');
        expect(result).to.deep.have.same.members([{id:1},{id:2},{id:3}]);
    });
    it('if no valid key is present returns first array', function() {
        var result = filter.getExcludedObjs([{id:1},{id:2},{id:3}], [{id:1}], '');
        expect(result).to.deep.have.same.members([]);
    });
    it('if no array is found returns empty array', function() {
        var result = filter.getExcludedObjs('', [{id:1}], 'id');
        expect(result).to.deep.have.same.members([]);
    });
});
