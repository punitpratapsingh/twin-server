/**
 * This is the route handler
 * @description
 * @author Punit Singh
 * @since 02 May, 2021
 */

import {
	CallControllers,
} from '../controllers';
import { CallValidator } from '../validation';

const prefix = '/api/call/';

export default (app) => {
	app.post(`${prefix}make`, CallValidator.make, CallControllers.make);
	app.post(`${prefix}webhook`, CallControllers.webhook);
};
