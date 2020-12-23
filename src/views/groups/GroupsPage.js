import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {
  CButton,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'



export class GroupsPage extends Component {
    render() {
        return (
            <div>
                <h1>Ajo Groups table</h1>
                 <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Group id</th>
                    <th>Group name</th>
                    <th>Amount</th>
                    <th>Frequency</th>
                    <th>Group status</th>
                    <th>Payment Method</th>
                    <th>Group admin</th>
                    <th>Created at</th>
                    <th>Group code</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                       Ajo-Group-234314
                      </div>
                    </td>
                    <td>
                      Carpenter
                    </td>
                    <td className="text-center">
                     5,000
                    </td>
                    <td className="text-center">
                      weekly
                    </td>
                    <td>
                        Active
                    </td>
                    <td className="text-center">
                    Manual
                    </td>
                    <td className="text-center">
                     yusuf rasheed
                    </td>
                    <td>
                        2020-12-26
                    </td>
                    <td>
                    http://ajo-group/234453
                    </td>
                    <td>
                        <CButton className='bg-danger'>Delete</CButton>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
        )
    }
}

export default GroupsPage
