import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Content, Sider } = Layout
import {Link,Route} from 'react-router-dom'
export default class Movie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <Layout style={{padding:0,height:'100%'}}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
              {/* 默认显示第一页，所以这里把路由规定死了为1 */}
            <Menu.Item key='1'><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
            <Menu.Item key='2'><Link to="/movie/comming_soon/1">即将上映</Link></Menu.Item>
            <Menu.Item key='3'><Link to="/movie/top250/1">top250</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft:'1px' }}>
          <Content
            style={{
              background: '#fff',
              margin: 0,
              minHeight: 280,
              padding:10
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}
