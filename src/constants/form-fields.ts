import type { InputField } from '../types/form';

export const loginInitialValues = { email: '', password: '' };
export const signUpInitialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  birth: '',
  jobCategory: '',
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
    type: 'number',
    label: '생년월일',
    placeholder: 'YYYY/MM/DD',
  },
];
