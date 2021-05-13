import React from 'react'
import {Link} from 'react-router-dom'
const Breadcrumb = ({path}) => {
    return (
        <div className="breadcrumb">
            <Link to = '/'>Strona Główna</Link>
            <Link>{path}</Link>
        </div>
    )
}

export default Breadcrumb
