import React from "react";
import styled from "styled-components";
import { LinkElement } from "../UI/LinkElement";
import { MainContainer, Container } from "../components/Grid/Grid";
import BALDI_IMG from "../image/hi.jpg";
import BOARD_IMG from "../image/board.jpg";
import MAIN_MP3 from "../sounds/main.mp3";
import BALMAIN_MP3 from "../sounds/bal_mainmenu.mp3";

function Main() {
    return (
        <MainContainer>
            <Container>
                <img src={BALDI_IMG} alt="" />
                <StyledBoard>
                    <figure>
                        <img src={BOARD_IMG} alt="" />
                        <figcaption>
                            Mark
                            <br /> you are in your own
                            <br /> Education and <br /> learning
                        </figcaption>
                    </figure>
                    <StyledButtons>
                        <LinkElement link="/game/">Play</LinkElement>
                        <LinkElement link="/score/">Score</LinkElement>
                    </StyledButtons>
                </StyledBoard>
                <audio autoPlay>
                    <source src={MAIN_MP3} type="audio/mpeg" />
                </audio>
                <audio autoPlay>
                    <source src={BALMAIN_MP3} type="audio/mpeg" />
                </audio>
            </Container>
        </MainContainer>
    );
}

export default Main;

const StyledBoard = styled.div`
    figure {
        position: relative;
        margin: 0;
    }

    figcaption {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        font-family: "Fascinate";
        font-weight: 900;
        font-size: 32px;
        line-height: 1.3;
        text-align: center;
        color: #faff00;
    }
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin-top: 12px;
`;
