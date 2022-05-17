import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput/SearchInput'

const BackGroundImage = () => {
    const Head = styled.h1`
        color: white;
        font-size: 3rem;
        @media(max-width : 600px){
            font-size: 1.25rem;
        }
        font-weight: 800;
        text-align : center ;
    `
    const Para = styled.p`
        color: white;
        font-size: 1.25rem;
        @media(max-width : 600px){
            font-size: 0.8rem;
        }
        font-weight: 300;
        text-align : center ;
    `
    const LightPara = styled.p`
        text-align : center ;
        margin: 25px;
        color: white;
        font-size: 1rem;
        @media(max-width : 600px){
            font-size: 0.8rem;
        }
        font-weight: 300;
        opacity: 0.8;
    `
    const Container = styled.div`
        color: white;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('https://pixabay.com/get/g7bfe5b5b507a91def69022c4aeef02e9a6c563534d5ec2ae2f3b0875832f3f2e4fa76a19b278a22fe2e4bfa97b135490fd844d2d06be8be2ff583d6606d6a822_1280.jpg') ;

    `
    return (
        <Container>
            <Head>Stunning free images & royalty free stock</Head>
            <Para>Over 2.6 million+ high quality stock images, videos and music shared by our talented community.</Para>
            <SearchInput />
            <LightPara>Popular Images: background, wallpaper, nature, flowers, money, beach, flower, business, food, dog, love, sky, coronavirus</LightPara>
        </Container>
    )
}

export default BackGroundImage