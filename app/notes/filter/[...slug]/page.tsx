import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import App from "./Notes.client";

type Props = {
    params:{slug?: string[]}
}

export default async function Notes({params}: Props) {
    const queryClient = new QueryClient();

    const tag = params.slug ? params.slug[0]: ''

    const search = '';
    const currentPage = 1;

    await queryClient.prefetchQuery({
        queryKey: ['notes', search, currentPage - 1, tag],
        queryFn: () => fetchNotes(search, currentPage, tag)
    })


  return (
      <HydrationBoundary state={dehydrate(queryClient)}>
          <App initialSearch={search} initialPage={currentPage} initialTag={tag} />
          </HydrationBoundary>
  );
}


