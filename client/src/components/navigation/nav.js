import {CreateRoundedButton, CreateNavigationButton} from '../../presets/buttons';
import {CreateTitle} from '../../presets/titles';

import Logo from '../../assets/logo.png';
import React from 'react';

import '../../assets/css/nav.css';
import '../../assets/css/index.css';


class Navigation extends React.Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
          <nav>
            <div className="navBanner">
              <img src={Logo} className="logo" />
              {CreateTitle("ATOG", "2.5", "2.25vw")}
              <ul className="mainNavigation">
                <li>
                  {CreateNavigationButton("Home", "/", true, true)}
                </li>
                <li>
                  {CreateNavigationButton("About", "/about", false, true)}
                </li>
                <li>
                  {CreateNavigationButton("Updates", "/updates", false, true)}
                </li>
                <li>
                  {CreateNavigationButton("ORBAT", "https://docs.google.com/spreadsheets/d/1tYnx_O7ZsvLY9XApdhCRef0xHulvRmSMLj8SGre7WvI/", false, false)}
                </li>
              </ul>
            </div>
        </nav>
      );
  }
}

export default Navigation;
