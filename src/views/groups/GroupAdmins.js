import React, { Component } from 'react';
import { CIcon } from '@coreui/icons-react';
import { CButton,CRow,CCol } from '@coreui/react';

export class GroupAdmins extends Component {
    render() {
        return (
            <div> 
                <h1>Group admins</h1>
                <br/>
                 <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Users name</th>
                    <th>Users email</th>
                    <th>Group name</th>
                    <th>User status</th>
                    <th>Group status</th>
                    <th>Payment Method</th>
                    <th>Group creation date</th>
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
                      eleja yiyan group
                    </td>
                    <td>
                        <div>
                            Active 
                        </div>
                    </td>
                    <td className="text-center">
                      {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
                     Active
                    </td>
                    <td>
                        manual
                    </td>
                    <td>
                        2020-12-05.
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
            </div>
        )
    }
}

export default GroupAdmins
