import { FoogleMovieResponse } from "@/lib/foogle";
import { formatBytes } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProviderCard({
  provider,
  file,
}: {
  provider: Provider;
  file: FoogleMovieResponse;
}) {
  return (
    <div className="w-full">
    <Link
      href={file.cf_worker_link || "/"}
      className="flex items-center border border-zinc-800/60 transition select-none hover:bg-zinc-800/60"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
        alt={provider.provider_name}
        width={50}
        height={50}
        unoptimized
      />
      <span className="text-sm px-2">
        {file.name || ""}
        {" "}<span className="text-pink-500">{formatBytes(Number(file.size))}</span>
      </span>

    </Link>
    </div>
  );
}
