import { GetStaticProps } from 'next';
import { Layout } from '../components/Layout';
import { Post } from '../components/Post';
import { getAllPostsData } from '../lib/posts';
import { PostType } from '../lib/types';

type PropsType = {
	posts: PostType[];
};

export default function Blog({ posts }: PropsType) {
	return (
		<Layout title="Blog">
			<ul className="m-10">{posts && posts.map(post => <Post key={post.id} post={post} />)}</ul>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getAllPostsData();
	return {
		props: { posts }
	};
};
