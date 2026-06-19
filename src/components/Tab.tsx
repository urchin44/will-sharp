import React, { type ReactElement } from 'react'

type Props = {
  title: string;
  variant: string;
  children: ReactElement<any>
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab