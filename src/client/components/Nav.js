import React, { Component } from 'react'
const $ = window.$

class Nav extends Component {
  componentDidMount () {
    $(this.refs.collapse).sideNav()
  }

  render () {
    return (
      <nav role='navigation'>
        <div className='nav-wrapper container'>
          <a id='logo-container' href='/' className='brand-logo'>
            Flow
            <i className='material-icons left hide-on-med-and-down'>apps</i>
          </a>
          <ul id='dropdown' className='dropdown-content'>
            <li><a href='/login/register'>Register</a></li>
            <li className='divider'></li>
            <li><a href='/login/sign-in'>Sign In</a></li>
          </ul>
          <ul className='right hide-on-med-and-down'>
            <li><a href='/'>Timer</a></li>
            <li><a href='/times'>All Times</a></li>
            <li><a href='/stats'>Stats</a></li>
            <li>
              <a href='#!' data-activates='dropdown' className='dropdown-button'>
                Log In
                <i className='material-icons right'>arrow_drop_down</i>
              </a>
            </li>
          </ul>
          <ul ref='sideNav' id='nav-mobile' className='side-nav'>
            <li>
              <a href='/'>Timer</a>
            </li>
            <li className='divider'></li>
            <li id='stats-tab'>
              <a href='/times'>All Times</a>
            </li>
            <li className='divider'></li>
            <li>
              <a href='/stats'>Stats</a>
            </li>
            <li className='divider'></li>
            <li>
              <a href='/login/register'>Register</a>
            </li>
            <li className='divider'></li>
            <li>
              <a href='/login/sign-in'>Sign In</a>
            </li>
          </ul>
          <a href='#' ref='collapse' data-activates='nav-mobile' className='button-collapse'>
            <i className='material-icons'>menu</i>
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav
