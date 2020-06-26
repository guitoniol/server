import express from 'express'; 
import mongoose from 'mongoose'
import cors from 'cors';

import routes from './routes';

const bd = process.env.bd || require('./auth.json').bd;
const app = express();
console.log(bd);

mongoose.connect(`mongodb+srv://${bd}@cluster0-8coeh.mongodb.net/ecomilhas?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

console.log("'-'")
app.listen(process.env.PORT || 570900);

