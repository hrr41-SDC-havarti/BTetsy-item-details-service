require('newrelic')
const express = require('express');
// const models = require('./database/models.js');
const models = require('./database/pgControllers.js');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
const port = 3000;
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//working
// app.get('/api/description/:productId', (req, res) => {
//   const productId = req.params.productId;
//   console.log(req.body)
//   models.getOne(productId)
//     .then((val) => res.status(200).json(val))
//     .catch((err) => {
//       res.status(400)
//       res.send(err);
//     });
// });
app.get('/api/description/:productId', models.getOne)


//working
app.post('/api/description', models.addOne);
// app.post('/api/description', (req, res) => {
//   const product = req.body;
//   models.addOne(product)
//   .then((val) => res.status(200).json(val))
//   .catch((err) => {
//     res.status(400).send(err)
//   })

// })
//not working yet vvvv
// app.put('/api/description/:productId', (req, res) => {
//   console.log('HEY')
//   const productId = req.query.productId;
//   models.updateOne(productId, req.body)
//     .then((val) => res.status(200).json(val))
//     .catch((err) => {
//       res.status(400).send(err)
//     })
// })

//working
// app.delete('/api/description', (req, res) => {
//   console.log(req.query.productId)
//   const productId = req.query.productId;
//   models.deleteOne(productId)
//     .then((val) => res.status(200).json(val))
//     .catch((err) => {
//       console.log(err)
//       res.status(400).send('Unable to delete ', err)
//     })
// })
app.delete('/api/description/:productId', models.deleteOne)




app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
