import React from 'react';
import {Link} from "react-router-dom";

function AddAccount(props) {
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
                <div className="col-12">
                  <div className="section">

                    <div className="section-header">
                      <div className="header-left">
                        <span className="sub-heading">Your accounts</span>
                        <h2>Add Accounts</h2>
                      </div>
                    </div>

                    <div className="section__body">
                      <div className="wrapper">
                        <div className="col-6">
                          <div className="d-flex justify-content-between align-items-center mb-10">
                            <span className="title">Accounts</span>
                            <a href="#" className="btn btn-sort mr-0">Change format</a>
                          </div>
                          <textarea name="" className="form-textarea" id="" cols="30" rows="10"
                                    placeholder="summoner123:password123:NA"></textarea>
                        </div>
                        <div className="col-6">
                          <div className="wrapper">
                            <div className="col-3">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Desired Level</label>
                                <input type="text" className="form-control" placeholder="30"/>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Desired BE</label>
                                <input type="text" className="form-control" placeholder="49500"/>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Icon ID</label>
                                <input type="text" className="form-control" placeholder="0"/>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Priority</label>
                                <input type="text" className="form-control" placeholder="0"/>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Disenchant loot</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Fragment champions</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Disenchant loot</label>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Mission 1</label>
                                <input type="text" className="form-control" placeholder="30"/>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Mission 2</label>
                                <input type="text" className="form-control" placeholder="49500"/>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Mission 3</label>
                                <input type="text" className="form-control" placeholder="0"/>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Mission 4</label>
                                <input type="text" className="form-control" placeholder="0"/>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Mission 5</label>
                                <input type="text" className="form-control" placeholder="0"/>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-group">
                                <label htmlFor="label" className="form-label">Mission 6</label>
                                <input type="text" className="form-control" placeholder="0"/>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Random Lane</label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Kill Explorer</label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Skip tutorial</label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Skip if name taken</label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <input type="checkbox" id="checkbox3" className="form-check"/>
                                <label htmlFor="checkbox3" className="custom-check-label">Disenchant emblems</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-0">
                                <button className="button btn-primary"><i className="las la-2x la-save"></i>Save changes
                                </button>
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
          </div>
        </main>
      </div>
  )
}
export default AddAccount;