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

const updateSchema = Joi.object({
  firstName: Joi.string().max(40).optional().allow(null),
  lastName: Joi.string().max(40).optional().allow(null),
  email: Joi.string().email().max(40).optional().allow(null),
  address: Joi.string().max(80).optional().allow(null),
  zipcode: Joi.string()
    .length(5)
    .pattern(/^[0-9]+$/)
    .optional().allow(null),
  city: Joi.string().max(30).optional().allow(null),
})

const validateUpdate = (req, res, next) => {
  const { firstName, lastName, email, address, zipcode, city } =
    req.body
    const { error } = updateSchema.validate(
      { firstName, lastName, email, address, zipcode, city },
      { abortEarly: false }
    );
  
    if (error) {
      // Sending a 422 Unprocessable Entity status code with the validation errors
      return res.status(422).json({
        message: "Validation error",
        validationErrors: error.details.map(detail => detail.message)
      });
    }
    next()

}



module.exports = {
  validateUsers,
  validateUpdate,
}
