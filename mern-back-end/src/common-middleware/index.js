const jwt = require('jsonwebtoken');


exports.requireSignIn = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET); //here user is _id which we have passed.
    // console.log(user);
    req.user = user;
  }else{
    return res.status(400).json({message: 'Authorization Required'});
  }
  next();
};

exports.userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.json({ message: "Access denied" });
  }
  next();
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.json({ message: "Access denied" });
  }
  next();
};
