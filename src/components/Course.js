import styled from "styled-components";
import imgCstate2 from '../img/Cstate2.jpg';
import imgPguestIcon from '../img/PguestIcon.jpg';
import imgMCproperty1 from '../img/MCproperty1.jpg';

function Course(props){

    let stateImg = null;
    if(props.state === '2'){
        stateImg = <img src={imgCstate2} style={{width:'40px'}} alt=''/>
    }

    return(
        <DivC>
            <img src={imgPguestIcon} style={{width:'60px', height:'60px'}} alt=''/>
            <img src={imgMCproperty1} style={{width:'80px', height:'75px', marginLeft:'15px'}} alt=''/>
            <div style={{display:'flex', flexFlow:'column nowrap', marginLeft:'10px', marginTop:'6px'}}>
                <div style={{fontSize:'20px', fontWeight:'bold'}}>{stateImg}&nbsp;{props.clsName}</div>
                <div style={{color:'grey', fontSize:'14px'}}>{props.profName}</div>
            </div>
        </DivC>
    );
}

export default Course;

const DivC = styled.div`
    background-color:white;
    border:solid lightgrey 1px;
    display:flex;
    flex-flow:row nowrap;
    height:80px;
    padding-top:15px;
    padding-left:15px;
    color:black;
`;