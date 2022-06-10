import styled from 'styled-components';

export const Container = styled.div`
    display: 'flex';
    background-color: #D9D9D9;
    width: 81rem;
    height: 45rem;
    margin: 2rem auto;
    border-radius: 15px;
`
export const LeftFormContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        background-color: #fff;
        height: 35%;
        width: 100%;
        border-radius: 10px;
    }
    
`

export const OutputGraphs = styled.div`
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;

    div {
        background-color: #fff;
        height: 35%;
        width: 100%;
        border-radius: 10px;
    }
`