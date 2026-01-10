import type { ComponentType, FC } from "react";

import styles from './WithLoading.module.css'

export interface WithLoadingProps {
  isLoading: boolean;
}

export const withLoading = <T extends object>(
  WrappedComponent: ComponentType<T>
) => {
  const ComponentWithLoading: FC<T & WithLoadingProps> = ({
    isLoading,
    ...props
  }) => {
    if (isLoading) {
      return (
        <div className={styles.loading}>
          <div className={styles.loadingCircle}></div>
        </div>
      );
    }

    return <WrappedComponent {...(props as T)} />;
  };

  ComponentWithLoading.displayName = `WithLoading(${getDisplayName(
    WrappedComponent
  )})`;

  return ComponentWithLoading;
};

function getDisplayName<T>(WrappedComponent: ComponentType<T>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
