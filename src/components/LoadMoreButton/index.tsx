import React from "react";

import * as S from "./styles";

interface LoadMoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hasNextPage: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  hasNextPage,
  children,
  ...props
}) => {
  return (
    <S.Container>
      <button disabled={!hasNextPage} {...props}>
        {hasNextPage && children}
        {!hasNextPage && "You've reached the end of the list"}
      </button>
    </S.Container>
  );
};

export default LoadMoreButton;
