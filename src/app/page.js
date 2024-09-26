import Image from "next/image";
import Logo from "./public/images/logoat.png"
import ImportantNote from "./components/notes/importantNotes"

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-slate-700 font-bold">Importantes</h1>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ImportantNote />
          <ImportantNote />
          <ImportantNote />
          
          <ImportantNote />
          <ImportantNote />
          <ImportantNote />
        </div>
        <h1 className="text-slate-700 font-bold">Basicas</h1>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ImportantNote />
          <ImportantNote />
          <ImportantNote />
        </div>
        <h1 className="text-slate-700 font-bold">Concluídas</h1>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ImportantNote />
          <ImportantNote />
          <ImportantNote />
        </div>
        <Image
          className="dark:invert"
          src={Logo}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
