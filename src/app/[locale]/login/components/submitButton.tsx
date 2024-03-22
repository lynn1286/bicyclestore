'use client'
import { useFormStatus } from 'react-dom'

interface ISubmitButtonProps {
  i18n: {
    submit: string
    submiting: string
  }
}

export function SubmitButton({ i18n }: ISubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 hover:bg-slate-900/90 px-4 py-2"
      aria-disabled={pending}
    >
      {pending ? i18n.submiting : i18n.submit}
    </button>
  )
}
