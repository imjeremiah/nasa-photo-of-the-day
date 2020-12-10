import React from "react";
import styled from "styled-components";

export default function Picture(props) {
  
    return (
      <StyledPicture>
        <h5>{props.date}</h5>
        <img src={props.photo} alt="space"/>
        <h2>{props.title}</h2>
        <h4>Image Credit & Copyright: {props.credit}</h4>
        <h6>{props.story}</h6>
      </StyledPicture>
    );
}

const StyledPicture = styled.div`
  color: ${props => props.theme.primaryColor};

  h2, h3, h6 {
    padding: ${props => props.theme.padding.medium};
  }

  img {
    width: 30%;
    padding: ${props => props.theme.padding.medium};
  }
`;