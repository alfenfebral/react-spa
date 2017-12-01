import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
  Navbar, 
  NavbarBrand, 
  NavbarItem,
  brand,
  Icon,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd,
  Field,
  Control,
  Button,
} from 'bloomer'
import 'bulma/css/bulma.css'

// The Header creates links that can be used to navigate
// between routes.
// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/roster'>Roster</Link></li>
//         <li><Link to='/schedule'>Schedule</Link></li>
//         <li><Link to='/todo'>Todo</Link></li>
//       </ul>
//     </nav>
//   </header>
// )

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
    // this.onClick = this.onClick.bind(this);
  }

  // onClick(){
  //   this.setState({
  //     isActive: true,
  //   })
  // }

  render() {
    return (
      <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
      <NavbarBrand>
          <NavbarItem>
            Alfen Febral
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon icon='github' />
          </NavbarItem>
          <NavbarItem isHidden='desktop'>
              <Icon icon='twitter' style={{ color: '#55acee' }} />
          </NavbarItem>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
      </NavbarBrand>
      <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
              <NavbarItem href=''><Link to='/'>Home</Link></NavbarItem>
              <NavbarItem hasDropdown isHoverable>
                  <NavbarLink href='#'>Other Pages</NavbarLink>
                  <NavbarDropdown>
                      <NavbarItem href=''><Link to='/roster'>Roster</Link></NavbarItem>
                      <NavbarItem href=''><Link to='/schedule'>Schedule</Link></NavbarItem>
                      <NavbarDivider />
                      <NavbarItem href=''><Link to='/todo'>Todo</Link></NavbarItem>
                  </NavbarDropdown>
              </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
              <NavbarItem href="https://github.com/alfenfebral" isHidden='touch'>
                  <Icon icon='github' />
              </NavbarItem>
              <NavbarItem href="https://www.facebook.com/alfen.febral" isHidden='touch'>
                  <Icon icon='facebook' style={{ color: '#55acee' }} />
              </NavbarItem>
              <NavbarItem>
                  <Field isGrouped>
                      <Control>
                          <Button id="facebook" data-social-network="Facebook" data-social-action="facebook"
                          data-social-target="#" target="_blank" href="https://www.facebook.com/alfen.febral">
                              <Icon>
                                  <span className="fa fa-facebook" aria-hidden="true" />
                              </Icon>
                              <span>Facebook</span>
                          </Button>
                      </Control>
                  </Field>
              </NavbarItem>
          </NavbarEnd>
      </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header
