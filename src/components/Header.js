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
            <div class="row pt-5">
                <div class="col-lg-12">
                    <div class="alert alert-secondary mb-5" role="alert">
                        <p class="fw-bold mb-1">Dies ist ein Kundenmanagement Tool (Demo). Es wurde mit React Redux umgesetzt.</p>
                        <p class="fw-bold mb-1">Es werden <span class="fw-bold text-decoration-underline">keine Daten gespeichert</span>! <span class="fw-bold text-decoration-underline">No data are saved</span>!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header