import db from '../../../models'
export default function handler(req, res) {
    switch(req.method) {
        case "GET": actionView(req, res); break;
        case "POST":
        case "PUT": actionUpdate(req, res); break;
        case "DELETE": actionDelete(req, res); break;
        default: res.status(405); break;
    }
}

async function actionView(req, res) {
    let model = await db.Loan.findOne({
        where: {
            id: req.query.id
        }
    });
    console.log(model)
    if(!model)
        res.status(404).json({error: "not found"})
    else 
        res.status(200).json(model)

}

function actionUpdate(req, res) {
    res.status(200).json("")
}
function actionDelete(req, res) {
    res.status(200).json("")
}
