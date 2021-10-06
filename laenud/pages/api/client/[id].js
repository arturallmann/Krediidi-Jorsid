let clients = [
    {"id":0, "nimi":"lappa", "perenimi":"kotte", "kontakt":"vaata selja taha janist edasi"},
    {"id":1, "nimi":"kan", "perenimi":"jängsepp", "kontakt":"vaata selja taha"}
];

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
    res.status(200).json(clients.filter(c=>c.id==req.query.id))
}

function actionUpdate(req, res) {
    res.status(200).json(clients)
}
function actionDelete(req, res) {
    res.status(200).json(clients)
}
