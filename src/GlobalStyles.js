import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --color-blue-200:#0039cb;
  --color-blue-100:#2962ff;
  --color-blue-100_20: #2962ff33;
  --color-blue-100_10: #2962ff1a;
  
  --color-red-200: #9a0007;
  --color-red-100: #d32f2f;
  --color-red-100_20: #d32f2f33;
  --color-red-100_10: #d32f2f1a;

  --color-grey-200: #1c313a;
  --color-grey-100: #455a64;
  --color-grey-100_20: #455a6433;
  --color-grey-100_10: #455a641a;
  
  --color-default-200: #3f3f3f;
  --color-default-200_20: #33333333;
  --color-default-200_10: #3333331a;
  --color-default-100: #aeaeae;
  --color-default-50: #e0e0e0;

  --color-disabled: #9e9e9e;

}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;

}

.app{
  margin: 32px;
  display:flex;
  flex-direction: column;
  gap: 8px;
}
.container{
  display: flex;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
p{
  margin-bottom: 6px;
}

footer{
  color: var(--color-grey-200) ;
  background-color: var(--color-grey-100_10);
  width: fit-content;
  padding: 4px 8px;
  border-radius: 6px;
}

`;
