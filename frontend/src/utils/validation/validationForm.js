import * as yup from 'yup';

const channelSchema = (channels, currentChannelName = '') => {
  const createdChannels = channels
    .map(({ name }) => name)
    .filter((name) => name !== currentChannelName); // Исключение текущего имени

  return yup.object().shape({
    name: yup
      .string()
      .required('Обязательное поле')
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .notOneOf([...createdChannels], 'Должно быть уникальным'),
  });
};

export default channelSchema;


// TODO: создать валидацию для формы логина и будущей формы регистрации