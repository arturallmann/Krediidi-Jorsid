import db from '../../../models'
export default function handler(req, res) {
    switch(req.method) {
        case "GET": actionView(req, res); break;
        case "POST": actionCreate(req, res); break;
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
async function actionCreate(req, res) {
    let model = db.Client.build(req.body);
    await model.save()
        .then(function(model){
            
            res.status(201).json(model);
        }).catch(function (err) {
            res.status(500).json(err.errors);
        });
}
async function actionUpdate(req, res) {
    const model = await db.Client.findOne({
        limit: 1,
        where: {
            id: req.query.id
        }
    });
    if (model) {
        model.update(req.body)
            .then(function(model){
                res.status(201).json(model);
            }).catch(function (err) {
                //res.status(500).json(err);
                res.status(500).json(err.errors);
            });
    } else {
        res.status(404).json({message: "Instance not found"});
    }
}
function actionDelete(req, res) {
    res.status(200).json("")
}
