import styled from 'styled-components';

export const StyledPostWithNavigation = styled.div`
	display: flex;
	width: 100%;

	.nav-link-container {
		width: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-link {
		border-radius: 50%;
		border: none;
		background: #fff;
		cursor: pointer;
		display: inline-flex;
		padding: 8px;
	}

	.next-item-link svg {
		transform: rotate(90deg);
	}
	.previous-item-link svg {
		transform: rotate(-90deg);
	}

	.post-container-area {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		max-height: 100%;
	}
`;
