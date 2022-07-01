import styled from 'styled-components';
import {Link} from 'react-router-dom';
import imgnav1 from '../img/nav1.jpg';
import imgnav2 from '../img/nav2.jpg';
import imgnav3 from '../img/nav3.jpg';
import imgnav4 from '../img/nav4.jpg';
import imgnav6 from '../img/nav6.jpg';
import imgnav7 from '../img/nav7.jpg';
import imgnav8 from '../img/nav8.jpg';

function NavBar() {
    return(
        <Nav>
            <Link to='/main/mypage'>
            <NavCell>
                <Img src={imgnav1}/>
                <NavText>My page</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src={imgnav2}/>
                <NavText>정규 강좌</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src={imgnav3}/>
                <NavText>비정규강좌</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src={imgnav4}/>
                <NavText>오픈강좌</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src={imgnav3}/>
                <NavText>지식커뮤니티</NavText>
            </NavCell></Link>
            <Link to='/main/message' style={{textDecoration:'none'}}>
            <NavCell>
                <Img src={imgnav6}/>
                <NavText>쪽지 [directed]</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src={imgnav7}/>
                <NavText>매뉴얼</NavText>
            </NavCell></Link>
            <Link to='/main/error'>
            <NavCell>
                <Img src={imgnav8}/>
                <NavText>이용안내</NavText>
            </NavCell></Link>
        </Nav>
    );
}

export default NavBar;

const Nav = styled.div`
    background-color:rgb(47,48,51);
    position:absolute;
    top:60px;
    left:0px;
    width:12%;
    max-height:100%;
    align-items:stretch;
    height:1000px;
    display:flex;
    flex-flow:column nowrap;
`;

const NavCell = styled.button`
    background-color:rgb(47,48,51);
    color:rgb(153,153,153);
    border:0;
    border-bottom: solid rgb(37,38,38) 1px;
    height:60px;
    display:flex;
    flex-flow:row nowrap;
    width:100%;
`;

const Img = styled.img`
    width:27px;
    height:30px;
    margin-top:17px;
    margin-left:7px;
`;

const NavText = styled.div`
    font-size:13px;
    font-weight:bold;
    line-height:65px;
    text-align:center;
    padding-right:50px;
    margin-left:15px;
`;
