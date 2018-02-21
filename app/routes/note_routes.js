const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  //CREATE NOTE
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };

    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  //READ NOTE
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  //READ ALL NOTES
  app.get('/notes', (req, res) => {

    db.collection('notes').find({}).toArray((err, items) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        items.length ? res.send(items) : res.send('There are no notes here. Create one :)');
      }
    });
  });

  //UPDATE NOTE
  app.put ('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(note);
      }
    });
  });

  //DELETE NOTE
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  //DELETE NOTES
  app.delete('/notes', (req, res) => {
    db.collection('notes').deleteMany();
    res.send('All notes deleted!');
  });
};