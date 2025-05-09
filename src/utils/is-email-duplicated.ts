import type { SignUpFormValuesType } from '../types/form';

export function isEmailDuplicated(value: string) {
  const raw = localStorage.getItem('users');
  if (!raw) return true;

  const users = JSON.parse(raw);
  const isDuplicate = users.some((user: SignUpFormValuesType) => user.email === value);

  if (isDuplicate) {
    throw Error('이미 가입된 이메일입니다.');
  }

  return true;
}
