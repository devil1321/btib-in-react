import React from 'react'
import {Link} from 'react-router-dom'
const Breadcrumb = ({path}) => {
    return (
        <div className="breadcrumb">
            <Link to = '/'>Strona Główna</Link>
            <Link to = '/'>{path}</Link>
        </div>
    )
}

export default Breadcrumb
