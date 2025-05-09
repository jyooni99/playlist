import { useEffect, useState } from 'react';
import { formattedDate } from '../utils/formatted-date';

type UseFormProps<T> = {
  initialValues: T;
  onSubmit: (values: T) => void;
  validate: (values: T) => Partial<Record<keyof T, string>>;
};

function useForm<T>({ initialValues, onSubmit, validate }: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [externalErrors, setExternalErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [internalErrors, setInternalErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const errors = { ...externalErrors, ...internalErrors }; // 외부, 내부 에러 메시지 병합

  // 입력 필드 별 값 업데이트
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedValue = name === 'birth' ? formattedDate(value) : value;
    setValues((prevValues) => ({ ...prevValues, [name]: formattedValue }));
    setIsInitialized(true);
  };

  // checkbox용 onChange 함수 (복수선택)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const key = name as keyof T;

    setValues((prevValues) => {
      const current = Array.isArray(prevValues[key]) ? prevValues[key] : [];

      if (checked) {
        return { ...prevValues, [key]: [...current, value] };
      } else {
        return { ...prevValues, [key]: current.filter((checkValue) => checkValue !== value) };
      }
    });

    setTouched((prevTouched) => ({ ...prevTouched, [key]: true }));
    setIsInitialized(true);
  };

  // 입력 필드 별 touched 상태 업데이트 (touched 상태인 입력필드만 검사)
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  // 유효성 검사에 통과했을 때에만 Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setInternalErrors(validationErrors);

    if (!Object.keys(validationErrors).length && !Object.keys(externalErrors).length) {
      onSubmit(values);
    }
  };

  // 외부에서 에러 메시지 설정
  const setFieldError = (name: keyof T, errorMessage: string | undefined) => {
    setExternalErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  // 외부에서 설정한 에러 메시지 제거
  const clearFieldError = (name: keyof T) => {
    setExternalErrors((prev) => {
      const prevError = { ...prev }; // 현재 에러 값을 복사한 새 객체 생성
      delete prevError[name]; // 특정 name 에러 제거
      return prevError; // 변경된 객체로 교체
    });
  };

  useEffect(() => {
    const validationErrors = validate(values);
    setInternalErrors(validationErrors);
  }, [values, validate]);

  return {
    values,
    errors: errors,
    touched,
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleCheckboxChange,
    setFieldError,
    clearFieldError,
    isValid: Object.keys(errors).length === 0 && isInitialized,
  };
}

export default useForm;
