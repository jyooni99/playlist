export type LoginFormValuesType = {
  email: string;
  password: string;
};

export type SignUpFormValuesType = LoginFormValuesType & {
  birth: string;
  jobCategory: string;
  interests: string[];
};
