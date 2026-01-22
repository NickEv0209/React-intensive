type WithId = {
  id: string | number;
};

type ItemListProps<T extends WithId> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export const ItemList = <T extends WithId>({ items, renderItem }: ItemListProps<T>) => {
  return items.map((item) => <div key={item.id}>{renderItem(item)}</div>);
};
