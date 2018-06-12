'use strict';

var avengers = ['ironMan', // index [0]
['captainAmerica', // index [1][0]
['blackWidow', // index [1][1][0]
['theHulk'] // index [1][1][1][0]
]]];

var avengersList = Immutable.fromJS(avengers);

// get theHulk
avengersList.getIn([1, 1, 1, 0]);