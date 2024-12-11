export default {
  translation: {
    login: {
      title: 'Войти',
      placeholder_username: 'Ваш ник',
      placeholder_password: 'Пароль',
      span: 'Нет аккаунта?',
      registration: 'Регистрация',
      errors: {
        wrongLogin: 'Неверное имя пользователя или пароль',
      },
    },
    registration: {
      title: 'Регистрация',
      placeholder_username: 'Имя пользователя',
      placeholder_password: 'Пароль',
      placeholder_confrimpassword: 'Повторите пароль',
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
    },
    addChannelModal: {
      title: 'Добавить каналы',
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
      title: 'Переименовать',
      placeholder: 'Введите новое имя канала',
      cancel: 'Отменить',
      submit: 'Отправить',
    },
    header: {
      title: 'Hexlet Chat',
      chat: 'Чаты',
      logout: 'Выйти',
    },
    page404: {
      title: 'Страница не найдена',
      description: 'Но вы можете перейти',
      link: 'на главную страницу',
    },
  }
};