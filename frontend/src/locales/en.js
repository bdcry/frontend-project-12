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
      hidden_button: 'Сhannel control',
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
      title: 'Rename сhannel name',
      placeholder: 'Enter a new channel name',
      cancel: 'Cancel',
      submit: 'Submit',
      hidden_title: 'Channel name',
    },
    header: {
      title: 'Hexlet Chat',
      logout: 'Log Out',
    },
    page404: {
      title: 'Page Not Found',
      description: 'But you can go',
      link: 'to the main page',
    },
    validation: {
      required: 'This field is required',
      channelNameLength: 'From 3 to 20 characters',
      uniqueChannel: 'Must be unique',
      usernameLength: 'From 3 to 20 characters',
      passwordLength: 'At least 6 characters',
      passwordMatch: 'Passwords must match',
    },
    notifications: {
      error: {
        network: 'Something went wrong. Please check your connection.',
        somethingWrong: 'Something went wrong. Please try again later.',
        tokenExpired: 'The token has expired. Please sign in again.',
      },
      success: {
        channelCreated: 'Channel created successfully!',
        channelRemoved: 'Channel removed.',
        channelRenamed: 'Channel renamed.',
      },
    },
  },
};
