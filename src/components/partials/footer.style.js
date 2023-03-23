import styled from 'styled-components'

export const Footerstyle = styled.footer`
color: ${props => props.theme.colors.primary};
background-color: ${props => props.theme.colors.darkgray};
text-align: center;
padding: 2em 0 0 0;
div {
    color: ${props => props.theme.colors.grayblue};
    background-color: ${props => props.theme.colors.darkblue};
    padding: 1em;
    margin: 3em 0 0 0;
}
h2 {
    font-family: 'Lobster', cursive;
}
p {
    font-family: sans-serif;
    margin: 0.5em 0;
}
`