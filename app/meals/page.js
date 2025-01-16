import Link from "next/link";

export default function AllMealsPage() {
	return <main>
		<h1>This is all meals page!</h1>
		<p>Feel free to navigate to these tasty meals down there!</p>
		<p><Link href="/meals/borshch">Borshch</Link></p>
		<p><Link href="/meals/kutia">Kutia</Link></p>
		<p><Link href="/meals/syrnyky">Syrnyky</Link></p>
		<h3>Want to go back?</h3>
		<p><Link href="/">Go to home page</Link></p>
	</main>
}