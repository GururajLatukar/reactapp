import styled from "styled-components";

const StyledHeading = styled.h2`
    text-align: center;
    margin-top: 50vh;
`;

export const NotFound = () => {
    return (
        <StyledHeading>404 - Page Not Found</StyledHeading>
    )
}

export default NotFound;