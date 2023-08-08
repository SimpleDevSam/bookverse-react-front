import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components'
//import {redirect} from "react-router-dom"

const HeaderIconsComponent = styled.ul `
    display: flex;
    align-items: center;
    gap: 50px;
    margin-top:25px;
    padding:0px
`

const HeaderIcon = styled.li `
    width: 25px;
    cursor: pointer;
`

const icons = [profile, bag]

function HeaderIcons() {

/*    const HandleClick = (iconName) => {
        if (iconName ==="profile") {
            redirect("/login");
        }
    }
*/
    return (
        <HeaderIconsComponent>
            { icons.map( (icon) => (
              <HeaderIcon><img /*onClick={()=>HandleClick(icon)}*/ src={icon}></img></HeaderIcon>
            )) }
        </HeaderIconsComponent>
    )
}

export default HeaderIcons