var timer = function() {
  console.log('from timer.js');

  (function setTime() {
    $('span.time').text(moment().format('hh:mm:ss'));
    setTimeout(function() {
      $('span.time').text(moment().format('hh:mm:ss'));
      setTime();
    }, 1000);
  })();
}

export default timer;
