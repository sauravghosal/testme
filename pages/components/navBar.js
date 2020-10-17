// import Link from 'next/link';
// import {slide as Menu } from "react-burger-menu";
// import styled from 'styled-components';


import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
    // .
    // .
    // .
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

// const StyledAnchor=styled.a`
//     padding: 1rem 3rem;
//     display: flex;
//     align-items:center;
//     position: relative;
//     text-transform: uppercase;
//     font-weight: 900;
//     font-size: 1em;
//     background: none;
//     border: 0;
//     cursor: pointer;
//     `;



// class Navbar extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             menuOpen: false 
//         }
//     }
//     handleStateChange (state) {
//         this.setState({menuOpen:state.isOpen})
//     }
//     closeMenu() {
//         this.setState({menuOpen:false})
//     }
//     render() {
//         return (
//             <Menu noOverlay width= {280}
//             isOpen= {this.state.menuOpen}
//             onStateChange={(state) => this.handleStateChange(state)}>
//                 <Link href="/dashboard">
//                     <StyledAnchor onClick={()=> this.closeMenu()}>Dashboard</StyledAnchor>
//                     </Link>
//                 <Link href="/stats">
//                     <StyledAnchor onClick={()=> this.closeMenu()}>Stats</StyledAnchor>
//                 </Link>
//                 <Link href="/dashboard">
//                     <StyledAnchor onClick={()=> this.closeMenu()}>Dashboard</StyledAnchor>
//                     </Link>
//         </Menu>
//         )
//     }
// }