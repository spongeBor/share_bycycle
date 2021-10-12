import { Col, Row} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import React from 'react'
import './style/common.less'
export default class Admin extends React.Component {
  render() {
    return (
      <Row className='container'>
        <Col span='4' className='nav-left'>
          <NavLeft/>
        </Col>
        <Col span='20' className='main'>
          <Header>
            header
          </Header>
          <Row className='content'>
            content
            {/* {this.props.children} */}
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}