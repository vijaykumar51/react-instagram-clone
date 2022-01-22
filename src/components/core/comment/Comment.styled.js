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

	.show-hide-reply-link {
		background: none;
		border: none;
		color: rgba(142, 142, 142, 1);
		cursor: pointer;
		display: flex;
		align-items: center;
		font-size: 12px;
		font-weight: 600;
		margin: 16px 0px;
		padding: 0; 
	}

	.show-hide-reply-link:before {
		border-bottom: 1px solid rgb(142, 142, 142);
		content: '';
		display: inline-block;
		margin-right: 20px;
		vertical-align: middle;
		width: 24px;
		

	}
`;
