import type { AlbumType } from "../model/types";

import styles from "./AlbumCard.module.css";

interface AlbumProps {
  album: AlbumType;
}

const AlbumCard = ({ album }: AlbumProps) => {
  return (
    <div className={styles.album}>
      <h3 className={styles.albumTitle}>{album.title}</h3>
    </div>
  );
};

export default AlbumCard;
