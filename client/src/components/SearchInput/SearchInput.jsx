import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchInputLogic from './SearchInputLogic'
import icon from '../../assets/Images/search.png'

const SearchInput = ({value}) => {
    const Form = styled.form`
        background: white;
        display: flex;
        align-items: center;
        padding: .6rem .8rem;
        width: 55vw;
        border-radius: 4px;
        border: 0.5px solid grey;
    ` 
    const Input = styled.input`
        font-size: 1.2rem;
        color: black;
        border: none;
        &:focus {
            outline: none;
            border: none;
        }    
        width: 90%;
    `
    const Icon = styled.img`
        height: 1.5rem;
        width: auto;
        margin-right: 2%;
        cursor: pointer;
    `
    const {qRef , handleSubmit} = SearchInputLogic()
    useEffect(() => {
        if(value){
            qRef.current.value = value;
            console.log("value")
        }
    }, [value])
    
    
    // const {qState , setQState} = SearchInputLogic()
    return (
        <Form onSubmit={(e)=>handleSubmit(e)}>
            <Icon src={icon} onClick={(e)=>handleSubmit(e)} />
            <Input type={"text"} placeholder={"Search ..."} ref={qRef}/>
        </Form>
    )
}

export default SearchInput