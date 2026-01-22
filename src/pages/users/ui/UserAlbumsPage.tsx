import { useGetAlbumsQuery } from "@/entities/album/api/albumsApi";

const UserAlbumsPage = () => {
  const { data: albums, isLoading } = useGetAlbumsQuery(1);

  if (isLoading) return <h3>Loading...</h3>;

  return albums?.map((album) => {
    return <h3 key={album.id}>{album.title}</h3>;
  });
};

export default UserAlbumsPage;
