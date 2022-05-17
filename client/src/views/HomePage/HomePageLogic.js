import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import HomeData from '../../assets/data'

const HomePageLogic = () => {
    const [q, setQ] = useState("")
    const [orientation, setOrientation] = useState()
    const [category, setCategory] = useState("all")
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        const HomeDatas = HomeData;
        setQ(HomeDatas[Math.floor(Math.random()*10)])
    }, [])
    const navigate = useNavigate()
    const hanleNavigate = () =>{
        navigate('/search');
    }
  return {
    q,orientation,hanleNavigate,category,page
  }
}

export default HomePageLogic