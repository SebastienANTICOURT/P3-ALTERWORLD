const Joi = require("joi")

const usersSchema = Joi.object({
  firstName: Joi.string().max(45).required(),
  lastName: Joi.string().max(45).required(),
  email: Joi.string().max(45).required(),
  password: Joi.string().max(45).required(),
})

const validateUsers = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body

  const { error } = usersSchema.validate(
    { firstName, lastName, email, password },
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
