import styled from 'styled-components';

// TODO: fix the hard-coded widths of 935px;

export const StyledProfile = styled.div`
	.posts-pages-nav {
		margin: 10px 0;
		border-top: 1px solid rgb(219, 219, 219);
		max-width: 935px;
		margin: auto;
		margin-top: 10px;
	}

	.posts-pages-nav nav {
		display: flex;
		gap: 60px;
		justify-content: center;
	}

	.posts-nav-link {
		border-top: 1px solid transparent;
		color: rgb(142, 142, 142);
		display: flex;
		align-items: center;
		font-size: 12px;
		font-weight: 600;
		gap: 5px;
		margin-top: -1px;
		padding: 15px 0;
		text-decoration: none;
	}

	.posts-nav-link.active-link {
		border-top-color: rgb(38, 38, 38);
		color: rgb(38, 38, 38);
	}

	.all-posts-container {
		max-width: 935px;
		margin: auto;
	}
`;
