import { Input } from "../Input";
import { StyledFormLogin } from "./styles";
import { StyledTypography } from "../../styles/StyledTypography";
import { StyledButton } from "../../styles/StyledButton";

export const FormLogin = () => {
  return (
    <StyledFormLogin>
      <StyledTypography type="title" color="var(--color-gray-200)" weight={700}>
        Login
      </StyledTypography>
      <Input
        label="E-mail"
        id="email"
        password={false}
        placeholder="Digite o seu email"
        
      />
      <Input
        label="Password"
        id="password"
        password={true}
        placeholder="Digite a sua senha"
      />
      <StyledButton
        
        height={50}
        radius={10}
        color="var(--color-purple)"
        colorhover="var(--color-purple-hover)"
        colorText="var(--color-gray-050)"
      >
        Login
      </StyledButton>
      <StyledTypography type="details" color="var(--color-gray-400)">
        Ainda não tem cadastro?
      </StyledTypography>
      <StyledButton
        height={50}
        radius={10}
        color="var(--color-dark-purple)"
        colorhover="var(--color-dark-purple-hover)"
        colorText="var(--color-gray-050)"
      >
        Cadastrar
      </StyledButton>
    </StyledFormLogin>
  );
};
