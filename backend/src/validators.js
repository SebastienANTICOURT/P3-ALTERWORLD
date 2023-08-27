const Joi = require("joi")

const usersSchema = Joi.object({
  prenom: Joi.string().max(45).required(),
  nom: Joi.string().max(45).required(),
  email: Joi.string().max(45).required(),
  password: Joi.string().max(45).required(),
})

const validateUsers = (req, res, next) => {
  const { prenom, nom, email, password } = req.body

  const { error } = usersSchema.validate(
    { prenom, nom, email, password },
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
