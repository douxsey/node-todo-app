export function logger(req, res, next) {
  console.log('Params ', req.params)
  console.log('Query ', req.query)
  console.log('Body ', req.body)

  next();
}