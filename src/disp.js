import React from 'react'
import {useSelector} from 'react-redux'

const Disp = () => {
    const sub = useSelector(state => state.sub);
    console.log(sub)
    return (
        <div>
            
        </div>
    )
}

export default Disp
