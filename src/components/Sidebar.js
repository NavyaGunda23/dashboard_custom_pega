import React from 'react'
import './Sidebar.css'


function Sidebar(){
    return(
        <div className="sidebar">
                <ul>
                     <li><a ><i className="icon24 di-block icon-logo v-middle mr-20"></i><span>Compass</span></a></li>
                     <li className="search-container"><a ><i className="icon24 di-block v-middle icon-search mr-20"></i>Search</a></li>
                     <li><a ><i className="icon24 di-block v-middle icon-plus mr-20"></i><span>Create </span><i className="icon16 di-block v-middle icon-arrow mr-20"></i></a></li>
                     <li><a  ><i className="icon24 di-block v-middle icon-home mr-20"></i><span>Home </span></a></li>
                     <li><a  ><i className="icon24 di-block v-middle icon-data mr-20"></i><span>Explore Data </span></a></li>
                     <li><a  ><i className="icon24 di-block v-middle icon-smile mr-20"></i><span>Things I Like</span></a></li>
                    <li className="product-name">
                        <li>
                        <a  ><i className="icon24 di-block v-middle icon-log mr-20"></i><span>Recent</span></a>
                        </li>
                        <li ><a  ><i className="User mr-20">N</i> <span>Navya Gunda</span></a></li>
                    </li>
                    
                </ul>
        </div>
    )
}

export default Sidebar