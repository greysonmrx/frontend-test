import React from "react";

import Icon from "../Icon";

import * as S from "./styles";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
}

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = ({ name, type, label, className, required, error, ...props }, ref) => {
  return (
    <S.Container className={className}>
      <S.InputContainer hasError={!!error}>
        <Icon name="search-outline" size={18} />
        <input ref={ref} id={name} name={name} {...props} />
      </S.InputContainer>
      {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  );
};

export default React.forwardRef(TextField);
