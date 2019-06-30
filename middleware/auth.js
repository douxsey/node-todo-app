export function auth(req, res, next) {
  let authParams = req.query.auth;
  let isAuth = authParams && authParams == 1;
  if (isAuth) {
    return next()
  }

  return res.status(401).send({error: 'Not authenticated'})
}