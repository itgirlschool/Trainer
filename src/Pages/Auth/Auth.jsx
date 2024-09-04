import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser, setError } from '../../store/slices/userSlice';
import './Auth.scss';
import cat from '../../assets/images/cat_auth.svg';
import google from '../../assets/images/google-icon.svg';
import github from '../../assets/images/github-icon.svg';
import pic from '../../assets/images/vector1.svg';
import line from '../../assets/images/line.svg';

export default function Auth() {
  const [signIn, setSignIn] = useState(true);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const handleToRegister = () => {
    reset();
    setSignIn(false);
  };

  const handleToSignin = () => {
    reset();
    setSignIn(true);
  };

  const onSubmitLogin = (data) => {
    const { email, password } = data;
    dispatch(setUser({ email, password, token: 'fake-token' }));
  };

  const onSubmitRegister = (data) => {
    const { email, password, name, surname, phoneNumber } = data;
    dispatch(
      setUser({
        email,
        password,
        displayName: name,
        displaySurname: surname,
        phoneNumber,
        token: 'fake-token',
      }),
    );
  };

  const password = watch('password');

  const handleOpenModalResetPassword = () => {
    setModal(true);
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <div className="auth__image">
          <img src={cat} alt="auth" />
        </div>
        {signIn ? (
          <div className="auth__form">
            <div className="auth__form-title">
              <span>Войти</span> в учетную запись тренажера
            </div>
            <div className="auth__form-nav-btns">
              <button
                className={signIn ? 'active-btn' : 'nonactive-btn'}
                onClick={handleToSignin}
              >
                Войти
              </button>
              <button
                className={signIn ? 'nonactive-btn' : 'active-btn'}
                onClick={handleToRegister}
              >
                Зарегистрироваться
              </button>
            </div>
            <div className="auth__form-data">
              <form onSubmit={handleSubmit(onSubmitLogin)}>
                <input
                  type="email"
                  placeholder="Ваш Email"
                  {...register('email', {
                    required: 'Введите email в формате test@test.com',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Неверный формат Email',
                    },
                  })}
                />
                {errors.email && (
                  <p className="auth-error">{errors.email.message}</p>
                )}

                <input
                  type="password"
                  placeholder="Ваш пароль"
                  {...register('password', {
                    required: 'Пароль обязателен',
                    minLength: {
                      value: 6,
                      message: 'Пароль должен содержать не менее 6 символов',
                    },
                  })}
                />
                {errors.password && (
                  <p className="auth-error">{errors.password.message}</p>
                )}

                <button type="submit">Войти</button>
              </form>
              <div className="auth-restore-password">
                <p>
                  Забыли пароль?{' '}
                  <span onClick={handleOpenModalResetPassword}>
                    Восстановить
                  </span>
                </p>
              </div>
            </div>
            {modal && (
              <div className="auth-modal">
                <div className="auth-modal-layout"></div>
                <div className="auth-modal-restore-password">
                  <p>Восстановить пароль</p>
                  <form>
                    <input type="email" placeholder="Введите Email" />
                    <button>Отправить</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="auth__form">
            <div className="auth__form-title">
              <span>Регистрация</span> учетной записи
            </div>
            <div className="auth__form-nav-btns">
              <button
                className={signIn ? 'active-btn' : 'nonactive-btn'}
                onClick={handleToSignin}
              >
                Войти
              </button>
              <button
                className={signIn ? 'nonactive-btn' : 'active-btn'}
                onClick={handleToRegister}
              >
                Зарегистрироваться
              </button>
            </div>
            <div className="auth__form-data">
              <form onSubmit={handleSubmit(onSubmitRegister)}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  {...register('name', {
                    required: 'Имя обязательно поле',
                    minLength: {
                      value: 2,
                      message: 'Имя не может содержать менее 1 символа',
                    },
                    maxLength: {
                      value: 25,
                      message: 'Имя не может содержать более 25 символов',
                    },
                    pattern: {
                      value: /^[a-zA-Zа-яА-Я]+$/,
                      message: 'Имя должно содержать только буквы',
                    },
                  })}
                />
                {errors.name && (
                  <p className="auth-error">{errors.name.message}</p>
                )}

                <input
                  type="text"
                  placeholder="Ваша фамилия"
                  {...register('surname', {
                    required: 'Фамилия обязательное поле',
                    minLength: {
                      value: 2,
                      message: 'Фамилия не может содержать менее 1 символа',
                    },
                    maxLength: {
                      value: 25,
                      message: 'Фамилия не может содержать более 25 символов',
                    },
                    pattern: {
                      value: /^[a-zA-Zа-яА-Я]+$/,
                      message: 'Фамилия должна содержать только буквы',
                    },
                  })}
                />
                {errors.surname && (
                  <p className="auth-error">{errors.surname.message}</p>
                )}

                <input
                  type="email"
                  placeholder="Ваш Email"
                  {...register('email', {
                    required: 'Введите email в формате test@test.com',
                    maxLength: {
                      value: 40,
                      message: 'Email не может содержать более 40 символов',
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Неверный формат Email',
                    },
                  })}
                />
                {errors.email && (
                  <p className="auth-error">{errors.email.message}</p>
                )}

                <input
                  type="tel"
                  placeholder="Ваш номер телефона"
                  {...register('phoneNumber', {
                    minLength: {
                      value: 11,
                      message:
                        'Номер телефона не может содержать менее 11 символов',
                    },
                    maxLength: {
                      value: 24,
                      message:
                        'Номер телефона не может содержать более 24 символов',
                    },
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: 'Неверный формат номера телефона',
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="auth-error">{errors.phoneNumber.message}</p>
                )}

                <input
                  type="password"
                  placeholder="Ваш пароль"
                  {...register('password', {
                    required: 'Пароль должен содержать не менее 4 символов',
                    minLength: {
                      value: 4,
                      message: 'Пароль содержит менее 4 символов',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Пароль содержит более 20 символов',
                    },
                  })}
                />
                {errors.password && (
                  <p className="auth-error">{errors.password.message}</p>
                )}

                <input
                  type="password"
                  placeholder="Повторите пароль"
                  {...register('passwordConfirm', {
                    required: 'Подтверждение пароля обязательно',
                    validate: (value) => {
                      return value === password || 'Пароли не совпадают';
                    },
                  })}
                />
                {errors.passwordConfirm && (
                  <p className="auth-error">{errors.passwordConfirm.message}</p>
                )}

                <button type="submit">Войти</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
