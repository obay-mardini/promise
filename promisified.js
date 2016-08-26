var fs = require('fs');

function readdir(path) {
  return new Promise(function(resolve, reject){
    fs.readdir(path, function(err, data){
      if(err){
        console.log(err);
      } else {
        resolve(data)

      }
    });

  })

}

function stat(path) {
  return new Promise(function(resolve, reject) {
    fs.stat(path, function(err, stats){
      if(err){
        reject(err)
      }
      if (stats.isDirectory()) {
        resolve(path.split('/').pop() + ' is a dir');
      } else {
        resolve(path.split('/').pop() + ' is not a dir');
      }
    });
  })
}



exports.readdir = readdir;
exports.stat = stat;
