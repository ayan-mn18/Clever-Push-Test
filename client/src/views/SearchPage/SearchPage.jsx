import React from 'react'
import AllPhotos from '../../components/AllPhotos/AllPhotos'
import { Pagination } from 'antd';
import AllPhotosLogic from '../../components/AllPhotos/AllPhotosLogic';
import SearchPageLogic from './SearchPageLogic';
import styled from 'styled-components';

const SearchPage = () => {
    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    `
    const {allData} = AllPhotosLogic();
    const {pageNo , setPageNo} = SearchPageLogic();

    return (
        <React.Fragment>
            <AllPhotos pageNo={pageNo} />
            <Container>
                <Pagination defaultCurrent={1} total={allData.totalHits/20} onChange={(page)=>{setPageNo(page)}} />
            </Container>
        </React.Fragment>
    )
}

export default SearchPage