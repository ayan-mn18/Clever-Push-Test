import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { saveAs } from 'file-saver'

const SingleImagePageLogic = () => {
    const [photo, setPhoto] = useState()
    const {id} = useParams()
    console.log(id)
    const apiCaller = async () =>{
        const data = await axios.get(`/getimagebyid/${id}` , {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        setPhoto(data.data.data.hits[0])
    }
    useEffect(() => {
        apiCaller()
    }, [])
    const navigate = useNavigate();
    const handleDiscover = () =>{
        navigate('/')
    }
    const handleDownload = (url, name) =>{
        saveAs(url, `${name}.jpeg`)

    }
    return {
        photo,handleDiscover,handleDownload
    }
}

export default SingleImagePageLogic