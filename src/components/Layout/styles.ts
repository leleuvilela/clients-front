import styled from "styled-components";

// AN app name
// CN client name
// CE client edit
// CD client details
// CL client list
// UI user info

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 400px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    "AN CN CN"
    "CE CD CL"
    "UI CD CL";

  height: 100vh;
`;
