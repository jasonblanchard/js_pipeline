//import $ from 'jquery';
import timer from 'appkit/timer';

export default function() {
  console.log('jQuery: ' + $.fn.jquery);
  console.log('from app.js');
  timer();
}
