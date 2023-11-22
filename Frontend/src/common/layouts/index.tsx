import { Fragment, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <main className="transition-all relative overflow-x-clip overflow-y-clip max-sm:pt-[75px] max-sm:h-screen max-sm:flex max-sm:flex-col">
        {children}
      </main>
    </Fragment>
  )
}

export default Layout
