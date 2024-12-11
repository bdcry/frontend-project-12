import * as yup from 'yup';

export const channelSchema = (channels, currentChannelName = '') => {
  const createdChannels = channels
    .map(({ name }) => name)
    .filter((name) => name !== currentChannelName);

  return yup.object().shape({
    name: yup
      .string()
      .required('Обязательное поле')
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .notOneOf([...createdChannels], 'Должно быть уникальным'),
  });
};

export const signupSchema = () => {
  return yup.object().shape({
    username: yup
      .string()
      .required('Обязательное поле')
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов'),
    password: yup
      .string()
      .required('Обязательное поле')
      .min(6, 'Не менее 6 символов'),
    confirmPassword: yup
      .string()
      .required('Обязательное поле')
      .oneOf([yup.ref('password')], 'Пароли должны совпадать')
  })
};


// TODO: создать валидацию для формы логина