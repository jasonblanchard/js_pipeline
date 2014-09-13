//import $ from 'jquery';
import timer from 'appkit/timer';
import songs from 'appkit/song';

export default function() {
  console.log('jQuery: ' + $.fn.jquery);
  console.log('from app.js');
  timer();
  songs();

}
