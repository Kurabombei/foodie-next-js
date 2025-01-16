import Link from "next/link";

export default function BlogPostPage({ params }) {

	return <main>
		<h2>The Blog post</h2>
		<p>{params?.slug}</p>
		<p><Link href="/blog">All blog posts</Link></p>
	</main>
}