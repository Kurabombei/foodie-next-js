import Link from "next/link";
import Header from "@foodie-dash/app/components/Header";

export default function Home() {
    console.log("Hello!!!")
  return (
      <main>
        <Header />
        <p>🔥 Let&apos;s get started! 🔥</p>
          <p><Link href="/about">About page</Link></p>
          <p><Link href="/blog">Blog page</Link></p>
      </main>
  );
}
