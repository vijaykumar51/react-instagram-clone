import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as HomeSvg } from './svg/home.svg';
import { ReactComponent as DirectMessageSvg } from './svg/direct-message.svg';
import { ReactComponent as ActivitySvg } from './svg/activity.svg';
import { ReactComponent as NewPostSvg } from './svg/new-post.svg';
import { ReactComponent as ExploreSvg } from './svg/explore.svg';
import { ReactComponent as UserAvatarSvg } from './svg/user-avatar.svg';
import { ReactComponent as SettingsSvg } from './svg/settings.svg';

import { StyledIcon } from './Icon.styled';

function Icon({ type }) {
	if (type === 'home') {
		return <HomeSvg />;
	}
	if (type === 'direct-message') {
		return <DirectMessageSvg />;
	}
	if (type === 'new-post') {
		return <NewPostSvg />;
	}
	if (type === 'explore') {
		return <ExploreSvg />;
	}
	if (type === 'activity') {
		return <ActivitySvg />;
	}
	if (type === 'avatar') {
		return <UserAvatarSvg />;
	}
	if (type === 'settings') {
		return <SettingsSvg />;
	}

	return <StyledIcon className={type} />;
}

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;
