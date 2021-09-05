const app = require('./app');
const port = 4000;

const indexRoutes = require('./index.routes');

/**
 * routes go to child indexRoutes of /api
 */
app.use('/api',indexRoutes);

/**
 * return request not found if there isn't any matching route found
 */
app.use('*',(req,res)=> res.json({error:'request not found'}));

app.listen(port, () => console.log(`The server is started on port ${port}`));

