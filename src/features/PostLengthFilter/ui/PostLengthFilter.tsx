import React from "react";

import type { PostLengthVariant } from "../lib/filterByLength";

import styles from "./postLengthFilter.module.css";

interface PostLengthFilterProps {
  value: PostLengthVariant;
  onChange: (value: PostLengthVariant) => void;
}

export const PostLengthFilter: React.FC<PostLengthFilterProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as PostLengthVariant);
  };

  return (
    <div className={styles.selectWrapper}>
      <select value={value} onChange={handleChange} className={styles.select}>
        <option value="all">Все посты</option>
        <option value="short">Короткие</option>
        <option value="long">Длинные</option>
      </select>
    </div>
  );
};
