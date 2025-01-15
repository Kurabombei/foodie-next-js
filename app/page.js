import Link from "next/link";
import Header from "@mentee-dash/app/components/Header";

export default function Home() {
    console.log("Hello!!!")
  return (
      <main>
        <Header />
        <p>🔥 Let&apos;s get started! 🔥</p>
          <p><Link href="/about">About page</Link></p>
      </main>
  );
}
