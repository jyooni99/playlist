import type { LoginFormValuesType, SignUpFormValuesType } from '../types/form';
import type { CheckboxField, LoginInputField, RadioField, SignUpInputField } from '../types/field';

export const loginInitialValues: LoginFormValuesType = { email: '', password: '' };
export const signUpInitialValues: SignUpFormValuesType = {
  email: '',
  password: '',
  birth: '',
  jobCategory: '개발자',
  interests: [],
};

export const loginFields: LoginInputField[] = [
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

export const signUpFields: SignUpInputField[] = [
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

export const interests: CheckboxField[] = [
  { name: 'interests', id: 'programming', value: '프로그래밍' },
  { name: 'interests', id: 'infrastructure', value: '인프라' },
  { name: 'interests', id: 'planning', value: '기획' },
  { name: 'interests', id: 'data', value: '데이터' },
  { name: 'interests', id: 'design', value: '디자인' },
  { name: 'interests', id: 'business', value: '비즈니스' },
  { name: 'interests', id: 'marketing', value: '마케팅' },
  { name: 'interests', id: 'careers/jobChange', value: '취업/이직' },
];
