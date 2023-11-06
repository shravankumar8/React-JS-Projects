import React from 'react'
import all_product from '../components/Assets/all_product'
const shopContextProvider =(props)=>{
    const contextValue={all_product}
    return(
        <shopContextProvider.Provider Value={contextValue}
        >{props.children}

        </shopContextProvider.Provider>
    )
}
export default shopContextProvider;