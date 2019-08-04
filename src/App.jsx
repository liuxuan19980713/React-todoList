import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import About from './components/About.jsx'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        hashValue:null
    }
  }
  componentWillMount(){
      this.setState({
          hashValue: window.location.hash.split('/')[1]
      })
  }
  render () {
    return (
      <HashRouter>
        <Layout className='layout' style={{height:'100%' }}>
          <Header>
            <div className='logo' />
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={[this.state.hashValue]}
              style={{ lineHeight: '64px' }}
            >
                    <Menu.Item key="home"> <Link  to="/home">首页</Link></Menu.Item>
                    <Menu.Item key="movie"> <Link  to="/movie">电影</Link></Menu.Item>
                    <Menu.Item key="about"> <Link   to="/about">关于</Link></Menu.Item>   
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff',  minHeight: 280,height:"100%" }}>
             <Route path="/home"  component={Home}></Route>
             <Route path="/movie" component={Movie}></Route>
             <Route path="/about" component={About}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by 刘宣
          </Footer>
        </Layout>
      </HashRouter>
    )
  }
  
}
