import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { customerAdded } from "../../reducers/index";

function AddCustomer() {

    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [error, setError] = useState(null);

    const handleFirstname = (e) => setFirstname(e.target.value);
    const handleSurname = (e) => setSurname(e.target.value);

    const lastCustomer = useSelector((state) => state.customers[state.customers.length - 1]);

    const handleClick = () => {
        if (firstname && surname) {
            dispatch(
                customerAdded({
                    id: lastCustomer ? (parseInt(lastCustomer.id) + 1) : 1,
                    firstname,
                    surname,
                })
            );
            setError(null);
        } else {
            setError("Bitte alle Felder ausfüllen!");
        }
        setFirstname("");
        setSurname("");
    };

    return (
        <div>
            {error && error}
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label fw-bold">Vorname</label>
                <input
                    type="text"
                    name="firstname"
                    className="form-control form-control-lg"
                    id="firstname"
                    onChange={handleFirstname}
                    value={firstname} />
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label fw-bold">Nachname</label>
                <input
                    type="text"
                    name="surname"
                    className="form-control form-control-lg"
                    id="surname"
                    onChange={handleSurname}
                    value={surname} />
            </div>
            <button onClick={handleClick}
                type="button"
                className="btn btn-lg btn-primary">
                <FontAwesomeIcon icon={faPlus} /> Anlegen
            </button>
        </div>
    );
}

export default AddCustomer