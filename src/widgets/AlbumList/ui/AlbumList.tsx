import type { AlbumType } from "@/entities/album/model/types";
import AlbumCard from "@/entities/album/ui/AlbumCard";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { withLoading } from "@/shared/lib/hoc";

import styles from "./AlbumList.module.css";

interface AlbumProps {
  albums: AlbumType[];
}

const AlbumList = ({ albums }: AlbumProps) => {
  return (
    <div className={styles.albumList}>
      <ItemList
        items={albums}
        renderItem={(album) => <AlbumCard album={album} />}
      />
    </div>
  );
};

export const AlbumsWithLoading = withLoading(AlbumList);
export default AlbumList;
