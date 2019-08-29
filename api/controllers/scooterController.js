
let scooterJsonName = "scooter";

let scooter = async function() {
    var scooterJson = { scooterJsonName: [ 
        {
            "name": "Scooter1"
        },
        {
            "name": "Scooter2"
        },
        {
            "name": "Scooter3"
        },
        {
            "name": "Scooter4"
        }]
    };

    return new Promise((resolve, reject) => {
        resolve(scooterJson);
    });
};

//exports
exports.scooter = scooter;
exports.scooterName = scooterJsonName;

exports.getScooterResponse = async function(req, res) {
    //get scooters

    await scooter().then(scooter => {
        res.status(200).send(scooter);
    })
    .catch(err => res.status(500).send(err));
}
