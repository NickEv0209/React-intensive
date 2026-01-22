import { useGetAlbumsQuery } from "@/entities/album/api/albumsApi";
import type { AlbumType } from "@/entities/album/model/types";
import { AlbumsWithLoading } from "@/widgets/AlbumList";

const UserAlbumsPage = () => {
  const { data: albums, isLoading } = useGetAlbumsQuery(1);

  return (
    <AlbumsWithLoading isLoading={isLoading} albums={albums as AlbumType[]} />
  );
};

export default UserAlbumsPage;
