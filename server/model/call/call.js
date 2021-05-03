import {
	STATUS_CODES,
} from '../../constants';
import { TwilioUtility } from '../../utility';
import { CallModel } from '..';
const db = require("../../db/index.js");
const Users = db.users;
/**
 * @description handle the placing of a call
 * @author Punit Singh
 * @since 02 May, 2021
 */

export default ({
	callDuration,
	from,
	to,
}) => new Promise(async (resolve, reject) => {
	try {
		// make call using twilio
		const call = await TwilioUtility.MakeCall({
			from,
			to,
		});
         
		if (!from || !to) {
			res.status(400).send({
			  message: "These fields are not be empty!"
			});
			return;
		  }
		
		  // Create a call data for db
		  const user = {
			ToName: toName,
			FromName: fromName,
			ToNumber: to,
			FromNumber: from,
			CallDuration: callDuration
		  };
		
		  // Save User call Data in the database
		  Users.create(user)
			.then(data => {
			  res.send(data);
			})
			.catch(err => {
			  res.status(500).send({
				message:
				  err.message || "Some error occurred while creating the User call data."
			  });
			});


		// call the cut funtion after said duation to terminate the call programatically
		setTimeout(() => CallModel.Cut(), 1000 * 60 * callDuration);
		return resolve({ code: STATUS_CODES.SUCCESS, data: { message: 'Call is in progress.', data: call } });
	} catch (err) {
		return reject({ code: STATUS_CODES.EXCEPTION, data: { error: err, message: err.message } });
	}
});
