import styled from 'styled-components'

export const Bagværkstyle = styled.div`
text-align: center;
.grid {
    *{
        /* border: solid 1px red; */
    }
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1em;
    margin: 5em 13em;
}
.news {
    padding: 0 4em 0 4em;
}
h2 {
    font-size: 1.3em;
    color: ${props => props.theme.colors.darkgray};
    font-family: sans-serif;
    margin: 0;
}
.comments {
    color: ${props => props.theme.colors.grayblue};
}
p {
    font-family: sans-serif;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.darkgray};
}
button {
    background-color: ${props => props.theme.colors.grayblue};
    color: ${props => props.theme.colors.darkblue};
    border: 0;
    font-weight: 700;
    padding: 1em 2.5em;
}
button:hover {
    background-color: ${props => props.theme.colors.darkblue};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
}
`