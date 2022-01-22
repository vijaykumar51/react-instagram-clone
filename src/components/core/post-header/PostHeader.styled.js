import styled from 'styled-components';

export const StyledPostHeader = styled.div`
	border-bottom: 1px solid rgba(239, 239, 239);
	display: flex;
	gap: 15px;
	justify-content: space-between;
	padding: 14px 16px;

	.info-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
	}

	.info-container .username {
		font-size: 14px;
		font-weight: 600;
	}

	.info-container .location-info {
		font-size: 12px;
		font-weight: 400;
	}
`;
