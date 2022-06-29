export const changeMode=(color)=>(dispatch)=>{
    dispatch({
        type:"COLOR_CHANGE",
        payload:color
    })

    localStorage.setItem("theme",color)
}