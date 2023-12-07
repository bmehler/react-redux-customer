import React from 'react'
import { DarkModeToggle } from '../components/Utilities/toggle'
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

    return (
        <div className="row">
            <div className="col-lg-6">
                <h1><FontAwesomeIcon icon={faPeopleGroup} /> Kundenmanagement</h1> 
            </div>
            <div className="col-lg-6">
                <div className="float-lg-end">
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Header