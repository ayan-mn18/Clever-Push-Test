import React from 'react'
import BackGroundImage from '../../components/BackGroundImage'
import RenderButton from '../../components/RenderButton'
import AllPhotos from '../../components/AllPhotos/AllPhotos'
import HomePageLogic from './HomePageLogic'
import styled from 'styled-components'

const HomePage = () => {
    const {q,category,orientation,page,hanleNavigate} = HomePageLogic()
    const Buttons = styled.div`
        margin: 20px 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 95vw;
    `
    return (
        <React.Fragment>
            <BackGroundImage/>
            <AllPhotos q={q} category={category} orientation={orientation} page={page} />
            <Buttons>
                <RenderButton text={"Discover More"} handleOnClick={hanleNavigate}/>
            </Buttons>
        </React.Fragment>
        
    )
}

export default HomePage