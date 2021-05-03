/**
 * This is the joi validator utility
 * @author Punit Singh
 * @since 02 May, 2021
 */

import Joi from 'joi';

export default (body, schema) => new Promise(async (resolve, reject) => {
	Joi.validate(body, schema, { abortEarly: false }, (err, value) => {
		if (err) {
			return reject(err);
		}
		return resolve();
	});
});
