const initState = {
    theme: {
        primaryBackground:"#fff",
        secondaryBackground:"#f9f9f9",
        primaryFont: "#27E1C1",
        secondaryFont: "#2d2e32",
        boxShadow: "0 0 10px rgba(0,0,0,.09)",
    },
}

const rootReducer = (state=initState, action) => {
    console.log(state, action.payload);
    const dataChange = action.payload;
    switch(action.type){
        case `layout/changeTheme`:
            return{
                ...state,
                theme: {
                    ...dataChange,
                }

            }
        default:
            return{
                ...state,
            }
    }
}

export default rootReducer;