import styled from 'styled-components'

export const StyledShopLayout = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;
`

export const StyledCartPage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
`
export const StyledOrderPage = styled(StyledCartPage)`

`

export const StyledDashboard = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    a{
        margin-top: 2rem;
        text-decoration: none;
        color: black;
    }
`

export const StyledCard = styled.div`
    box-shadow: 4px 5px 11px rgb(200,200,200);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    margin: 2rem;
    width: 22%;
    p{
        margin-top: .5rem;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        cursor: pointer;
    }
    .cart{
        color: gray;
    }
    .heart{
        color: red;
    }
`

export const StyledListCard = styled(StyledCard)`
margin-bottom: 0px;
`

export const StyledItemButton = styled.button`
    margin-top: .6rem;
    cursor: pointer;
    
    :active{
        background-color: darkgray;
    }
`