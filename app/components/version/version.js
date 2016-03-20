'use strict';

angular.module('PSCounter.version', [
  'PSCounter.version.interpolate-filter',
  'PSCounter.version.version-directive'
])

.value('version', '0.1');
