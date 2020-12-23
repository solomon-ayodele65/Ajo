import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import MainChartExample from '../charts/MainChartExample.js';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'));
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'));

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Ajo App usage rating</h4>
              {/* <div className="small text-muted"></div> */}
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">First Ajo</div>
              <strong>percentage of activeness (100%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={100}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Recent payouts</div>
              <strong>percentage of payouts (100%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={100}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Group completions</div>
              <strong>percentage of completions (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={60}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pending activities</div>
              <strong>percentage of activities (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={80}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Group activeness</div>
              <strong>percentage of activeness (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts/> */}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Traffic {' & '} Activities
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">Remital payouts</small>
                        <br />
                        <strong className="h4">12</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Manual payouts</small>
                        <br />
                        <strong className="h4">53</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Daily
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="10" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Weekly
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Monthly
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Yearly
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Biennial
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Others
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53" />
                      <CProgress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  {/* <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Sunday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div> */}
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      Remital
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Manual
                    </small>
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Mixed gender</small>
                        <br />
                        <strong className="h4">571</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">Generated links</small>
                        <br />
                        <strong className="h4">17</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user" />
                      <span className="title">Male</span>
                      <span className="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="43" />
                    </div>
                  </div>
                  <div className="progress-group mb-5">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user-female" />
                      <span className="title">Female</span>
                      <span className="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="37" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      {/* <CIcon className="progress-group-icon" name="cil-globe-alt" /> */}
                      <span className="title">Invite link</span>
                      <span className="ml-auto font-weight-bold">5<span className="text-muted small">(25%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="25" />
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      {/* <CIcon name="cil-user" className="progress-group-icon" /> */}
                      <span className="title">Registration link</span>
                      <span className="ml-auto font-weight-bold">7 <span className="text-muted small">(15%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="15" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      {/* <CIcon name="cil-mail"/> */}
                      <span className="title">Mail invite</span>
                      <span className="ml-auto font-weight-bold">5<span className="text-muted small">(11%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="11" />
                    </div>
                  </div>
                  {/* <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-linkedin" className="progress-group-icon" />
                      <span className="title">LinkedIn</span>
                      <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="8" />
                    </div>
                  </div> */}
                  {/* <div className="divider text-center">
                    <CButton color="link" size="sm" className="text-muted">
                      <CIcon name="cil-options" />
                    </CButton>
                  </div> */}

                </CCol>
              </CRow>

              <br />
              <br/>
              <div className="text-center">
                  <h1>Users Table</h1>
              </div>
              <br/>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Users</th>
                    <th>Users email</th>
                    <th>Member type</th>
                    <th>User status</th>
                    <th>Payment status</th>
                    <th>Payment Method</th>
                    <th>Group</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        {/* <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span> */}
                        User picture
                      </div>
                    </td>
                    <td>
                      <div>Mama yusuf</div>
                      <div className="small text-muted">
                       Join date: Jan 1, 2021
                      </div>
                    </td>
                    <td className="text-center">
                     yusuf@gmail.com
                    </td>
                    <td className="text-center">
                      {/* <CIcon height={25} name="cif-ng" title="ng" id="ng" /> */}
                      Admin
                    </td>
                    <td>
                        <div>
                          <strong>Active</strong>
                          <span className="c-avatar-status bg-success"></span> 
                        </div>
                    </td>
                    <td className="text-center">
                      {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
                     Pending
                    </td>
                    <td className="text-center">
                     Manual
                    </td>
                    <td>
                      <div className="small text-muted">Group name</div>
                      <strong>yusuf group</strong>
                    </td>
                    <td>
                      <CRow>
                        <CCol sm="6">
                          <CButton className="bg-info">Details</CButton>
                        </CCol>
                        <CCol sm="6">
                          <CButton className="bg-danger">Delete</CButton>
                        </CCol>
                      </CRow>
                    </td>
                  </tr>
                  
                </tbody>
              </table>

              <br/>
                <CButton className="bg-primary float-right">
                <Link to="/UsersPage" style={{width:150,height:30,color:'white'}}>View all</Link>
                </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
