import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://Ajo.com" target="_blank" rel="noopener noreferrer">Ajo.Vest</a>
        <span className="ml-1">&copy; 2020 Techend inc.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://Techend.inc" target="_blank" rel="noopener noreferrer">Techend V(3.0)</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
