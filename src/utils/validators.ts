// 유효성 검사 함수

function validateEmail(value: string): string | undefined {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!value.length) return '이메일을 입력하세요.';
  if (!emailRegex.test(value)) return '이메일 주소가 유효하지 않습니다.';
  return undefined;
}

function validatePassword(value: string): string | undefined {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!value.length) return '비밀번호를 입력하세요.';
  if (!passwordRegex.test(value))
    return '비밀번호를 확인해주세요. (최소 8자, 영문,숫자,특수문자 1개 이상 포함)';

  return undefined;
}

export function loginValidator(values: Record<string, string>): Record<string, string | undefined> {
  const errors: Record<string, string | undefined> = {};

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  const pwError = validatePassword(values.password);
  if (pwError) errors.password = pwError;

  return errors;
}
