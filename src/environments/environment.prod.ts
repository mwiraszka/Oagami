import { AuthMode } from '../app/auth/auth.enum'

export const environment = {
  production: true,
  authMode: AuthMode.Firebase,
  firebase: {
    apiKey: '', // temp
    authDomain: 'oagami-911cb.firebaseapp.com',
    databaseURL: 'https://oagami-911cb.firebaseio.com',
    projectId: 'oagami-911cb',
    storageBucket: '', // temp
    messagingSenderId: '', // temp
    appId: '', // temp
  },
}
