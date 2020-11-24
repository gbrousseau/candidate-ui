let express  = require('express');
let app      = express();
let fs  = require('fs');
let data = fs.readFileSync('../stubs/workOrders.json', 'utf8');
let workOrders = JSON.parse(data);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 8080;
//dashboard
app.get('/api/workorders', function(req, res) {

  res.json(workOrders);

});
//work order details
app.get('/api/workorders/:id', function(req, res) {
  let ret = {error: "No work order for that id"};
  workOrders.data.workOrders.forEach((value) => {
    if(value.id === req.params.id){
      ret = value;
    }
  });

  res.json(ret);
});

app.listen(port);
console.log(`App listening on port ${port}`);