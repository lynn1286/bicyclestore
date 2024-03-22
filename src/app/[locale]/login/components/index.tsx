'use client'

import { useFormState } from 'react-dom'
import { SubmitButton } from './submitButton'
import { loginAction } from './actions'

interface ILoginComponentsProps {
  i18n: {
    submit: string
    submiting: string
  }
}

export interface IFormPros {
  email: string
  password: string
}

const initialState: any = {
  message: ''
}

const LoginComponents = ({ i18n }: ILoginComponentsProps) => {
  const [state, formAction] = useFormState(loginAction, initialState)

  return (
    <form action={formAction}>
      <input type="text" name="email" className="block border rounded-md border-gray-300 mb-2" />
      <input
        type="password"
        name="password"
        className="block border rounded-md border-gray-300 mb-2"
      />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      {/* useFormStatus 必须用在 <form> 下的组件内部中，所以这里要将按钮抽离出来 */}
      <SubmitButton i18n={i18n} />
    </form>
  )
}

export default LoginComponents
