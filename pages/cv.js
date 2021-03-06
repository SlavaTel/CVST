import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import Iframe from 'react-iframe'

import { Row, Col } from 'reactstrap'
 
class Cv extends React.Component {

  render() {
    return(
      <BaseLayout {...this.props.auth}>
        <BasePage title="Preview of my CV" className="cv-page">
          <Row>
            <Col md={{size: 8, offset: 2}}>
              <div className="cv-title" >
                <a download="cv.pdf" className="btn btn-success" href="/static/cv.pdf">
                  Download
                </a>
              </div>
              <Iframe url="/static/cv.pdf"
                      width="100%"
                      height="800px"
                      
                      />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Cv;