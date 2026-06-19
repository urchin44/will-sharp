import Tab from './components/Tab'
import Tabs from './components/Tabs'
import { portfolioImages } from './assets/portfolio/portfolioArr'
import tinyHouse from './assets/tinyhouse.jpg'


function Media() {

    return (

        <div className='nav-bar'>
            <Tabs>
                <Tab title="William W. Sharp" variant="borderless large">
                    <div>
                        <img className="img med" src={tinyHouse} alt="can't show image" />
                    </div>
                </Tab>
                <Tab title="portfolio" variant="borderless">
                    <div className='gallery-div'>
                        {portfolioImages.map(p => {
                            return (
                                <img className="img med" src={p} alt="can't show image" />
                            );
                        })}
                    </div>
                </Tab>
                <Tab title="platinum" variant="borderless">
                    <div></div>
                </Tab>
                <Tab title="wedding" variant="borderless">
                    <div></div>
                </Tab>
                <Tab title="coaching" variant="borderless">
                    <div></div>
                </Tab>
                <Tab title="about" variant="borderless">
                    <div></div>
                </Tab>
                <Tab title="contact" variant="borderless">
                    <div></div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Media
