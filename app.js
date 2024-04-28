const { Sequelize } = require('sequelize');
const User=require('./models/user');
const teacher=require('./models/teacher')
const student=require('./models/student')
const employee=require('./models/employee')
const userController=require('./controller/userController')
const teacherController=require('./controller/teacherController')
const studentController=require('./controller/studentController')
const employeeController=require('./controller/employeeController')

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'ct',
});

module.exports = sequelize;
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); 

const app = express();
const port = 3000;


app.use(bodyParser.json());


db.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
  
  app.post('/api/user',userController.InputUser);
  app.get('/api/users',userController.findUser);
  app.post('/api/teacher',teacherController.Inputteacher);
  app.get('/api/teachers',teacherController.findteacher);
  app.post('/api/student',studentController.Inputstudent);
  app.get('/api/students',studentController.findstudent);
  app.post('/api/employee',employeeController.Inputemployee);
  app.get('/api/employees',employeeController.findemployee);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });