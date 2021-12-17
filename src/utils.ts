export function secretCheck(req, res, next) {
  console.log(req.headers['sws-secret-key'], process.env.SECRET_KEY);
  if (req.headers['sws-secret-key'] !== process.env.SECRET_KEY) {
    res.status(403).send('Access is denied!');
    return;
  }
  next();
};
