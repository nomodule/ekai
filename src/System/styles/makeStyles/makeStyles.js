export default function makeStyles(styles, stylesPrefix) {
	let finalStyles = {};
	Object.keys(styles).forEach(key => {
		finalStyles[`${stylesPrefix}-${key}`] = styles[key];
	});
	return finalStyles;
}
