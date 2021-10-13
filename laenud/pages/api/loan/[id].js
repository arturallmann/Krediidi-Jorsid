
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
    res.status(200).json(loans)
}
function actionDelete(req, res) {
    res.status(200).json(clients)
}
