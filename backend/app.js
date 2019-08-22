const express = require('express');
const PORT = process.env.PORT || 4000;
const rootRouter = require('./router/root')
const app = express();

app.locals.pretty = true;

app.use(rootRouter);

app.listen(PORT, function () {
    console.log(`server start! http://127.0.0.1:${PORT}`)
})
// supervisor app.js