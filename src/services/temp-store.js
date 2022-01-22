const uploadedPosts = [
	{
		id: 'post1',
		uploadTime: 'Jan 20, 2022',
		stats: {
			likeCount: 30,
			commentCount: 12,
		},
		images: [
			{
				url: '/images/posts/post-1.jpg',
			},
			{
				url: '/images/posts/post-2.jpg',
			},
			{
				url: '/images/posts/post-3.jpg',
			},
		],
	},
	{
		id: 'post2',
		uploadTime: 'Jan 11, 2022',
		stats: {
			likeCount: 300,
			commentCount: 122,
		},
		images: [
			{
				url: '/images/posts/post-3.jpg',
			},
		],
	},
	{
		id: 'post3',
		uploadTime: 'Jan 2, 2022',
		stats: {
			likeCount: 130,
			commentCount: 57,
		},
		images: [
			{
				url: '/images/posts/post-4.jpg',
			},
		],
	},
	{
		id: 'post4',
		uploadTime: 'Oct 19, 2021',
		stats: {
			likeCount: 138,
			commentCount: 45,
		},
		images: [
			{
				url: '/images/posts/post-5.jpg',
			},
			{
				url: '/images/posts/post-6.jpg',
			},
			{
				url: '/images/posts/post-7.jpg',
			},
		],
	},
	{
		id: 'post5',
		uploadTime: 'July 23, 2021',
		stats: {
			likeCount: 89,
			commentCount: 8,
		},
		images: [
			{
				url: '/images/posts/post-8.jpg',
			},
		],
	},
	{
		id: 'post6',
		uploadTime: 'Feb 20, 2021',
		stats: {
			likeCount: 470,
			commentCount: 212,
		},
		images: [
			{
				url: '/images/posts/post-9.jpg',
			},
		],
	},
	{
		id: 'post7',
		uploadTime: 'Jan 1, 2021',
		stats: {
			likeCount: 376,
			commentCount: 142,
		},
		images: [
			{
				url: '/images/posts/post-10.jpg',
			},
		],
	},
];

const comments = [
	{
		commentBy: 'vijay.malik.3112',
		timestamp: 1642862010164,
		comment: 'A sample comment by the original poster',
		replies: [
			{
				commentBy: 'vijay.malik.3112',
				timestamp: 1642862000164,
				comment: 'reply 1',
			},
			{
				commentBy: 'vijay.malik.3112',
				timestamp: 1642862000163,
				comment: 'reply 2',
			}
		]
	}, {
		commentBy: 'vijay.malik.3112',
		timestamp: 1642861010164,
		comment: 'Live a life worth telling a story about.',
		replies: [
			{
				commentBy: 'ram',
				timestamp: 1642861000164,
				comment: 'reply 1',
			},
			{
				commentBy: 'vijay.malik.3112',
				timestamp: 1642861000124,
				comment: 'reply 2',
			}
		]
	},
	{
		commentBy: 'vijay.malik.3112',
		timestamp: 1642861910164,
		comment: 'Live a life worth telling a story about.',
		replies: [
			{
				commentBy: 'ram',
				timestamp: 1642861930164,
				comment: 'reply 1',
			},
			{
				commentBy: 'vijay.malik.3112',
				timestamp: 1642861910364,
				comment: 'reply 2',
			}
		]
	},
	{
		commentBy: 'vijay.malik.3112',
		timestamp: 1642761910164,
		comment: 'Live a life worth telling a story about.',
		replies: [
			{
				commentBy: 'ram',
				timestamp: 1642761900164,
				comment: 'reply 1',
			},
			{
				commentBy: 'vijay.malik.3112',
				timestamp: 1642761710164,
				comment: 'reply 2',
			}
		]
	},
	{
		commentBy: 'vijay.malik.3112',
		timestamp: 1642881010164,
		comment: 'Empty comment 1'
	},
	{
		commentBy: 'vijay.malik.3112',
		timestamp: 1642881090164,
		comment: 'Empty comment 2'
	},
	{
		commentBy: 'vijay.malik.3112',
		timestamp: 1642881000164,
		comment: 'Empty comment 3'
	}
];

export const getAllUploadedPosts = () => uploadedPosts;

export const getPostDetails = (postId) => uploadedPosts.filter((post) => post.id === postId);

export const getComments = () => comments;
