'use strict';

module.exports = {

  /**
   * Filter an array of objects from first array list
   * which presents in array2
   * and return result as an array
   * @param {array1} array
   * @param {array2} array
   * @param {key} string
   * @return {array}
   */
  getIncludedObjs : function( array1, array2, key ) {
    if( !Array.isArray(array1) || !Array.isArray(array2) )
      return [];

    return array1.filter( function(r1) {
      return array2.some( function(r2) {
        return r2[key] === r1[key];
      });
    });
  },

  /**
   * Filter an array of objects from first array list
   * which are absent in array2
   * and return result as an array
   * @param {array1} array
   * @param {array2} array
   * @param {key} string
   * @return {array}
   */
  getExcludedObjs: function( array1, array2, key ) {
    if( !Array.isArray(array1) || !Array.isArray(array2) )
      return [];

    return array1.filter( function(r1) {
      return !array2.some( function(r2) {
        return r2[key] === r1[key];
      });
    });
  }

};
