import {
	TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, WEBHOOK_ENDPOINT,
} from '../constants';

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const MakeCall = ({
	from,
	to,
}) => new Promise(async (resolve, reject) => {
	client.calls
		.create({
			twiml: '<Response><Say>Testing call!</Say></Response>',
			statusCallback: WEBHOOK_ENDPOINT,
			statusCallbackMethod: 'POST',
			from,
			to,
		})
		.then(call => resolve(call))
		.catch(err => reject(err));
});

const CutCall = ({
	callId,
}) => new Promise(async (resolve, reject) => {
	client.calls(callId)
		.update({ status: 'completed' })
		.then(call => resolve(call))
		.catch(err => reject(err));
});

export default {
	MakeCall,
	CutCall,
};
