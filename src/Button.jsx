import styled, { css } from "styled-components";

const size = {
  sm: css`
    padding: 6px 12px;
    min-width: 73px;
    min-height: 32px;
  `,
  md: css`
    padding: 8px 16px;
    min-width: 81px;
    min-height: 36px;
  `,
  lg: css`
    padding: 11px 22px;
    min-width: 93px;
    min-height: 42px;
  `,
};

const color = css`
  ${(props) => props.color === "primary" && "var(--color-blue-100)"}
  ${(props) => props.color === "secondary" && "var(--color-grey-100)"}
  ${(props) => props.color === "danger" && "var(--color-red-100)"}
`;

const hoverColor = css`
  ${(props) => props.color === "primary" && "var(--color-blue-200)"}
  ${(props) => props.color === "secondary" && "var(--color-grey-200)"}
  ${(props) => props.color === "danger" && "var(--color-red-200)"}
  ${(props) => !props.color && "var(--color-default-100)"}
`;

const shadowColor = css`
  ${(props) => props.color === "primary" && "var(--color-blue-100_20)"}
  ${(props) => props.color === "secondary" && "var(--color-grey-100_20)"}
  ${(props) => props.color === "danger" && "var(--color-red-100_20)"}
  ${(props) => !props.color && "var(--color-default-200_20)"}
`;

const variantBgColor = css`
  ${(props) => props.color === "primary" && "var(--color-blue-100_10)"}
  ${(props) => props.color === "secondary" && "var(--color-grey-100_10)"}
  ${(props) => props.color === "danger" && "var(--color-red-100_10)"}
  ${(props) => !props.color && "var(--color-default-200_10)"}
`;

const variant = {
  outline: css`
    border: 1.5px solid
      ${(props) => (props.color ? color : "var(--color-default-200)")};
    background-color: transparent;
    color: ${(props) => (props.color ? color : "var(--color-default-200)")};
    box-shadow: none;
    &:hover,
    &:focus {
      background-color: ${variantBgColor};
    }
  `,

  text: css`
    background-color: transparent;
    box-shadow: none;
    color: ${(props) => (props.color ? color : "var(--color-default-200)")};
    &:hover,
    &:focus {
      background-color: ${variantBgColor};
    }
  `,
};

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  min-width: 81px;
  min-height: 36px;
  padding: 8px 16px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  font-size: 14px;
  background-color: ${(props) =>
    props.color ? color : "var(--color-default-50)"};

  color: ${(props) => (!props.color ? "var(--color-default-200)" : "white")};
  border: none;
  border-radius: 6px;
  box-shadow: 0px 2px 3px 0px ${shadowColor};
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${hoverColor};
  }

  ${(props) => variant[props.variant]}

  ${(props) =>
    props.disableShadow &&
    css`
      box-shadow: none;
    `}
  ${(props) => props.size && size[props.size]}

  &:disabled {
    ${(props) => props.variant === "outline" && "border: 1.5px solid #e0e0e0;"}
    background-color: ${(props) => (props.variant ? "transparent" : "#e0e0e0")};
    color: var(--color-disabled);
    & path {
      fill: var(--color-disabled);
    }
    cursor: not-allowed;
  }
  & svg {
    width: 14px;
    height: auto;
    & path {
      fill: ${(props) =>
        props.variant
          ? color
          : props.color
          ? "white"
          : "var(--color-default-200)"};
    }
  }
  &:first-child,
  &:last-child {
    line-height: 1;
  }
`;

export default Button;
