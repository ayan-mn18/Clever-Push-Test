import { List } from 'antd';
import React from 'react'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from './SearchInput/SearchInput';

const Navbar = () => {
    const NavComponent = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding : 10px 10px;
        /* width:100vw; */
    `
    const Logo = styled.img`
        height: 40px;
        width: 40px;
        cursor: pointer;
    `
    const Profile = styled.img`
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
    `
    const Menu = styled.ul`
        @media(max-width: 600px){
            display: none;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin : auto 0px;
        margin-right: 5%;
    `
    const List = styled.li`
        margin: auto 40px !important;
        cursor: pointer;
        font-size: 18px;
    `
    const loc = useLocation();
    let value = '' ;
    if(loc.pathname.split('/')[1] == 'search' && loc.pathname.split('/')[2]){
        loc.pathname.split('/')[2].split('%20').map(elem =>{
            value += elem +' '
        })
    }
    return (
        <React.Fragment>
            <NavComponent>
                <Link to='/'>
                <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/1200px-Pixabay-logo-new.svg.png' />
                </Link>
                <Menu>
                    <List>Photos</List>
                    <List>Illustrations</List>
                    <List>Vectors</List>
                </Menu>
                {loc.pathname != '/' && <SearchInput value={value} />}
                <Profile src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsD0hSAtsByqnDWal8mIzCP6lGs_zNgM7YFg&usqp=CAU' />
            </NavComponent>
        </React.Fragment>
    )
}

export default Navbar