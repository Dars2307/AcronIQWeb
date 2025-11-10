import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-charcoal border-b-thin border-bronze">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-8 py-6">
        <Image
          src="/brand/acroniq-seal.svg"
          alt="AcronIQ Strategic Intelligence Seal"
          width={40}
          height={44}
          className="select-none pointer-events-none"
        />

        <span className="font-serif text-bronze tracking-tight text-sm uppercase select-none">
          ACRONIQ
        </span>
      </div>
    </header>
  );
}
