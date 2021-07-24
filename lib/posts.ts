import fetch from 'node-fetch';
import { PostType } from './types';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPostsData = async () => {
	const res = await fetch(new URL(apiUrl));
	const posts = (await res.json()) as PostType[];
	return posts;
};

export const getAllPostIds = async () => {
	const posts = await getAllPostsData();

	return posts.map(post => {
		return {
			params: {
				id: String(post.id)
			}
		};
	});
};

export const getPostData = async (id: string) => {
	const res = await fetch(new URL(`${apiUrl}/${id}/`));
	const post = (await res.json()) as PostType;
	return post;
};
