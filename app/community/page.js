import Link from "next/link";

export default function CommunityPage({params}) {
	return <main>
		<h1>Welcome onto community page!</h1>
		<h3>Want to go to home page?</h3>
		<p><Link href="/">Home page</Link></p>
		<h3>Want to go to all meals?</h3>
		<p><Link href="/meals">Go to all meals page</Link></p>
	</main>
}