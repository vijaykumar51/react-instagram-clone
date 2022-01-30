import PropTypes from 'prop-types';
import React from 'react';
import { StyledIcon } from './Icon.styled';
import { ReactComponent as ActivitySvg } from './svg/activity.svg';
import { ReactComponent as AngularBracket } from './svg/angular-bracket.svg';
import { ReactComponent as Bookmark } from './svg/bookmark.svg';
import { ReactComponent as CloseSvg } from './svg/close.svg';
import { ReactComponent as Comment } from './svg/comment.svg';
import { ReactComponent as DirectMessageSvg } from './svg/direct-message.svg';
import { ReactComponent as ExploreSvg } from './svg/explore.svg';
import { ReactComponent as HomeSvg } from './svg/home.svg';
import { ReactComponent as Like } from './svg/like.svg';
import { ReactComponent as Media } from './svg/media.svg';
import { ReactComponent as MultiImageSvg } from './svg/multi-image-highlighter.svg';
import { ReactComponent as NavLinkPostsSvg } from './svg/nav-link-posts.svg';
import { ReactComponent as NavLinkSavedSvg } from './svg/nav-link-saved.svg';
import { ReactComponent as NavLinkTaggedSvg } from './svg/nav-link-tagged.svg';
import { ReactComponent as NewPostSvg } from './svg/new-post.svg';
import { ReactComponent as PostActions } from './svg/post-actions.svg';
import { ReactComponent as SettingsSvg } from './svg/settings.svg';
import { ReactComponent as Share } from './svg/share.svg';
import { ReactComponent as UserAvatarSvg } from './svg/user-avatar.svg';

function Icon({ type }) {
	if (type === 'home') return <HomeSvg />;
	if (type === 'direct-message') return <DirectMessageSvg />;
	if (type === 'new-post') return <NewPostSvg />;
	if (type === 'explore') return <ExploreSvg />;
	if (type === 'activity') return <ActivitySvg />;
	if (type === 'avatar') return <UserAvatarSvg />;
	if (type === 'settings') return <SettingsSvg />;
	if (type === 'nav-link-posts') return <NavLinkPostsSvg />;
	if (type === 'nav-link-saved') return <NavLinkSavedSvg />;
	if (type === 'nav-link-tagged') return <NavLinkTaggedSvg />;
	if (type === 'multi-image') return <MultiImageSvg />;
	if (type === 'close') return <CloseSvg />;
	if (type === 'post-actions') return <PostActions />;
	if (type === 'like') return <Like />;
	if (type === 'comment') return <Comment />;
	if (type === 'share') return <Share />;
	if (type === 'bookmark') return <Bookmark />;
	if (type === 'angular-bracket') return <AngularBracket />;
	if (type === 'media') return <Media />;

	return <StyledIcon className={type} />;
}

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;
