'use client'

import { Button } from '~/components/ui/button'
import { login } from '~/app/login/actions'

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button onClick={() => login()}>Login with Discord</Button>
    </div>
  )
}
