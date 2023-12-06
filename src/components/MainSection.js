import React, { useState } from 'react';
import CustomerTable from './tables/CustomerTable'
import AddCustomer from './forms/AddCustomer'
import EditCustomer from './forms/EditCustomer'

const MainSection = () => {

    const initialState = [{id: "", firstname: "", surname: ""}];

    const [customer, setCustomer] = useState(initialState)
    const [editing, setEditing] = useState(false)

    const handleRead = (id, firstname, surname) => {
        setCustomer({ id: id, firstname: firstname, surname: surname })
        setEditing(true)
    }

    const switchToCreate = (status) => {
        setEditing(status)
    }

    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="pt-3">
                    <h2 className="pb-5">Neu anlegen</h2>
                    {!editing ? (
                        <AddCustomer />
                    ) : (
                        <EditCustomer customer={customer} setCustomer={setCustomer} switchToCreate={switchToCreate} />
                    )}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="pt-3">
                    <h2 className="pb-5">Kunden</h2>
                    <CustomerTable handleRead={handleRead} />
                </div>
            </div>
        </div>       
    )
}

export default MainSection