import styled from "styled-components";

export const StyledShopLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;
  width: 100%;
  padding: 3rem 0rem;

  .pages {
    align-self: flex-end;
    margin-top: 13rem;
    width: 100%;
    text-align: center;
  }
`

export const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const StyledOrderPage = styled(StyledCartPage)``

export const StyledDashboard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  a {
    margin-top: 2rem;
    text-decoration: none;
    color: black;
  }
`
interface styledCardProps {
  hearted?: boolean;
}
export const StyledCard = styled.div`
  box-shadow: 4px 5px 11px rgb(200, 200, 200);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem;
  margin: 2rem;
  width: 22vw;
  min-height: 13rem;
  p {
    margin-top: 0.5rem;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    cursor: pointer;
  }
  .cart {
    color: gray;
    transition: all .3s ease-in-out;
  }
  .heart {
    color: red;
    transition: all .3s ease-in-out;
  }
  .added{
    transform: scale(1.5);
    transition: all .3s ease-in-out;
  }
`

export const StyledListCard = styled(StyledCard)`
  margin-bottom: 0px;
`

export const StyledItemButton = styled.button`
  margin-top: 0.6rem;
  cursor: pointer;

  :active {
    background-color: darkgray;
  }
`
