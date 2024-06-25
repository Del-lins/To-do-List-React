import styled from "styled-components";

export const DivFilter = styled.div`
  border-bottom: 1px solid #555;
  margin-bottom: 20px;
  padding-bottom: 20px;

  select {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
  }

  .filter-options {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
  }

  .filter-options div {
    flex: 1 1 0;
  }
`;
