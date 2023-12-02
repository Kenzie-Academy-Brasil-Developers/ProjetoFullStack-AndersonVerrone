import { StyledFooter } from "./styles";
import logoImg from "../../assets/img/logoImg.png";
import { StyledTypography } from "../../styles/StyledTypography";

export const Footer =() => {
    return (
        <StyledFooter>
            <img src={logoImg} alt="Logo My contacts" />
            <StyledTypography type="details" color="var(--color-gray-200)"> Criado por Anderson Verrone </StyledTypography>
        </StyledFooter>
    )
}