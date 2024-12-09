import * as yup from 'yup';

const addChannelSchema = yup.object().shape({
  name: yup.string()
  .required('Обязательное поле')
  .min(3, 'От 3 до 20 символов')
  .max(20, 'От 3 до 20 символов')
});

export default addChannelSchema;

// TODO: создать валидацию для формы логина и будущей формы регистрации