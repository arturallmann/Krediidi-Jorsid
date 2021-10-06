let clients = [
    {"id":0, "nimi":"lappa", "perenimi":"kotte", "kontakt":"vaata selja taha janist edasi"},
    {"id":1, "nimi":"kan", "perenimi":"jängsepp", "kontakt":"vaata selja taha"}
];

export default function handler(req, res) {
    switch(req.method) {
        case "GET": actionView(req, res)
        case "POST":
        case "PUT": actionUpdate(req, res)
    }
}