export type InputFieldType = 'text' | 'password' | 'email';

export interface InputField {
  id: string;
  type: InputFieldType;
  label: string;
  placeholder: string;
}
