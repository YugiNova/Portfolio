export const ToggleTheme = (data) => {
    return{
        type: `layout/changeTheme`,
        payload: {...data}
    }
}