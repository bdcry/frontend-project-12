export default {
  translation: {
    login: {
      title: 'Войти',
      placeholder_username: 'Ваш ник',
      placeholder_password: 'Пароль',
      span: 'Нет аккаунта?',
      registration: 'Регистрация',
      errors: {
        wrongLogin: 'Неверные имя пользователя или пароль',
      },
    },
    registration: {
      title: 'Регистрация',
      placeholder_username: 'Имя пользователя',
      placeholder_password: 'Пароль',
      placeholder_confrimpassword: 'Подтвердите пароль',
      button: 'Зарегистрироваться',
      errors: {
        alredyRegistred: 'Такой пользователь уже существует',
      },
    },
    chat: {
      title: 'Каналы',
      messages_count: '{{count}} сообщение',
      messages_count_plural: '{{count}} сообщения',
      messages_count_many: '{{count}} сообщений',
      hidden_button: 'Управление каналом',
    },
    addChannelModal: {
      title: 'Добавить канал',
    },
    channelForm: {
      label: 'Имя канала',
      cancel: 'Отменить',
      submit: 'Отправить',
    },
    channelsList: {
      remove: 'Удалить',
      rename: 'Переименовать',
    },
    messageForm: {
      ariaLabel: 'Новое сообщение',
      placeholder: 'Введите сообщение...',
      submit: 'Отправить',
    },
    removeChannelModal: {
      title: 'Удалить канал',
      body: 'Уверены?',
      cancel: 'Отменить',
      remove: 'Удалить',
    },
    renameChannelModal: {
      title: 'Переименовать канал',
      placeholder: 'Введите новое имя канала',
      cancel: 'Отменить',
      submit: 'Отправить',
      hidden_title: 'Имя канала',
    },
    header: {
      title: 'Hexlet Chat',
      logout: 'Выйти',
    },
    page404: {
      title: 'Страница не найдена',
      description: 'Но вы можете перейти',
      link: 'на главную страницу',
    },
    validation: {
      required: 'Обязательное поле',
      channelNameLength: 'От 3 до 20 символов',
      uniqueChannel: 'Должно быть уникальным',
      usernameLength: 'От 3 до 20 символов',
      passwordLength: 'Не менее 6 символов',
      passwordMatch: 'Пароли должны совпадать',
    },
    notifications: {
      success: {
        channelCreated: 'Канал создан',
        channelRemoved: 'Канал удалён',
        channelRenamed: 'Канал переименован',
      },
      error: {
        network: 'Ой, что-то пошло не так. Проверьте ваше подключение.',
        somethingWrong: 'Ой, что-то пошло не так. Попробуйте ещё раз позже.',
        tokenExpired: 'Токен устарел. Повторите вход.',
      },
    },
  },
};
