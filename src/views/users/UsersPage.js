import React, { Component } from 'react';
import {
  CButton,
  CRow,
  CCol,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

export class UsersPage extends Component {
    render() {
        return (
            <div>
        <h1>Ajo Users <CIcon name="cil-people" /></h1>

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

            </div>
        )
    }
}

export default UsersPage
