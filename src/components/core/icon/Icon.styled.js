import styled from 'styled-components';

export const StyledIcon = styled.span`
	background-image: url('/images/instagram-icons.png');
	background-size: 440px 411px;
	cursor: pointer;
	display: inline-block;

	&.logo-large {
		background-position: 0 -130px;
		height: 51px;
		width: 175px;
	}

	&.logo-small {
		background-position: -269px -79px;
		height: 31px;
		width: 103px;
		display: inline-block;
		background-size: 261%;
	}
`;
