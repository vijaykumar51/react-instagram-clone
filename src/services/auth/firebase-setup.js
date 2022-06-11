import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyB52fGHGLSCrJnXS9gNmVg9uiHZOKlZMgk',
	authDomain: 'react-instagram-clone-62d10.firebaseapp.com',
	projectId: 'react-instagram-clone-62d10',
	storageBucket: 'react-instagram-clone-62d10.appspot.com',
	messagingSenderId: '171861229736',
	appId: '1:171861229736:web:e59ce3da7c8fd77655c29d',
	measurementId: 'G-KQVZWCJCXS',
};

initializeApp(firebaseConfig);
console.info('firebase app initialized');
