import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './AboutBook.css'

function AboutBook() {
  return (
    <div>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="title" title="Title">
          Title
        </Tab>
        <Tab eventKey="author" title="Author">
          Author
        </Tab>
        <Tab eventKey="rating" title="Rating">
          rating
        </Tab>        
        <Tab eventKey="description" title="Description">
        her s=a jaksbdlak sdfkajlbsdgkasjdhf sdj kjasnfk jsdnvjbskjfs kdvjlhas fhskdjvb askjhf sghush;fhasefih sdhfasefhksjdbkjegu s s uhfsh gshdk asghsu vhskjdhg s
        </Tab>
        <Tab eventKey="location" title="Location">
          location
        </Tab>
      </Tabs>
    </div>
  )
}

export default AboutBook