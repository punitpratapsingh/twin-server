import {
	STATUS_CODES,
} from '../../constants';
import { TwilioUtility } from '../../utility';

/**
 * @description handle the termination of a call
 * @author Punit Singh
 * @since 02 May, 2021
 */

export default ({ sid }) => new Promise(async (resolve, reject) => {
	try {
		await TwilioUtility.CutCall({
			sid,
		});
		return resolve({ code: STATUS_CODES.SUCCESS, data: { message: 'Call is cut.' } });
	} catch (err) {
		return reject({ code: STATUS_CODES.EXCEPTION, data: { error: err, message: err.message } });
	}
});
