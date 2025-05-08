import type { InputField, RadioField } from '../types/form';

export const loginInitialValues = { email: '', password: '' };
export const signUpInitialValues = {
  email: '',
  password: '',
  birth: '',
  jobCategory: '개발자',
  interests: '',
};

export const loginFields: InputField[] = [
  {
    id: 'email',
    type: 'email',
    label: '이메일',
    placeholder: '이메일을 입력하세요',
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
  },
];

export const signUpFields: InputField[] = [
  {
    id: 'email',
    type: 'email',
    label: '이메일',
    placeholder: '이메일을 입력하세요',
    rightButtonLabel: '중복 확인',
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    helperText: '8자 이상, 영문/숫자/특수기호(!@#$%^&*) 조합',
  },
  {
    id: 'birth',
    type: 'text',
    label: '생년월일',
    placeholder: '생년월일 8자리를 입력하세요',
    inputMode: 'numeric',
  },
];

export const jobCategory: RadioField[] = [
  { name: 'jobCategory', id: 'developer', value: '개발자' },
  { name: 'jobCategory', id: 'designer', value: '디자이너' },
  { name: 'jobCategory', id: 'dataAnalyst', value: '데이터 분석가' },
  { name: 'jobCategory', id: 'PM', value: 'PM' },
  { name: 'jobCategory', id: 'Marketer', value: '마케터' },
];
