import {
  TextInput as TextInputStyled,
  TextArea as TextAreaStyled,
} from "./styles";
import { TextAreaType, TextInputType } from "./types";

export function TextInput({ ...rest }: TextInputType) {
  return <TextInputStyled {...rest} />;
}

export function TextArea({ ...rest }: TextAreaType) {
  return <TextAreaStyled {...rest} />;
}
