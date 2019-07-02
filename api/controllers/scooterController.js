
let scooterJson;
let scooterArrayName = "scooter"

let loadScooterPromise = async function() {
    let scooter = { "scooter": [ 
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

        //image long database query
        scooterJson = scooter[scooterArrayName];

        resolve(scooterJson);
    });
};

let scooterSizePromise = async function() {

    return new Promise((resolve, reject) => {

        loadScooterPromise().then(scooter => {
            resolve(scooter.length);
        })
        .catch(err => {
            reject(err);
        })
        
    });
};

//exports
exports.scooterName = scooterArrayName;
exports.scooter = loadScooterPromise;
exports.scooterSize = function() { return scooterJson != undefined ? scooterJson.length : undefined; } //only available if load scooter was called before
exports.scooterSizeAsync = scooterSizePromise;

exports.getScooterResponse = async function(req, res) {
    //get scooter

    await scooter().then(scooter => {
        res.status(200).send(scooter);
    })
    .catch(err => res.status(500).send(err));
}
