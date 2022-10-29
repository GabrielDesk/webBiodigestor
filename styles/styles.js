import styled from "styled-components";

// export const Container = styled.div`
//     height: 50%;
//     min-height: 10%;
//     max-height: 80%;
//     width: 50%;
//     min-width: 10%;
//     max-width: 80%;

//     padding: 5%;
    
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     border-bottom: 1px solid white;
// `;

export const Main = styled.main`
    .first {
        background: red;
        overflow: hidden;

        .offset {}
    

        .a {
            background: '#f5f1ea';
        }

        .b {
            background: '#582534';
        }

        .c {
            background: '#0a7397';
        }   
    }
    .second {
    background-image: linear-gradient(    
        rgb(255, 255, 255),
        rgba(227, 236, 230)
    );
    }
    .third{
        background: yellow;
    }
    .fourth {
        background: blue;
    }
`;

export const Section = styled.div`
    position: relative;
`;

export const Sticky = styled.div`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;