import Link from "next/link";

export default function MealSharePage({params}) {
	return <main>
		<h1>Welcome onto share page!</h1>
		<h3>Want to share it with community?</h3>
		<p><Link href="/community">Go to community page</Link></p>
		<h3>Want to go back?</h3>
		<p><Link href="/meals">Go to all meals page</Link></p>
	</main>
}