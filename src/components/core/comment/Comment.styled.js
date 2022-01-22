import styled from 'styled-components';

export const StyledComment = styled.div`
	display: flex;
	gap: 18px;
	padding-top: 16px;

	.author {
		font-size: 14px;
		font-weight: 600;
		margin-right: 10px;
	}

	.text {
		color: rgba(38, 38, 38, 1);
	}

	.comment-stats {
		color: rgb(142, 142, 142);
		font-size: 12px;
		font-weight: 400;
		margin-top: 16px;
	}
`;
