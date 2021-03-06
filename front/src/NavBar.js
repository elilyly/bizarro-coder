import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  state = {activeItem: 'profile'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (

            <div>
              <Menu color='black' inverted >
                <Menu.Item header>BizarroCoder</Menu.Item>
                  <Link to='/profile'><Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}/></Link>

                  <Link to='/quizzes'><Menu.Item name='quizzes' active={activeItem === 'quizzes'} onClick={this.handleItemClick}/></Link>

                <Menu.Menu  position='right'>
                  {
                    this.props.currentUser ? (
                        <Link to='/logout'>
                          <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                          />
                        </Link>
                      ) : (
                        <Link to='/login'>
                          <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                          />
                        </Link>
                      )
                  }
                  {/* <Link to='/demo'><Menu.Item name='demo' active={activeItem === 'demo'} onClick={this.handleItemClick}/></Link> */}
               </Menu.Menu>
              </Menu>
            </div>
          // </div>
      //   </div>
      // </div>
    )
  }
}
