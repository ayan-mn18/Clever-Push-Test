import { Image } from 'antd'
import React from 'react'
import styled from 'styled-components'
import RenderButton from '../../components/RenderButton'
import SingleImagePageLogic from './SingleImagePageLogic'

const SingleImagePage = () => {
    const {photo , handleDownload ,handleDiscover } = SingleImagePageLogic()
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const Buttons = styled.div`
        margin: 50px 0px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50vw;
    `
    return (
        <React.Fragment>
            <Container>
                <Image src={photo?.largeImageURL} style={{
                    border: ".5px solid grey",
                }} />
                <Buttons>
                    <RenderButton text={"Download"} handleOnClick={()=>handleDownload(photo?.largeImageURL , photo?.id)}/>
                    <RenderButton text={"Discover more"} handleOnClick={handleDiscover}/>
                </Buttons>
            </Container>
        </React.Fragment>
    )
}

export default SingleImagePage