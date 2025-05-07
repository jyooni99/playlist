import { useEffect, useState } from 'react';

type UseFormProps = {
  initialValues: Record<string, string>;
  onSubmit: (values: Record<string, string>) => void;
  validate: (values: Record<string, string>) => Record<string, string | undefined>;
};

const useForm = ({ initialValues, onSubmit, validate }: UseFormProps) => {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // 입력 필드 별 값 업데이트
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
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
    setErrors(validationErrors);

    if (!Object.keys(validationErrors).length) {
      onSubmit(values);
    }
  };

  useEffect(() => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }, [values, validate]);

  return {
    values,
    errors,
    touched,
    handleInputChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
