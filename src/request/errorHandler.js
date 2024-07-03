import { Alert } from '@mui/material';
import codeMessage from './codeMessage';

const errorHandler = (error) => {
  if (!navigator.onLine) {
    Alert.error('No internet connection', {
      duration: 15000,
      maxSnack: 1,
    });
    return {
      success: false,
      result: null,
      message: 'Cannot connect to the server, Check your internet network',
    };
  }

  const { response } = error;

  if (!response) {
    Alert.error('Problem connecting to server', {
      duration: 20000,
      maxSnack: 1,
    });
    return {
      success: false,
      result: null,
      message: 'Cannot connect to the server, Contact your Account administrator',
    };
  }

  if (response && response.data && response.data.jwtExpired) {
    const result = window.localStorage.getItem('auth');
    const jsonFile = window.localStorage.getItem('isLogout');
    const { isLogout } = (jsonFile && JSON.parse(jsonFile)) || false;
    window.localStorage.removeItem('auth');
    window.localStorage.removeItem('isLogout');
    if (result || isLogout) {
      window.location.href = '/logout';
    }
  }

  if (response && response.status) {
    const message = response.data && response.data.message;
    const errorText = message || codeMessage[response.status];
    const { status } = response;
    Alert.error(`Request error ${status}`, {
      description: errorText,
      duration: 20000,
      maxSnack: 2,
    });
    return response.data;
  } else {
    Alert.error('Problem connecting to server', {
      duration: 20000,
      maxSnack: 1,
    });
    return {
      success: false,
      result: null,
      message: 'Cannot connect to the server, Contact your Account administrator',
    };
  }
};

export default errorHandler;
