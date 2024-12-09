import * as yup from 'yup';

const createAddChannelSchema = (channels) => {
  const createdChannels = channels.map(({ name }) => name);
  return yup.object().shape({
    name: yup.string()
    .required('Обязательное поле')
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .notOneOf([...createdChannels], 'Должно быть уникальным')
  })
}

export default createAddChannelSchema;

// TODO: создать валидацию для формы логина и будущей формы регистрации