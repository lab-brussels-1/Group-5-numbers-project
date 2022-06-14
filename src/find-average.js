import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { average } from './utils/average.js';

const findAverage = () => {
  // calculate the average of all saved numbers  (use your util function!)

  // display the average in the UI

  display('your-output', 'the average is: ' + average(numbers));
};

// !! fill in this blank with the correct DOM ID

document.getElementById('average-them').addEventListener('click', findAverage);
