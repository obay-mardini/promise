var pro = require('./promisified.js');
var path = __dirname + '/files';

pro.readdir(path).then(function(data){
  var myArray =  data.map(function(file) {
    return pro.stat(path + '/' + file);
  });
   return Promise.all(myArray).then(function(values){
     values.forEach(function(item){
       console.log(item)
     })
   })
}).catch(function(err) {
  console.log('err')
});
