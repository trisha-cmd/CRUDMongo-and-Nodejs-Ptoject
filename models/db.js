const mongoose = require ('mongoose');

let CONNECTION_URL='mongodb+srv://trishahazra:trisha1234@cluster0.ppsj6.mongodb.net/EmployeeDb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 2410;

mongoose.connect(CONNECTION_URL)
.then(()=> console.log(`connection started on port http://localhost:${PORT}`))
.catch(err=> console.log(err));
require('./employee.model');