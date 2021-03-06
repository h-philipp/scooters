let scooterJson;
let scooterArrayName = "scooter"

let loadScooterPromise = async function() {
    let scooter = { scooterArrayName: [ 
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
        scooterJson = scooter;

        resolve(scooterJson);
    });
};

let scooterSizePromise = async function() {

    return new Promise((resolve, reject) => {

        loadScooterPromise().then(scooter => {
            resolve(scooter[scooterArrayName].length);
        })
        .catch(err => {
            reject(err);
        })
        
    });
};

//exports
exports.scooterName = scooterArrayName;
exports.scooter = loadScooterPromise;
exports.scooterSize = function() { return scooterJson != undefined ? scooterJson[scooterArrayName].length : undefined; } //only available if load scooter was called before
exports.scooterSizeAsync = scooterSizePromise;

exports.getScooterResponse = async function(req, res) {
    //get scooters

    await loadScooterPromise().then(scooter => {
        res.status(200).send(scooter);
    })
    .catch(err => res.status(500).send(err));
}
