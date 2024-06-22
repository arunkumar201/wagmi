import Link from 'next/link'
import React from 'react'
import { DisconnectBtn } from '../../disconnectBtn'

const Page = () => {
  return (
    <div>
      <h2>Hello World</h2>
      <DisconnectBtn />
      <Link href={'/'}>Home Page</Link>
    </div>
  )
}

export default Page
