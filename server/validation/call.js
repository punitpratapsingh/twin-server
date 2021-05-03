/**
 * This is the validator for calls
 * @author Punit Singh
 * @since 02 May, 2021
 */

import { ValidatorUtility } from '../utility';
import { CallJoiSchema } from '../joiSchemas';

const callValidationHandler = ({
	req,
	res,
	next,
	schema,
}) => {
	ValidatorUtility(req.body, schema).then(() => {
		next();
	}).catch((err) => {
		res.status(400).send({ code: 400, message: 'Malformed Request', error: err.details });
	});
};

export default {
	make: (req, res, next) => callValidationHandler({
		req, res, next, schema: CallJoiSchema.make,
	}),
};
