import {useParams} from "react-router-dom";
import datas from './../../datas/datas.json'
import styled from "styled-components"
import Slider from "../slider"
import colors from './../../Utils/variables'
import Dropdown from './../dropdown'

const StyledContainer = styled.div`
    min-height: calc(100vh - 398px);
    padding: 0 20px;
`

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start; 
    margin: auto;
    padding: 0;
    width: 100%;
    max-width: 1240px;
`

const StyledLogementHeader = styled.div`
    display: flex;
    flex-direction; row;
    justify-content: space-between;
    text-align: start;
    margin-top: 30px;
    width: 100%;
`

const StyledTitle = styled.h1`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 36px;
    margin: 0;
`

const StyledLocation = styled.p`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    margin: 5px 0 0 0;
    padding: 0;
` 

const StyledTagsBar = styled.div`
    display: flex;
    margin-top: 20px;

`

const StyledTags = styled.div`
    height: 25px;
    background-color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: white;
    border-radius: 10px;
    line-height: 25px;
    text-align: center;
    width: fit-content;
    padding: 0 25px;
    margin-right: 10px;

`

const StyledHostInfos = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
`

const StyledHostName = styled.p`
    color: ${colors.primary};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-align: right;
    width : min-content;
    margin-right: 10px;
`

const StyledHostPicture = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 32px;
`


export default function Logement() {
    const params = useParams()    
    
    return (
        <StyledContainer>
            {datas.filter(logement=> logement.id === params.id).map((logement) => (
                <StyledList key={logement.id}>
                    <Slider pictures={logement.pictures}/>
                    <StyledLogementHeader>
                        <div>
                            <StyledTitle>{logement.title}</StyledTitle>
                            <StyledLocation>{logement.location}</StyledLocation>
                            <StyledTagsBar>
                                {logement.tags.map((tags) => (
                                    <StyledTags key={tags}>{tags}</StyledTags>
                                ))}
                            </StyledTagsBar>
                        </div>
                        <StyledHostInfos>
                            <StyledHostName>{logement.host.name}</StyledHostName>
                            <StyledHostPicture src={logement.host.picture} alt="hôte" />
                        </StyledHostInfos>
                    </StyledLogementHeader>
                    <div>
                        <Dropdown title={'Description'} description={logement.description} key={`${logement.id}-${logement.description}`}/>
                        <Dropdown title={'Équipements'} description={logement.equipments.slice().map(e=><>{e}<br/></>)}/>
                    </div>
                </StyledList>
            ))}
        </StyledContainer>
    )
}

