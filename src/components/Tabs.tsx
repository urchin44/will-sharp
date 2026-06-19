import React, { type ReactElement, useState } from "react"
import TabTitle from "./TabTitle.tsx"
import './Tabs.scss'

type Props = {
    children: ReactElement<any>[];
}

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div>
            <ul className="tabs">
                {children.map((item, index) => (
                    <TabTitle
                        key={index}
                        title={item.props.title}
                        variant={item.props.variant}
                        index={index}
                        setSelectedTab={setSelectedTab}
                    />
                ))}
            </ul>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs