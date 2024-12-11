export default {
  translation: {
    login: {
      title: 'Log In',
      placeholder_username: 'Your nickname',
      placeholder_password: 'Password',
      span: "Don't have an account?",
      registration: 'Sign Up',
      errors: {
        wrongLogin: 'Invalid username or password',
      },
    },
    registration: {
      title: 'Sign Up',
      placeholder_username: 'Username',
      placeholder_password: 'Password',
      placeholder_confrimpassword: 'Confirm Password',
      button: 'Register',
      errors: {
        alredyRegistred: 'This user already exists',
      },
    },
    chat: {
      title: 'Channels',
      messages_count: '{{count}} message',
      messages_count_other: '{{count}} messages',
    },    
    addChannelModal: {
      title: 'Add Channel',
    },
    channelForm: {
      label: 'Channel name',
      cancel: 'Cancel',
      submit: 'Submit',
    },
    channelsList: {
      remove: 'Remove',
      rename: 'Rename',
    },
    messageForm: {
      ariaLabel: 'New message',
      placeholder: 'Enter your message...',
      submit: 'Send',
    },
    removeChannelModal: {
      title: 'Remove Channel',
      body: 'Are you sure?',
      cancel: 'Cancel',
      remove: 'Delete',
    },
    renameChannelModal: {
      title: 'Rename',
      placeholder: 'Enter a new channel name',
      cancel: 'Cancel',
      submit: 'Submit',
    },
    header: {
      title: 'Hexlet Chat',
      chat: 'Chats',
      logout: 'Log Out',
    },
    page404: {
      title: 'Page Not Found',
      description: 'But you can go',
      link: 'to the main page',
    },
  },
};
