import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <header className="flex mx-auto justify-center py-5">
        <Link
          href="/"
          locale="en"
          className="bg-blue-50 rounded hover:bg-slate-300 py-2 px-5 mr-2"
        >
          English
        </Link>
        <Link
          href="/"
          locale="nl"
          className="bg-blue-50 rounded hover:bg-slate-300 py-2 px-5 mr-2"
        >
          Dutch
        </Link>
        <Link
          href="/"
          locale="hi"
          className="bg-blue-50 rounded hover:bg-slate-300 py-2 px-5 mr-2"
        >
          Hindi
        </Link>
      </header>
      <main className="flex min-h-[400px] flex-col items-start justify-start p-24">
        <h3 className="text-2xl bold mb-4">{t("title")}</h3>
        <p>{t("desc")}</p>
      </main>
    </>
  );
}
