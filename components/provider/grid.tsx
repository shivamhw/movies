import { FoogleMovieResponse, MovieSearchResponse } from "@/lib/foogle";
import ProviderCard from "./card";

export default function ProviderGrid({
  title,
  link,
}: {
  title: React.ReactNode;
  link: FoogleMovieResponse[];
}) {
  const foogleProvider = {
    logo_path: "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
    provider_id: 3,
    provider_name: "Google Play Movies",
    display_priority: 1000,
  }

  return (
    <div  className="w-full break-all h-96 overflow-auto">
      <p className="py-2 mb-2 font-medium border-b border-zinc-800">{title}</p>
      <div className="flex flex-col flex-wrap gap-4 py-2 w-full">
        {
          link?.map((file) => {
            return <ProviderCard key={foogleProvider.provider_name} provider={foogleProvider} file={file} />
          })
        }
      </div>
    </div>
  );
}
