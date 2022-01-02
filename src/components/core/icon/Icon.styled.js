import styled from 'styled-components';

export const StyledIcon = styled.span`
	background-image: url('images/instagram-icons.png');
	background-size: 440px 411px;
	display: inline-block;

	&.logo-large {
		background-position: 0 -130px;
		height: 51px;
		width: 175px;
	}

	&.logo-small {
		background-position: -440px -128px;
		height: 52px;
		width: 175px;
		transform: scale(0.7);
	}
`;
