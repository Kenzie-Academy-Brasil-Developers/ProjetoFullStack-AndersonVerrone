import { StyledHeader } from "./styles";
import logoImg from "../../assets/img/logoImg.png";
import logoTexto from "../../assets/img/logoTexto.png";

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src={logoImg} alt="Icone Logo" />
                <img src={logoTexto} alt="Texto marca" />
            </div>
        </StyledHeader>
    )
}