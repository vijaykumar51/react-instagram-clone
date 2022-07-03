import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebaseDb } from '../../../services/auth/firebase-setup';
import { Button, Icon, Input } from '../../core';
import { StyledRegisterForm } from './RegisterForm.styled';
import { getUserProfileFromAPI } from '../../../store/slices/userProfileSlice';

function RegisterForm() {
	const naviagte = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsFormValid(!!email && !!password);
	}, [email, password]);

	// TODO: add proper error handling here
	const onRegister = () => {
		const dbRef = firebaseDb;
		createUserWithEmailAndPassword(getAuth(), email, password)
			.then(async () => {
				setDoc(doc(dbRef, 'users', getAuth().currentUser.uid), {
					userId: getAuth().currentUser.uid,
					name,
					email,
				});
			})
			.then(() => {
				dispatch(getUserProfileFromAPI(getAuth().currentUser.uid));
				naviagte('/');
			})
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
