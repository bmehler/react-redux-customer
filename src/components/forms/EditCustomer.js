import React from 'react';
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { customerUpdated } from "../../reducers/index";

export function EditCustomer(props) {

    const dispatch = useDispatch();

    const [customer, setCustomer] = useState(props.customer)

    useEffect(
        () => {
            setCustomer(props.customer)
        },
        [props]
    )

    const [id, setId] = useState();
    const [firstname, setFirstname] = useState();
    const [surname, setSurname] = useState();
    const [error, setError] = useState(null);

    const handleId = (e) => setId(e.target.value);

    const ref = useRef(null);
    const ref1 = useRef(null);

    const switchToCreate = () => {
        var createView = false
        props.switchToCreate(createView)
    }

    const handleClick = () => {
        if (ref.current.value && ref1.current.value) {
            dispatch(
                customerUpdated({
                    id: customer.id,
                    firstname: ref.current.value,
                    surname: ref1.current.value,
                })
            );
            setError(null);
        } else {
            setError("Bitte alle Felder ausfüllen!");
        }
        setFirstname("");
        setSurname("");
        switchToCreate()
    };

    return (
        <div>
            {error && error}
            <div className="mb-3">
                <div key={customer.id}>
                    <input
                        type="hidden"
                        name="id"
                        onChange={handleId}
                        defaultValue={props.customer.id}
                    />
                </div>
                <label htmlFor="firstname" className="form-label fw-bold">Vorname</label>
                <div key={props.customer.firstname}>
                    <input
                        ref={ref}
                        type="text"
                        name="firstname"
                        className="form-control form-control-lg"
                        id="firstname"
                        defaultValue={props.customer.firstname}
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label fw-bold">Nachname</label>
                <div key={props.customer.firstname}>
                    <input
                        ref={ref1}
                        type="text"
                        name="surname"
                        className="form-control form-control-lg"
                        id="surname"
                        defaultValue={props.customer.surname}
                    />
                </div>
            </div>
            <button onClick={handleClick}
                type="button"
                className="btn btn-lg btn-primary me-2">
                <FontAwesomeIcon icon={faPenToSquare} /> Editieren
            </button>
            <button
                type="button"
                className="btn btn-lg btn-success" onClick={switchToCreate}>
                Cancel
            </button>
        </div>
    );
}

export default EditCustomer