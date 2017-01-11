var LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcryptjs'),
    models = require('../models/');

module.exports = function(passport) {
  
  passport.use('local', new LocalStrategy(
    function(username, password, done) {
      console.log("local Strategy" + username +"  "+password);
      models.User.findOne({
        where: {
          'username': username
        }
      }).then(function (user) {
        console.log(user.password)
        console.log(password)
        if (user == null) {
          return done(null, false, { message: 'Incorrect credentials.' })
        }
        
        var hashedPassword = bcrypt.hashSync(password, user.salt)
        
        if (user.password === hashedPassword) {
          console.log("found user")
          return done(null, user)
        }
        console.log("wrong password")
        return done(null, false, { message: 'Incorrect credentials.' })
      })
    }
  ))

  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    models.User.findOne({
      where: {
        'id': id
      }
    }).then(function (user) {
      if (user == null) {
        done(new Error('Wrong user id.'))
      }
      
      done(null, user)
    })
  })
}