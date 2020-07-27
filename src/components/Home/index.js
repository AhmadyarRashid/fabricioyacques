import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  const [profileDropdown, setProfileDropdown] = React.useState(false);
  const [sideBar, setSideBar] = React.useState(false);
  return (
      <div className="app">
        <div className={`sidebar js-sidebar ${sideBar ? 'show' : null}`}>
          <div className="logo">
            <img src="dist/images/Gydrus.svg"/>
            <span className="name">Gydrus</span>
            <span className="status">beta</span>
          </div>
          <ul className="sidebar__nav">

            <li className="sidebar__item">
              <Link to='/' className="sidebar-link">
                <i className="las la-chart-bar"></i>Dashboard
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to='addAccount' className="sidebar-link">
                <i className="las la-user-plus"></i>Add Accounts
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to='/server' className="sidebar-link">
                <i className="las la-download"></i>Export Accounts
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to='/setting' className="sidebar-link">
                <i className="las la-user-edit"></i>Edit Accounts
              </Link>
            </li>

          </ul>
          <div className="version">Version <strong>0.983</strong></div>
        </div>
        <main className="main">
          <nav className="nav">
            <div className="navbar-nav--left">
              <ul className="nav-menu">
                <li className="nav-item" onClick={() => setSideBar(!sideBar)}>
                  <span className="nav-link nav-button js-menu-toggle"><i className="las la-2x la-bars"></i></span>
                </li>
                <li className="nav-item m-hidden">
                  <a href="#" className="nav-link">Faq</a>
                </li>
                <li className="nav-item m-hidden">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item m-hidden">
                  <a href="#" className="nav-link">Support</a>
                </li>
              </ul>
              <span className="status">Actual status: <strong>Working</strong></span>
            </div>
            <div className="navbar-nav--right">
              <button className="profile js-dropdown" onClick={() => setProfileDropdown(!profileDropdown)}>
                <h4 className="profile-name">Melvin <span className="role role-tester">tester</span></h4>
                <span className="profile-status online">online</span>
              </button>
              <ul className={`dropdown-menu js-profile-dropdown ${profileDropdown ? 'show' : null}`}>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link"><i className="las la-user"></i>Profile</a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link"><i className="las la-cog"></i>Settings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#" className="dropdown-link"><i className="las la-sign-out-alt"></i>Logout</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <div className="widgets">
              <div className="widget">
                <div className="widget-icon"><i className="las la-user-friends"></i></div>
                <div className="widget-details">
                  <span className="number">977</span>
                  <span className="span">Added accounts</span>
                </div>
              </div>
              <div className="widget">
                <div className="widget-icon"><i className="las la-user-check"></i></div>
                <div className="widget-details">
                  <span className="number">977</span>
                  <span className="span">Added Accounts</span>
                </div>
              </div>
              <div className="widget">
                <div className="widget-icon"><i className="las la-user-alt-slash"></i></div>
                <div className="widget-details">
                  <span className="number">977</span>
                  <span className="span">Quota Reached</span>
                </div>
              </div>
              <div className="widget">
                <div className="widget-icon"><i className="las la-play"></i></div>
                <div className="widget-details">
                  <span className="number">34</span>
                  <span className="span">Ingame Accounts</span>
                </div>
              </div>
              <div className="widget">
                <div className="widget-icon"><i className="las la-pause"></i></div>
                <div className="widget-details">
                  <span className="number">12</span>
                  <span className="span">Offline Accounts</span>
                </div>
              </div>
            </div>
            <div className="main-content">
              <div className="section-header">
                <div className="header-left">
                  <span className="sub-heading">Actual status</span>
                  <h2>Active Accounts</h2>
                </div>
                <div className="header-middle">
                  <div className="sorting">
                    <span>Selected:</span>
                    <a href="#" className="btn btn-sort"><i className="las la-pause"></i>Pause</a>
                    <a href="#" className="btn btn-sort"><i className="las la-pause"></i>Pause</a>
                    <a href="#" className="btn btn-sort"><i className="las la-pause"></i>Pause</a>
                    <a href="#" className="btn btn-sort"><i className="las la-pause"></i>Pause</a>
                    <a href="#" className="btn btn-sort"><i className="las la-pause"></i>Pause</a>
                  </div>
                </div>
                <div className="header-right">
                  <a href="#" className="btn btn-sort"><i className="las la-pause"></i>Pause</a>
                </div>
              </div>
              <table className="table">
                <thead>
                <tr>
                  <th className="outside">
                    <form action="#">
                      <input type="checkbox"/>
                    </form>
                  </th>
                  <th>Name</th>
                  <th>Current level</th>
                  <th>Desired level</th>
                  <th>Skins</th>
                  <th>Blue Essence</th>
                  <th>Status</th>
                  <th>Play time</th>
                  <th>Region</th>
                  <th>Active</th>
                  <th>Status</th>
                  <th>State</th>
                  <th>Actions</th>
                  <th>VM</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="outside">
                    <form action="#">
                      <input type="checkbox"/>
                    </form>
                  </td>
                  <td>Summoner123</td>
                  <td>28 <span><span>(58%)</span></span></td>
                  <td>30</td>
                  <td>6</td>
                  <td>45 685</td>
                  <td>Healthy</td>
                  <td>86h 52m</td>
                  <td>EUNE</td>
                  <td className="status working"><i className="la la-check"></i></td>
                  <td>In queue</td>
                  <td>ON</td>
                  <td>...</td>
                  <td><i className="la la-cog"></i></td>
                </tr>
                <tr>
                  <td className="outside">
                    <form action="#">
                      <input type="checkbox"/>
                    </form>
                  </td>
                  <td>Summoner123</td>
                  <td>28 <span>(58%)</span></td>
                  <td>30</td>
                  <td>6</td>
                  <td>45 685</td>
                  <td>Healthy</td>
                  <td>86h 52m</td>
                  <td>EUNE</td>
                  <td className="status working"><i className="la la-check"></i></td>
                  <td>In queue</td>
                  <td>ON</td>
                  <td>...</td>
                  <td><i className="la la-cog"></i></td>
                </tr>
                <tr>
                  <td className="outside">
                    <form action="#">
                      <input type="checkbox"/>
                    </form>
                  </td>
                  <td>Summoner123</td>
                  <td>28 <span>(58%)</span></td>
                  <td>30</td>
                  <td>6</td>
                  <td>45 685</td>
                  <td>Healthy</td>
                  <td>86h 52m</td>
                  <td>EUNE</td>
                  <td className="status working"><i className="la la-check"></i></td>
                  <td>In queue</td>
                  <td>ON</td>
                  <td>...</td>
                  <td><i className="la la-cog"></i></td>
                </tr>
                <tr>
                  <td className="outside">
                    <form action="#">
                      <input type="checkbox"/>
                    </form>
                  </td>
                  <td>Summoner123</td>
                  <td>28 <span>(58%)</span></td>
                  <td>30</td>
                  <td>6</td>
                  <td>45 685</td>
                  <td>Healthy</td>
                  <td>86h 52m</td>
                  <td>EUNE</td>
                  <td className="status working"><i className="la la-check"></i></td>
                  <td>In queue</td>
                  <td>ON</td>
                  <td>...</td>
                  <td><i className="la la-cog"></i></td>
                </tr>
                <tr>
                  <td className="outside">
                    <form action="#">
                      <input type="checkbox"/>
                    </form>
                  </td>
                  <td>Summoner123</td>
                  <td>28 <span>(58%)</span></td>
                  <td>30</td>
                  <td>6</td>
                  <td>45 685</td>
                  <td>Healthy</td>
                  <td>86h 52m</td>
                  <td>EUNE</td>
                  <td className="status working"><i className="la la-check"></i></td>
                  <td>In queue</td>
                  <td>ON</td>
                  <td>...</td>
                  <td><i className="la la-cog"></i></td>
                </tr>
                <tr>
                  <td className="outside">
                    <form action="#">
                      <input type="checkbox"/>
                    </form>
                  </td>
                  <td>Summoner123</td>
                  <td>28 <span>(58%)</span></td>
                  <td>30</td>
                  <td>6</td>
                  <td>45 685</td>
                  <td>Healthy</td>
                  <td>86h 52m</td>
                  <td>EUNE</td>
                  <td className="status working"><i className="la la-check"></i></td>
                  <td>In queue</td>
                  <td>ON</td>
                  <td>...</td>
                  <td><i className="la la-cog"></i></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
  );
}

export default Home;
