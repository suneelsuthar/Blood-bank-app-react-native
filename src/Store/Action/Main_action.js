const select_Data = (data)=>{
    console.log(data)
    return dispatch=>{
        dispatch({ type: "select_Data", payload: data })

    }
    
    
    }
    
    
    
    export {select_Data}