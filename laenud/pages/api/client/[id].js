// let clients = [
//     {"id":0, 
//     "nimi":"lappa", 
//     "perenimi":"kotte", 
//     "kontakt":"vaata selja taha janist edasi", 
//     "kontonum": "EE12 000001",
//     "juriidilineIsik": false
// },

//     {"id":1, 
//     "nimi":"kan", 

//     "perenimi":"jängsepp", 
//     "kontakt":"vaata selja taha",
//     "kontonum": "EE12 000002",
//     "juriidilineIsik": false}
// ];

export default function handler(req, res) {
    switch(req.method) {
        case "GET": actionView(req, res)
        case "POST":
        case "PUT": actionUpdate(req, res)
        case "DELETE": actionDelete(req, res)
        default: res.status(405)
    }
}

function actionView(req, res) {
    res.status(200).json(Client.filter(c=>c.id==req.query.id))
}

function actionUpdate(req, res) {
    res.status(200).json(Client)
}
function actionDelete(req, res) {
    res.status(200).json(Client)
}
