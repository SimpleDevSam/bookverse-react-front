import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components'

const HeaderIconsComponent = styled.ul `
    display: flex;
    align-items: center;
    gap: 50px;
`

const HeaderIcon = styled.li `
    width: 25px;
    cursor: pointer;
`

const icons = [profile, bag]

function HeaderIcons() {
    return (
        <HeaderIconsComponent>
            { icons.map( (icon) => (
              <HeaderIcon><img src={icon}></img></HeaderIcon>
            )) }
        </HeaderIconsComponent>
    )
}

export default HeaderIcons