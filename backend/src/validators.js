const Joi = require("joi")

const usersSchema = Joi.object({
  firstName: Joi.string().max(40).required(),
  lastName: Joi.string().max(40).required(),
  email: Joi.string().email().max(40).required(),
  password: Joi.string().min(8).max(45).required(),
  address: Joi.string().max(80).required(),
  zipcode: Joi.string()
    .length(5)
    .pattern(/^[0-9]+$/)
    .required(),
  city: Joi.string().max(30).required(),
})

const validateUsers = (req, res, next) => {
  const { firstName, lastName, email, password, address, zipcode, city } =
    req.body
  const { error } = usersSchema.validate(
    { firstName, lastName, email, password, address, zipcode, city },
    { abortEarly: false }
  )
  if (error) {
    res.status(422).json({ validationErrors: error.details })
  } else {
    next()
  }
}

module.exports = {
  validateUsers,
}
