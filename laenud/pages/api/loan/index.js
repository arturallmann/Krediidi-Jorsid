import db from '../../../models'
// let clients = [
//     {"id":0, "nimi":"lappa", "perenimi":"kotte", "kontakt":"vaata selja taha janist edasi"},
//     {"id":1, "nimi":"kan", "perenimi":"jängsepp", "kontakt":"vaata selja taha"}
// ];

export default function handler(req, res) {
    switch(req.method) {
        case "GET": actionList(req, res); break;
        case "POST": actionCreate(req, res); break;
        default: res.status(405)
    }
}

async function actionList(req, res) {
    const models = await db.Loan.findAll();
    res.status(200).json(models)
}


async function actionCreate(req, res) {
    let model = db.Loan.build(req.body);
    await model.save()
        .then(function(model){
            
            res.status(201).json(model);
        }).catch(function (err) {
            res.status(500).json(err);
        });
}

