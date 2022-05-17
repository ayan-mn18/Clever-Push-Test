import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const SearchInputLogic = () => {
    const [qState, setQState] = useState()
    const qRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(qRef.current?.value)

        navigate(`/search/${qRef.current?.value}`);
    }
    // console.log(qState);
    return {
        // qState,setQState
        qRef,handleSubmit
    }
}

export default SearchInputLogic