import React from 'react';

// TODO: fix this
if (process.env.NODE_ENV === 'development') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render');

	whyDidYouRender(React, {
		trackAllPureComponents: true,
	});
}
