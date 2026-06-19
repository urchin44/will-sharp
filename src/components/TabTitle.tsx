import React from "react"
import Button from "./Button"

type Props = {
  title: string;
  variant: string;
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, variant, setSelectedTab, index }) => {

  return (
    <li>
      <Button variant={`${variant}`} onClick={() => setSelectedTab(index)}>{title}</Button>
    </li>
  )
}

export default TabTitle