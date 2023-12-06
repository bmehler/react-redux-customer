import React from 'react'
import { customerDeleted } from "../../reducers/index";
import { useDispatch, useSelector } from "react-redux";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CustomerTable(props) {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers);

    const handleRead = (id, firstname, surname) => {
        props.handleRead(id, firstname, surname)
    }

    const handleDelete = (id) => {
        dispatch(customerDeleted({id}));
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th scope="col">ID</th>
                        <th scope="col">Vorname</th>
                        <th scope="col">Nachname</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(({ id, firstname, surname }, i) => (
                        <tr key={i}>
                            <td className="align-middle">{id}</td>
                            <td className="align-middle">{firstname}</td>
                            <td className="align-middle">{surname}</td>
                            <td className="align-middle">
                                <button onClick={() => handleRead(id, firstname, surname)} type="button" className="btn btn-xl btn-primary mx-2"><FontAwesomeIcon icon={faPenToSquare} /><span className="edit-label"> Editieren</span></button>
                                <button onClick={() => handleDelete(id)} type="button" className="btn btn-xl btn-success"><FontAwesomeIcon icon={faTrashCan} /><span className="delete-label"> Löschen</span></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerTable