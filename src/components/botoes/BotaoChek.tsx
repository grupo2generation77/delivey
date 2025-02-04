import styled from 'styled-components';

interface BotaoChekProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

export function BotaoChek({ checked, onChange, label = 'Artesanais' }: BotaoChekProps) {
    return (
        <StyledWrapper>
            <div className="checkbox-wrapper-4  outline-orange-800">
                <input
                    className="inp-cbx"
                    id="artesanal"
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <label className="cbx" htmlFor="artesanal">
                    <span>
                        <svg width="12px" height="10px">
                            <use xlinkHref="#check-4" />
                        </svg>
                    </span>
                    <span>{label}</span>
                </label>
                <svg className="inline-svg">
                    <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1" />
                    </symbol>
                </svg>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .checkbox-wrapper-4 * {
    box-sizing: border-box;
    color: oklch(0.47 0.157 37.304);
    background: 
  }

  .checkbox-wrapper-4 .cbx {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.2s ease;
    display: inline-block;
  }

  .checkbox-wrapper-4 .cbx:not(:last-child) {
    margin-right: 6px;
  }

  .checkbox-wrapper-4 .cbx:hover {
    background: rgba(0,119,255,0.06);
  }

  .checkbox-wrapper-4 .cbx span {
    float: left;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }

  .checkbox-wrapper-4 .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    transform: scale(1);
    border: 1px solid #cccfdb;
    transition: all 0.2s ease;
    box-shadow: 0 1px 1px rgba(0,16,75,0.05);
  }

  .checkbox-wrapper-4 .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }

  .checkbox-wrapper-4 .cbx span:last-child {
    padding-left: 8px;
    line-height: 18px;
  }

  .checkbox-wrapper-4 .cbx:hover span:first-child {
    border-color: white;
  }

  .checkbox-wrapper-4 .inp-cbx {
    position: absolute;
    visibility: hidden;
  }

  .checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child {
    background: oklch(0.47 0.157 37.304);
    border-color: white;
    animation: wave-4 0.4s ease;
  }

  .checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }

  .checkbox-wrapper-4 .inline-svg {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }

  @media screen and (max-width: 640px) {
    .checkbox-wrapper-4 .cbx {
      width: 100%;
      display: inline-block;
    }
  }

  @-moz-keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }

  @-webkit-keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }

  @-o-keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }

  @keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }`;


