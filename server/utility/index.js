/**
 * This is the indexer for utilities
 * @author Punit Singh
 * @since 02 May, 2021
 */

import fs from 'fs';

const skip = ['index.js', 'videoUpload.js'];
const files = fs.readdirSync(__dirname);

files.map((file) => {
	const found = skip.find(skipThisFile => skipThisFile === file);
	if (!found) {
		const fileName = `${file.charAt(0).toUpperCase()}${file.split('.')[0].substring(1, file.length)}`;
		if (!fileName.startsWith('.')) { module.exports[`${fileName}Utility`] = require(`./${file}`).default; }
	}
});
