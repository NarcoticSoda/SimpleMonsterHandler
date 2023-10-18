import Express  from 'express'

const app = Express();

const port = 8080;

const myResponse = {
    port: port
};

app.get("/", (_req, res) => {
    res.send(`This is a server on ${port} made by the one and the only Gavin "narcotic_soda" Congdon`);
})

app.get("/api", (_req, res) => {
    res.setHeader(`Content type`, `application/json`);
    res.send(JSON.stringify(myResponse));
})

app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})