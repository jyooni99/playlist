import { useEffect, useState } from 'react';

type UseFormProps = {
  initialValues: Record<string, string>;
  onSubmit: (values: Record<string, string>) => void;
  validate: (values: Record<string, string>) => Record<string, string>;
};

const useForm = ({ initialValues, onSubmit, validate }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValidate, setIsValidate] = useState(false);

  // 입력 필드 별 값 업데이트
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // 입력 필드 별 touched 상태 업데이트
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  // 유효성 검사에 통과한 상태일 때만 Submit
  const handleSubmit = (e: React.FormEvent) => {
    if (isValidate) {
      e.preventDefault();
      onSubmit(values);
    }
  };

  // 유효성 검사 및 에러 처리
  useEffect(() => {
    if (touched) {
      const validationErrors = validate(values);

      if (Object.keys(validationErrors).length) {
        setErrors(validationErrors);
      }
      setIsValidate(true);
    }
  }, [isValidate, values, validate, onSubmit]);

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
