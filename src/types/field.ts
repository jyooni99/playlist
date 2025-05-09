// 필드 타입
import type { LoginFormValuesType, SignUpFormValuesType } from './form';

export type InputFieldType = 'text' | 'password' | 'email' | 'number';

type CommonInputField = {
  type: InputFieldType;
  label?: string;
  placeholder?: string;
};

export type LoginInputField = CommonInputField & {
  id: keyof LoginFormValuesType;
};

export type SignUpInputField = CommonInputField & {
  id: keyof SignUpFormValuesType;
  helperText?: string;
  showToggle?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
};

export type RadioField = {
  id: string;
  name: string;
  value: string;
};

export type CheckboxField = {
  id: string;
  name: string;
  value: string;
};
