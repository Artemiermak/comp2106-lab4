/**
 * Created by RFreeman on 2/8/2017.
 */

// create an array of global variables
module.exports = {
  // db: 'mongodb://localhost/comp2106-w2017' // local mongodb (no auth)
   db: 'mongodb://comp2106artemdb:Artem+123@ds147079.mlab.com:47079/comp2106artem',
    facebook: {
      clientID: '1879734885576256',
      clientSecret: '4be4e327683eace35896162b1706af99',
      callbackURL: 'http://localhost:3000/facebook/callback'
    },
    google: {
       clientID: '305060699420-9lj5h7g2075h9u6ev3srrjfk06l45f5n.apps.googleusercontent.com',
       clientSecret: 'FgTaF3OHTyGcZw8zH_HWGTfJ',
       callbackURL: 'http://localhost:3000/google/callback'
    }
};