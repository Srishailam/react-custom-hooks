import React from 'react'
import useGenerateId from './useGenerateId';
const LoginForm = () => {
  const generateId = useGenerateId();
  return (
    <div className="LoginForm">
      <form>
        <label htmlFor={generateId('name')}>Username</label>
        <input id={generateId('name')} type="text" />
        <label htmlFor={generateId('password')}>Password</label>
        <input id={generateId('password')}type="password"/>
      </form>
    </div>
  )
}

export default LoginForm
