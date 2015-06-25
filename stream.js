var fs = require('fs');
var colors = require('colors');

var bufferSize = 8;
var read = fs.createReadStream('input.txt', {
  highWaterMark: bufferSize
});
var write = fs.createWriteStream('output.txt');
read
    .on('data', function(data) {
      console.log('read: data'.red);
      console.log(data.toString()); // buffer type으로 받기 때문에 변경한다.
    })
    .on('end',   function()          { console.log('read: end');    })
    .on('error', function(e)         { console.log('read: error');  })
    .on('close', function()          { console.log('read: colse');  })
    .on('fd',    function(fd)        { console.log('read: fd');     })
;
write
    .on('drain', function()          { console.log('write: drain'.yellow); })
    .on('error', function(e)         { console.log('write: error' ); })
    .on('close', function()          { console.log('write: close' ); })
    .on('pipe',  function(src)       { console.log('write: pipe'  ); })
;
read.pipe(write);