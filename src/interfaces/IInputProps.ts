import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  placeholder?: string;
  helper?: string;
  password?: boolean;
}
