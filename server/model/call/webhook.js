import {
	STATUS_CODES,
} from '../../constants';

/**
 * @description handle the live status of call
 * @author Punit Singh
 * @since 02 May, 2021
 */

export default body => new Promise(async (resolve, reject) => {
	try {
		console.log(body);
		return resolve({ code: STATUS_CODES.SUCCESS, data: { message: 'Live status of call.' } });
	} catch (err) {
		return reject({ code: STATUS_CODES.EXCEPTION, data: { error: err, message: err.message } });
	}
});
