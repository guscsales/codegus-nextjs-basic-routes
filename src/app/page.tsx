import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold mb-7">Acessar Perfil</h1>

      <div className="flex flex-col">
        <Link href="/profiles/guscsales?lang=pt" className="hover:underline">
          Gus
        </Link>
        <Link href="/profiles/helenitas?lang=en" className="hover:underline">
          Hele
        </Link>
        <Link href="/profiles/tonysales?lang=es" className="hover:underline">
          Tony
        </Link>
      </div>
    </>
  );
}
