import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Next 15 Interview – MUI + Redux + Zustand + RHF + Firebase</h1>
      <p style={{ marginTop: 8 }}>
        Go to <Link href="/shop">/shop</Link> to begin.
      </p>
    </main>
  );
}
