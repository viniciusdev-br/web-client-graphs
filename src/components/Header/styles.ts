import styled from 'styled-components'

export const Container = styled.header`
    background: #4C00BF;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0.5rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
        display: flex;
        width: 22rem;
        justify-content: space-between;
        list-style-type: none;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;

        li a {
            padding: 1rem;

            &:hover {
                filter: brightness(90%);
            }
        }
    }
`