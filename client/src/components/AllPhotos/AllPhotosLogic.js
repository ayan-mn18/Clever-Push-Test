import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const AllPhotosLogic = (q , category , orientation , page , pageNo) => {
    const [allPhotosData, setAllPhotosData] = useState();
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const apiCaller = async () =>{
        setLoading(true)
        const data = await axios.post('http://localhost:5000/getimages' , {
            q : params.q ? params.q : q ,
            category : category,
            orientation: orientation,
            page : pageNo ? pageNo : page
        },{
            headers: {
            'Content-Type': 'application/json'
            }
        });
        setAllPhotosData(data.data.data.hits);
        setAllData(data.data.data);
        setLoading(false)
    }
    useEffect(() => {
        if(q || params.q)   apiCaller();
    }, [q , params.q , pageNo , page , category , orientation])
    const navigate = useNavigate()
    const handleOnClickImage = (id) =>{
        navigate(`/image/${id}`);
    }
    return {
        allPhotosData,allData,handleOnClickImage,loading
    }
}

export default AllPhotosLogic