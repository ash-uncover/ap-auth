import React from 'react'

import {
  Link
} from 'react-router-dom'

import {
  useState,
  useTranslation
} from 'lib/hooks'

import {
  AppRoutes
} from 'lib/constants'

const Recover = () => {
  // Hooks

  const { t } = useTranslation()
  const recoverTitle = t('auth:recover.title')
  const usernamePlaceholder = t('auth:recover.username.placeholder')
  const submitTitle = t('auth:recover.submit.title')
  const submitTooltip = t('auth:recover.submit.tooltip')
  const linkLogin = t('auth:recover.links.login')

  const [username, setUsername] = useState('')

  const disabled = !username

  // Callbacks

  const onUsernameChanged = (event) => {
    setUsername(event.target.value)
  }

  const onRecover = (event) => {
    event.preventDefault()
  }

  // Rendering

  return (
    <form className='form'>

      <h2 className='form-title'>
        {recoverTitle}
      </h2>

      <input
        className='form-control'
        name='alpha-username'
        placeholder={usernamePlaceholder}
        required
        value={username}
        onChange={onUsernameChanged}
      />

      <button
        className='form-control form-submit'
        type='submit'
        disabled={disabled}
        tooltip={submitTooltip}
        onClick={onRecover}
      >
        {submitTitle}
      </button>

      <p className='form-control label' />

      <Link
        className='form-link'
        to={{
          pathname: AppRoutes.LOGIN,
          state: { from: AppRoutes.RECOVER }
        }}
      >
        {linkLogin}
      </Link>

    </form>
  )
}

export default Recover
