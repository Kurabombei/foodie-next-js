import Link from "next/link";

export default function MealDetailsPage({params}) {
	return <main>
		<h1>Welcome onto meal details!</h1>
		<p>This meal post is about {params.mealName}</p>
		<h3>Want to share it with community?</h3>
		<p><Link href="/meals/share">Go to share page</Link></p>
		<h3>Want to go back?</h3>
		<p><Link href="/meals">Go to all meals page</Link></p>
	</main>
}