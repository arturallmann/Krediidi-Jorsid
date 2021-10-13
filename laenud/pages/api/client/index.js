import db from '../../../models'

export default function handler(req, res) {
    switch(req.method) {
        case "GET": actionList(req, res); break;
        case "POST": actionCreate(req, res); break;
        default: res.status(405)
    }
}

async function actionList(req, res) {
    const models = await db.Client.findAll();
    res.status(200)/json(models)
}

async function actionCreate(req, res) {
    let model = db.Client.build(req.body);
    await model.save();
    res.status(201).json(model);
}