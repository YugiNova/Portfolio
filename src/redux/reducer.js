const initState = {
    theme: {
        primaryBackground:"#fff",
        secondaryBackground:"#f9f9f9",
        primaryFont: "#27E1C1",
        secondaryFont: "#2d2e32",
        boxShadow: "0 0 10px rgba(0,0,0,.09)",
    },
    projects: [
        {
            name: "Coin base",
            desc: "Website tracking market value of first 100 crypto currencies on the world, get API data from Coingeko",
            tech: ["React", "ChartJS"],
            image: "coinbase",
            code: "https://github.com/YugiNova/CoinBase",
            demo: "https://yuginova.github.io/CoinBase"
        },
        {
            name: "Basic Dashboard",
            desc: "A basic admin page to manage users and product with full CRUD options, get API from mockAPI",
            tech: ["React", "Ant Design", "React router"],
            image: "dashboard",
            code: "https://github.com/YugiNova/ReactGreen",
            demo: "https://yuginova.github.io/ReactGreen"
        },{
            name: "Gearvn homepage",
            desc: "Clone homepage template of gearvn.com not using library, only HTML, CSS, JS",
            tech: ["HTML", "CSS", "JS"],
            image: "gearvn",
            code: "https://github.com/YugiNova/gearvnclone.github.io",
            demo: "https://yuginova.github.io/gearvnclone.github.io/"
        }
    ]
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