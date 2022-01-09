import styled from 'styled-components';

export const StyledProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 22px;
	margin: 0px 0 0 20px;

	.id-info {
		display: flex;
		align-items: center;
	}

	.id-info .user-id {
		font-size: 28px;
		font-weight: 300;
		line-height: 32px;
		margin-right: 15px;
	}

	.stats {
		display: flex;
		gap: 40px;
	}

	.stats .stat-number {
		font-weight: 600;
		margin-right: 2px;
	}

	.bio .user-name {
		font-weight: 600;
	}

	.bio .bio-line {
		margin-top: 5px;
	}
`;
