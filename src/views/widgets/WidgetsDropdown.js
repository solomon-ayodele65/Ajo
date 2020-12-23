import React from 'react';
import { Link } from 'react-router-dom';
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CBadge
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
    
      <CCol sm="6" lg="3">
      <Link to='/usersPage' className="text-decoration-none">
        <CWidgetDropdown style={{height:150}}
          color="gradient-primary"
          header="Users"
          text="active users (20)"
          footerSlot={
            <div>
               <CIcon name="cil-user" style={{width:50,height:50,marginLeft:80,}} />
               <CBadge color="primary" className="">567</CBadge>
             </div>
            }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem><Link to='/usersPage'>View users</Link></CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
        </Link>
      </CCol>
     

      
      <CCol sm="6" lg="3">
      <Link to='/groupsPage' className="text-decoration-none">
        <CWidgetDropdown style={{height:150}}
          color="gradient-info"
          header="Groups"
          text="active groups (10)"
          footerSlot={
            <div>
               <CIcon name="cil-people" style={{width:50,height:50,marginLeft:80,}} />
               <CBadge color="info" className="">312</CBadge>
             </div>
            }
        >
           {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem><Link to='/groupsPage'>View groups</Link></CDropdownItem>
              <CDropdownItem><Link to='/groupAdmins'>View admins</Link></CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
        </Link>
      </CCol>
     

      <CCol sm="6" lg="3">
        <CWidgetDropdown style={{height:150}}
          color="gradient-success"
          header="Completed ajo"
          text="no of ajo ajo (3)"
          footerSlot={
            <div>
               <CIcon name="cil-pencil" style={{width:50,height:50,marginLeft:80,}} />
               <CBadge color="success" className="">58</CBadge>
             </div>
            }
        >
          {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>View ajo details</CDropdownItem>
              <CDropdownItem>View ajo transactions</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown style={{height:150}}
          color="gradient-warning"
          header="Pending Ajos"
          text="no of active ajo (7)"
          footerSlot={
            <div>
               <CIcon name="cil-calendar" style={{width:50,height:50,marginLeft:80,}} />
               <CBadge color="warning" className="">132</CBadge>
             </div>
            }
        >
            {/* <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Pending Ajo groups</CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
