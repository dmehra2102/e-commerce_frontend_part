import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components';
import { slide_image } from '../Images_url/images';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction==="left" && "10px"};
    right: ${props => props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
    background-color: #${props => props.bg};
`
const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-style: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=> {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {slide_image.map(ele=> {
                return <Slide bg={ele.bg} key={ele.id}>
                <ImgContainer>
                    <Image src={ele.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{ele.title}</Title>
                    <Desc>{ele.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            })}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider