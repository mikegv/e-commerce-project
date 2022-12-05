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
  justify-content: flex-start;
  padding: 1rem;
  flex-grow: 1;
 h2{
  margin: 1rem;
}
 .userContent{
  display:flex;
  justify-content: flex-start;
  width: 100%;
 }
 
#sidenav{
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    height: 50vh;
    min-width: 10%;
  }
  #sidenav a{
    margin: 1rem;
    text-decoration: none;
    color: black;
  }
`
interface styledCardProps {
  hearted?: boolean,
  image?: string,
}
export const StyledCard = styled.div<styledCardProps>`
  box-shadow: 4px 5px 11px rgb(200, 200, 200);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 2rem;
  width: 22vw;
  min-height: 17rem;
  background-image: url(${props => props.image});
  background-size: 100%;
  background-repeat: no-repeat;
  p {
    margin-top: 0.5rem;
  }
  div {
    width: 100%;
    padding: 1rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
  min-height: 20rem;
  
  div{
    flex-direction:column;
    padding: .5rem;
    border-radius: 0px 0px 10px 10px;
  }
  
  p{
    text-align: center;
  }
  
`
export const StyledReceiptCard = styled(StyledCard)`
  height: 20rem;
  padding:0px;
  div{
    width:100%;
    flex-direction:column;
    padding: .5rem;
    border-radius: 0px 0px 10px 10px;
  }
  
  p{
    text-align: center;
  }
  
`

export const StyledReceipt = styled.div`
text-align: center;
padding: 1rem;
box-shadow: 4px 5px 11px rgb(200, 200, 200);
margin: 4rem;
  a{
    text-decoration:none;
    }
`

export const StyledItemButton = styled.button`
  margin-top: 0.6rem;
  cursor: pointer;

  :active {
    background-color: darkgray;
  }
`

export const StyledFooter = styled.div`
  position: relative;
  bottom: 10;
  background-color: darkgray;
  width: 100%;
`
