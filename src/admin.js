import { Col, Row} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
export default class Admin extends React.Component {
  render() {
    return (
      <Row>
        <Col span='3'>Left</Col>
        <Col span='21'>
          <Header>
            header
          </Header>
          <Row>
            content
          </Row>
          <Footer>
            footer
          </Footer>
        </Col>
      </Row>
    )
  }
}