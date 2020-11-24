import React from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Button,
  Input
} from '@uncover/react-commons'

import {
  Routes
} from 'lib/constants'

import {
  useDispatch,
  useState,
  useTranslation
} from 'lib/hooks'

import {
  AuthService
} from 'services'

import './Login.scss'

const Login = (props) => {
  // Hooks
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Callbacks

  const onUsernameChanged = (event) => {
    setUsername(event.target.value)
  }

  const onPasswordChanged = (event) => {
    setPassword(event.target.value)
  }

  const onLogin = (event) => {
    event.preventDefault()
    AuthService.api.auth.get(dispatch, {
      username,
      password
    })
      .then(() => setPassword(''))
  }

  // Rendering

  return (
    <div className='ap-login'>
      <form className='form'>

        <h2 className='form-title'>
          {t('login.title')}
        </h2>

        <Input
          className='form-control'
          placeholder={t('auth.username.placeholder')}
          required
          name='alpha-username'
          value={username}
          onChange={onUsernameChanged}
        />

        <Input
          className='form-control'
          placeholder={t('auth.password.placeholder')}
          name='alpha-password'
          type='password'
          value={password}
          onChange={onPasswordChanged}
        />

        <Button
          className='form-control'
          type='submit'
          onClick={onLogin}
        >
          {t('login.submit.title')}
        </Button>

        <Link
          className='form-link'
          to={{
            pathname: Routes.RECOVER,
            state: { from: Routes.LOGIN }
          }}
        >
          {t('login.recover.title')}
        </Link>

        <Link
          className='form-link'
          to={{
            pathname: Routes.REGISTER,
            state: { from: Routes.LOGIN }
          }}
        >
          {t('login.register.title')}
        </Link>

      </form>
    </div>
  )
}

export default Login