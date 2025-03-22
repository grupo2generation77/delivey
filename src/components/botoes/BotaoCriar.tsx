import styled from "styled-components";

export function BotaoCriar() {
  return (
    <StyledWrapper>
      <button className="animated-button m-5 bg-red-800">
        <span>Adcionar +</span>
        <span />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: inline-block;
    padding: 12px 24px;
    border: none;
    font-size: 1rem;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: #7e2a0c;
    box-shadow: 0 0 0 2px #7e2a0c;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button span:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #9f0712;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button span:first-child {
    position: relative;
    z-index: 1;
  }

  .animated-button:hover {
    box-shadow: 0 0 0 5px oklch(0.837 0.128 66.29);
    color: #ffffff;
  }

  .animated-button:active {
    scale: 0.95;
  }

  .animated-button:hover span:last-child {
    width: 150px;
    height: 150px;
    opacity: 1;
  }
`;
