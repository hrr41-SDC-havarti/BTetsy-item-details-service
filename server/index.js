const express = require('express');
const models = require('./database/models.js');

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
app.get('/api/description/:productId', (req, res) => {
  const productId = req.params.productId;
  models.getOneItem(productId)
    .then((val) => res.status(200).json(val))
    .catch((err) => {
      res.status(400)
      res.send(err);
    });
});
//working to get all descriptions
app.get('/api/description', (req, res) => {
  console.log(req.body)
  models.getAllItems(req.body)
    .then((val) => res.status(200).json(val))
    .catch((err) => {
      res.status(400).send(err)
    });
});

//working
app.post('/api/description', (req, res) => {
  const product = req.body;
  models.addOneItem(product)
  .then((val) => res.status(200).json(val))
  .catch((err) => {
    res.status(400).send(err)
  })

})
//not working yet vvvv
app.put('/api/description/:productId', (req, res) => {
  console.log('HEY')
  const productId = req.query.productId;
  models.updateOneItem(productId, req.body)
    .then((val) => res.status(200).json(val))
    .catch((err) => {
      res.status(400).send(err)
    })
})

//working
app.delete('/api/description', (req, res) => {
  console.log(req.query.productId)
  const productId = req.query.productId;
  models.deleteOneItem(productId)
    .then((val) => res.status(200).json(val))
    .catch((err) => {
      console.log(err)
      res.status(400).send('Unable to delete ', err)
    })
})




app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
