
// Require controller modules.
var scooterController = require('./scooterController');

//exports
exports.index = async function(req, res) {

    await scooterController.scooter()
    .then(function(response) {
        res.render('index', response);
    })
    .catch(err => res.status(500).send(err));
}
