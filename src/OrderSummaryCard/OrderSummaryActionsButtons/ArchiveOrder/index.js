import React from 'react'
import FaArchive from 'react-icons/lib/fa/archive'

class ArchiveOrderButton extends React.Component {
  render() {
    return(
      <button 
        className="archive_order_button"
        onClick={
          () => 
            this.props.archiveOrder(this.props.order_id)} >
        <span className="archive_order_label">Archive</span>
        <FaArchive />
      </button>
    )
  }
}

export default ArchiveOrderButton