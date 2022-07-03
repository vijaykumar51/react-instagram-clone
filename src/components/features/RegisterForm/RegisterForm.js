import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
// TODO: correct this import
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseDb } from '../../../services/auth/firebase-setup';
import { Button, Icon, Input } from '../../core';
import { StyledRegisterForm } from './RegisterForm.styled';

function RegisterForm() {
	const naviagte = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(!!email && !!password);
	}, [email, password]);

	// TODO: add proper error handling here
	const onRegister = () => {
		const dbRef = firebaseDb;
		const userCollectionRef = collection(firebaseDb, 'users');
		console.log('registeration called');
		createUserWithEmailAndPassword(getAuth(), email, password)
			.then((credSnapshot) =>
				setDoc(doc(dbRef, 'users', credSnapshot.user.uid), {
					name,
					email,
				})
			)
			.then(() => getDocs(userCollectionRef))
			.then((snapshot) => console.log(snapshot))
			.then(() => naviagte('/'))
			.catch((error) => {
				console.error('Error while registering ', error);
			});
	};

	return (
		<StyledRegisterForm className='login-form'>
			<div className='logo-container'>
				<Icon type='logo-large' className='logo-container' />
			</div>
			<div className='form-fields-container'>
				<Input type='text' label='Name' value={name} onChange={setName} />
				<Input
					type='text'
					label='Email address'
					value={email}
					onChange={setEmail}
				/>
				<Input
					type='password'
					label='Password'
					value={password}
					onChange={setPassword}
				/>

				<Button size='full-bleed' disabled={!isFormValid} onClick={onRegister}>
					Register
				</Button>
			</div>
		</StyledRegisterForm>
	);
}

RegisterForm.whyDidYouRender = true;

export default RegisterForm;
