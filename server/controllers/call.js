/**
 * @description
 * This is the constroller for the calls
 * @author Punit Singh
 * @since 02 May, 2021
 */

import { CallModel } from '../model';

export default {
	make: (req, res) => {
		CallModel.Call(req.body).then(
			success => res.status(success.code).send(success.data),
			error => res.status(error.code).send(error.data),
		);
	},
	webhook: (req, res) => {
		CallModel.Webhook(req.body).then(
			success => res.status(success.code).send(success.data),
			error => res.status(error.code).send(error.data),
		);
	},
};
