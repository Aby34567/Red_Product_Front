//require('dotenv').config()
//const express = require('express')
//const mongoose = require('mongoose')
//const MONGOURL = process.env.MONGO_URL
//const workoutRoutes = require('./routes/workouts')
//const userRoutes = require('./routes/user')
// eslint-disable-next-line no-unused-vars
//const Axios = require

// express app
//const app = express()
// middleware
//app.use(express.json())
//app.use((req, res, next) => {
  //console.log(req.path, req.method)
  //next()
//})

// routes
//app.use('/api/workouts', workoutRoutes)
//app.use('/api/user', userRoutes)

// connect to db
//mongoose.connect(MONGOURL)
  //.then(() => {
    //console.log("Database is connected successfully.");
    // listen for requests
    //app.listen(process.env.PORT, () => {
      //console.log('connected to server is running on port & listening on port', process.env.PORT);
    //})
  //})
  //.catch((error) => {
    //console.log(error)
//})
//Axios.get('/api/resource')
  //.then(response => {
    // Traitement de la réponse
  //})
  //.catch(error => {
    //if (error.response) {
      // Le serveur a répondu avec un code d'état différent de 2xx
      //console.log(error.response.data); // Données de la réponse
      //console.log(error.response.status); // Code d'état HTTP
      //console.log(error.response.headers); // En-têtes de la réponse
    //} else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      //console.log(error.request);
    //} else {
      // Une erreur s'est produite lors de la configuration de la requête
      //console.log('Error', error.message);
    //}
    //console.log(error.config); // Configuration de la requête Axios
  //});;

