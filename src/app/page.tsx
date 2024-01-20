import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold mb-7">Acessar Perfil</h1>

      <div className="flex flex-col">
        <Link href="/profiles/guscsales" className="hover:underline">Gus</Link>
        <Link href="/profiles/helenitas" className="hover:underline">Hele</Link>
        <Link href="/profiles/tonysales" className="hover:underline">Tony</Link>
      </div>
    </>
  );
}
