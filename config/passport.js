const { authSecret } = require('../.env')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    const strategy = new Strategy(params, ( payload, done ) => {
        const uid = payload.id ? payload.id : payload
        app.db('users').where({ id: uid}).first()
            .then( user => {
                if (user) {
                    done(null, {id: user.id, email: user.email})
                } else {
                    done(null, false)
                }
            }).catch( err => done(err, false))
    })

    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}