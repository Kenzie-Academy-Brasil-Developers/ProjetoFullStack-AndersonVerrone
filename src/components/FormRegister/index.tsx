import { StyledButton } from "../../styles/StyledButton";
import { StyledTypography } from "../../styles/StyledTypography";
import { Input } from "../Input";
import { StyledFormRegister } from "./styles";

export const FormRegister = () => {
  return (
    <StyledFormRegister>
      <StyledTypography type="title" color="var(--color-gray-200)" weight={700}>
        Cadastro
      </StyledTypography>
      <Input
        label="E-mail"
        id="email"
        password={false}
        placeholder="Digite o seu email"
      />
      <Input
        label="Primeiro nome"
        id="firstName"
        password={false}
        placeholder="Digite o seu primeiro nome"
      />
      <Input
        label="Ultimo Nome"
        id="lastName"
        password={false}
        placeholder="Digite o seu ultimo nome"
      />
      <Input
        label="Contato"
        id="contact"
        password={false}
        placeholder="Digite o seu telefone de contato com DDD"
      />
      <Input
        label="Senha"
        id="password"
        password={true}
        placeholder="Digite o sua senha"
      />
      <Input
        label="Confirme a sua senha"
        id="confirm"
        password={true}
        placeholder="Confirme a sua senha"
      />
      <StyledButton
        height={50}
        radius={10}
        color="var(--color-purple)"
        colorhover="var(--color-purple-hover)"
        colorText="var(--color-gray-050)"
      >
        Cadastrar
      </StyledButton>
      <StyledTypography type="details" color="var(--color-gray-400)">
        Já tem cadastro?
      </StyledTypography>
      <StyledButton
        height={50}
        radius={10}
        color="var(--color-dark-purple)"
        colorhover="var(--color-dark-purple-hover)"
        colorText="var(--color-gray-050)"
      >
        Login
      </StyledButton>
    </StyledFormRegister>
  );
};
