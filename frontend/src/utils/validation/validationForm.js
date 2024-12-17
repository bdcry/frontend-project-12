import * as yup from 'yup';

export const channelSchema = (channels, t, currentChannelName = '') => {
  const createdChannels = channels
    .map(({ name }) => name)
    .filter((name) => name !== currentChannelName);

  return yup.object().shape({
    name: yup
      .string()
      .trim()
      .required(t('validation.required'))
      .min(3, t('validation.channelNameLength'))
      .max(20, t('validation.channelNameLength'))
      .notOneOf([...createdChannels], t('validation.uniqueChannel')),
  });
};

export const signupSchema = (t) => yup.object().shape({
  username: yup
    .string()
    .required(t('validation.required'))
    .min(3, t('validation.usernameLength'))
    .max(20, t('validation.usernameLength')),
  password: yup
    .string()
    .required(t('validation.required'))
    .min(6, t('validation.passwordLength')),
  confirmPassword: yup
    .string()
    .required(t('validation.required'))
    .oneOf([yup.ref('password')], t('validation.passwordMatch')),
});
