// 유효성 검사 함수

import type { LoginFormValuesType, SignUpFormValuesType } from '../types/form';

function validateEmail(value: string): string | undefined {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!value.length) return '이메일을 입력하세요.';
  if (!emailRegex.test(value)) return '이메일 주소가 유효하지 않습니다.';

  return undefined;
}

function validatePassword(value: string): string | undefined {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  if (!value.length) return '비밀번호를 입력하세요.';
  if (!passwordRegex.test(value))
    return '비밀번호를 확인해주세요. (최소 8자, 영문,숫자,특수문자 포함)';

  return undefined;
}

function validateBirth(value: string): string | undefined {
  const birthRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

  if (!value.length) return '생년월일을 입력하세요.';
  if (!birthRegex.test(value)) return '입력하신 생년월일 형식이 올바르지 않습니다.';

  const date = new Date(value);
  const [year, month, day] = value.split('-').map(Number);

  // 날짜 생성 후, Date 객체를 통해 진짜 유효한 날짜인지 검사
  // ex: 2023-02-30 -> 2023-03-02가 되어 두 값이 달라짐. 즉, 없는 날짜
  const isValidDate =
    date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;

  // 현재 년도 기준으로 유효성 검사
  const thisYear = new Date().getFullYear();
  const isValidYear = year >= thisYear - 100 && year <= thisYear;

  if (!isValidDate || !isValidYear) {
    return '입력하신 생년월일이 유효하지 않습니다.';
  }

  return undefined;
}

function validateInterests(value: string[]): string | undefined {
  if (!value.length) return '관심사를 한 가지 이상 선택해주세요.';
  return undefined;
}

export function loginValidator(
  values: LoginFormValuesType,
): Partial<Record<keyof LoginFormValuesType, string>> {
  const errors: Partial<Record<keyof LoginFormValuesType, string>> = {};

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  const pwError = validatePassword(values.password);
  if (pwError) errors.password = pwError;

  return errors;
}

export function signUpValidator(
  values: SignUpFormValuesType,
): Partial<Record<keyof SignUpFormValuesType, string>> {
  const errors: Partial<Record<keyof SignUpFormValuesType, string>> = {};

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  const pwError = validatePassword(values.password);
  if (pwError) errors.password = pwError;

  const birthError = validateBirth(values.birth);
  if (birthError) errors.birth = birthError;

  const interestsError = validateInterests(values.interests);
  if (interestsError) errors.interests = interestsError;

  return errors;
}
