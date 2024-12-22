const BASE_API_URL = '/api/v1';

export const apiPath = {
  loginPath: () => `${BASE_API_URL}/login`,
  signupPath: () => `${BASE_API_URL}/signup`,
  messagesPath: () => `${BASE_API_URL}/messages`,
  channelsPath: () => `${BASE_API_URL}/channels`,
  channelPath: (id) => `${BASE_API_URL}/channels/${id}`,
};

export const linkRoutes = {
  login: '/login',
  signup: '/signup',
  main: '/',
};
