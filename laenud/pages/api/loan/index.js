import Loan from '../../../models/loan.js'
// let clients = [
//     {"id":0, "nimi":"lappa", "perenimi":"kotte", "kontakt":"vaata selja taha janist edasi"},
//     {"id":1, "nimi":"kan", "perenimi":"jängsepp", "kontakt":"vaata selja taha"}
// ];

export default function handler(req, res) {
    switch(req.method) {
        case "GET": actionView(req, res)
        case "POST": actionAdd(req, res)
        default: res.status(405)
    }
}

function actionView(req, res) {
    res.status(200).json(Loan)
}

function actionAdd(req, res) {
    res.status(200).json(Loan)
}
