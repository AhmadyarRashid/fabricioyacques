import React from 'react';
import {Link} from "react-router-dom";

function Server(props) {
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
              <div className="wrapper">
                <div className="col-12 d-flex justify-content-center">
                  <form action="">
                    <div className="form-inline">
                      <label htmlFor="">Server NAME</label>
                      <input type="text" className="form-control form-darker"/>
                    </div>
                    <div className="form-inline">
                      <label htmlFor="">Server NAME</label>
                      <input type="text" className="form-control form-darker"/>
                    </div>
                    <div className="form-inline">
                      <input type="checkbox" id="checkbox1" className="form-check"/>
                      <label htmlFor="checkbox1" className="custom-check-label form-check--darker">Show only active
                        accounts</label>
                    </div>
                    <div className="form-inline">
                      <input type="checkbox" id="checkbox2" className="form-check"/>
                      <label htmlFor="checkbox2" className="custom-check-label form-check--darker">Force region</label>
                    </div>
                    <div className="form-inline">
                      <a href="#" className="btn btn-sort">Add server</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="wrapper">
                <div className="col-6">
                  <div className="section">

                    <div className="section-header">
                      <div className="header-left">
                        <span className="sub-heading">192.168.0.1</span>
                        <h2>Server 1</h2>
                      </div>
                    </div>

                    <div className="section__body">
                      <div className="wrapper">
                        <div className="server-info">
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Total Accounts</span>
                          </div>
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Active Accounts</span>
                          </div>
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Ingame Accounts</span>
                          </div>
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Inqueue Accounts</span>
                          </div>
                        </div>
                      </div>
                      <div className="wrapper my-15">
                        <a href="#" className="btn btn-sort"><i className="las la-pause mr-5"></i>Pause</a>
                        <a href="#" className="btn btn-sort"><i className="las la-play mr-5"></i>Unpause</a>
                        <a href="#" className="btn btn-sort"><i className="las la-exchange-alt mr-5"></i>Change
                          accounts</a>
                        <a href="#" className="btn btn-sort"><i className="las la-sync mr-5"></i>Restart</a>
                        <a href="#" className="btn btn-sort"><i className="las la-power-off mr-5"></i>Turn off</a>
                      </div>
                      <div className="wrapper">
                        <div className="accounts-grid">
                          <div className="accounts-header">
                            <span>Name</span>
                            <span>Current Level</span>
                            <span>Blue Essence</span>
                            <span>Status</span>
                            <span>state</span>
                          </div>
                          <div className="accounts-body">
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-6">
                  <div className="section">

                    <div className="section-header">
                      <div className="header-left">
                        <span className="sub-heading">192.168.0.1</span>
                        <h2>Server 1</h2>
                      </div>
                    </div>

                    <div className="section__body">
                      <div className="wrapper">
                        <div className="server-info">
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Total Accounts</span>
                          </div>
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Active Accounts</span>
                          </div>
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Ingame Accounts</span>
                          </div>
                          <div className="info-item">
                            <h4>34</h4>
                            <span>Inqueue Accounts</span>
                          </div>
                        </div>
                      </div>
                      <div className="wrapper my-15">
                        <a href="#" className="btn btn-sort"><i className="las la-pause mr-5"></i>Pause</a>
                        <a href="#" className="btn btn-sort"><i className="las la-play mr-5"></i>Unpause</a>
                        <a href="#" className="btn btn-sort"><i className="las la-exchange-alt mr-5"></i>Change
                          accounts</a>
                        <a href="#" className="btn btn-sort"><i className="las la-sync mr-5"></i>Restart</a>
                        <a href="#" className="btn btn-sort"><i className="las la-power-off mr-5"></i>Turn off</a>
                      </div>
                      <div className="wrapper">
                        <div className="accounts-grid">
                          <div className="accounts-header">
                            <span>Name</span>
                            <span>Current Level</span>
                            <span>Blue Essence</span>
                            <span>Status</span>
                            <span>state</span>
                          </div>
                          <div className="accounts-body">
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                            <div className="account-item">
                              <span>Summoner123</span>
                              <span>24 (58%)</span>
                              <span>43195</span>
                              <span>In queue</span>
                              <span>ON</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}

export default Server;