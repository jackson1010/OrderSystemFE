import { StyledNavDiv } from "./styled.component";

const TopNavbar = () => {
  return (
    <>
      <StyledNavDiv>
        <h3>TheraBooking</h3>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Logout</a>
      </StyledNavDiv>
    </>
  );
};

export default TopNavbar;
