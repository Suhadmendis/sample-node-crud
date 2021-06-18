const Joi = require("Joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    humidity: {
      type: Number,
      required: true,
      minlength: 1,
      maxlength: 5,
    },
    temperature: {
      type: Number,
      required: true,
      minlength: 1,
      maxlength: 5,
    },
    min_temperature: {
      type: Number,
      required: true,
      minlength: 1,
      maxlength: 5,
    },
    max_temperature: {
      type: Number,
      required: true,
      minlength: 1,
      maxlength: 50,
    }
  })
);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;