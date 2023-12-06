import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", firstname: "Michael", surname: "Muster" },
];

const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        customerAdded(state, action) {
            state.push(action.payload); 
        },
        customerDeleted(state, action) {
            const { id } = action.payload;
            const customer = current(state)
            const currentCustomer = customer.filter((customer) => customer.id !== id);
            return currentCustomer;
        },
        customerUpdated(state, action) {
            const { id, firstname, surname } = action.payload;
            const customer = current(state);
            let updateData = {
                id: id, firstname: firstname, surname: surname
            }

            //console.log('updateData', updateData)

            updateData = customer.map((item => {
                if (item.id === updateData.id) {
                    return Object.assign({}, item, {id: id, firstname:firstname, surname:surname})
                }

                return item
            }))

            return updateData

            //console.log('allCustomers', updateData)
        }
    },
});


export const { customerAdded, customerRead, customerUpdated, customerDeleted } = customersSlice.actions;

export default customersSlice.reducer;