const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

router.post(
    '/',
    // validateSignup,
    async (req, res) => {
      const { user } = req
      const { email, password, username, firstName, lastName } = req.body;

      // console.log(user)
      if(user){
        if(user.email === email){
          res.status(403)
          return res.json({
          "message": "User already exists",
          "statusCode": 403,
          "errors": {
          "email": "User with that email already exists"
        }
          })
        }
      }

      const abcuser = await User.signup({ email, username, password, firstName, lastName });

      await setTokenCookie(res, abcuser);

      return res.json({
        "id": abcuser.id,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "username": username
      });
    }
  );


module.exports = router;
