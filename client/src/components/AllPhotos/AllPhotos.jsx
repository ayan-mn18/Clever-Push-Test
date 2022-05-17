import { Spin } from 'antd';
import React from 'react'
import styled from 'styled-components';
import AllPhotosLogic from './AllPhotosLogic'

const AllPhotos = ({q , category , orientation , page , pageNo }) => {
    const { allPhotosData , handleOnClickImage , loading} = AllPhotosLogic(q , category , orientation , page , pageNo);
    const Container = styled.div`
        /* display: grid;
        padding : 10px;
        grid-gap: 10px;
        grid-auto-rows: auto; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        /* grid-template-columns: repeat(auto-fill, minmax(350px,0.5fr)); */
    `
    const SingleImage = styled.img`
        &:hover{
            opacity: 0.8;
        }
        max-width:95vw ;
        cursor: pointer;
        transition: 0.5s ease;
        height: 400px;
        /* width: 30vw;  */
        object-fit: cover;
        margin: 10px 15px;
    `
    const Head = styled.h1`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 3rem;
    @media(max-width : 600px){
        font-size: 1.25rem;
    }
    font-weight: 800;
    text-align : center ;
`
    // console.log(allPhotosData)
    return (
            <React.Fragment>
                {
                    allPhotosData?.length > 0 ? 
                    <Container>
                        {allPhotosData?.map((photo) =>(
                            <div onClick={()=>handleOnClickImage(photo.id)}>
                            <SingleImage src={photo.webformatURL} />
                        </div>
                        ))}
                    </Container>
                    : <Head>Search something relevant to get amazing photos...</Head>
                }
            </React.Fragment>
    )
}

export default AllPhotos