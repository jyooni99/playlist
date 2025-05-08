export type InputFieldType = 'text' | 'password' | 'email' | 'number';

export type InputField = {
  id: string;
  type: InputFieldType;
  label?: string;
  placeholder?: string;
  helperText?: string;
  showToggle?: boolean;
  rightButtonLabel?: string;
  rightButtonAction?: () => void;
  inputMode?: 'numeric' | 'decimal' | 'tel' | 'search' | 'url' | 'email';
};

export type RadioField = {
  name: string;
  id: string;
  value: string;
};
