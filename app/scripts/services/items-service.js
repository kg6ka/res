'use strict';

app.factory('ItemService',['$resource', function($resource){

  return $resource('views/items/:itemId.:format', {
    itemId: 'items',
    format: 'json',
    apiKey: 'someKeyThis'
  },
  {
    update: {
      method: 'PUT',
      params: {
        itemId: '@items'
      },
      isArray: true
    }
  });

}]);