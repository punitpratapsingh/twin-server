/**
 * joi schemas for call
 * @author Punit Singh
 * @since 02 May, 2021
 */

const Joi = require('joi');

const stringType = Joi.string();
const numberType = Joi.number();

const make = Joi.object().keys({
	from: stringType.required(),
	to: stringType.required(),
	fromName: stringType.optional(),
	toName: stringType.optional(),
	callDuration: numberType.required(),
});

export default {
	make,
};
