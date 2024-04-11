import styled from "styled-components"

export const ConteinerCalendar = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  #content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 19.375rem;
    min-width: 19.375rem;
    max-height: 31.25rem;
    border-radius: 0.25rem;
    font-family: 'Poppins', sans-serif;
    margin: auto;
    z-index: 1;
  
    .header {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1rem;
      background: #02226A;
      border-radius: 0.5rem 0.5rem 0 0;
      gap: 12px;
    }

    option {
      color: #02226A;
    }

    #month,
    #year {
      display: flex;
      border: none;
      background: transparent;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;

      font-size: 16px;
      font-weight: 400;
      line-height: 1.75;
    }
    #mont::-webkit-scrollbar,
    #year::-webkit-scrollbar {
      display: none;
    }
    #month {
      letter-spacing: 0.00938em;
      text-align: center;
    }
    #year {
      width: min-content;
      letter-spacing: 0.00938em;
      color: rgba(255, 255, 255, 0.54);
    }

    #date-full {
      font-size: 34px;
      font-weight: 400;
      line-height: 1.235;
      letter-spacing: 0.00735em;
      color: #fff;
    }
  
    #body-calendar {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 1rem;
      gap: 1.25rem;
      background: #ffffff;
      border-radius: 0 0 0.5rem 0.5rem;
    }
  
    .nav-buttons {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  
    .nav-buttons button {
      display: flex;
      align-items: center;
      max-width: 1.875rem;
      max-height: 1.875rem;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
    }
  
    #calendar {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      min-height: 19.0625rem;
    }
  
    thead tr {
      color: rgba(0, 0, 0, 0.38);
      font-weight: 500;
      font-size: 0.875rem;
      height: 2.25rem;
      width: 2.25rem;
    }
  
    td {
      cursor: pointer;
      border-radius: 50%;
      width: 2.25rem;
      height: 2.25rem;
      text-align: center;
    }
  
    .selected,
    td:hover {
      color: #fff !important;
      font-weight: 500 !important;
      background-color: #02226A !important;
    }

    .disabled-past,
    .disabled-future {
      color: rgba(0, 0, 0, 0.38);
      font-weight: 500;
      background-color: #fff;
    }
  
    .MuiSvgIcon-root {
      color: rgba(0, 0, 0, 0.54);
    }
  
    .actions {
      display: flex;
      align-items: center;
      justify-content: end;
      width: 100%;
      gap: 0.625rem;
  
      button {
        border: none;
        background: transparent;
        text-transform: uppercase;
        color: #02226A;
        font-weight: 500;
        line-height: 0.1094rem;
        font-size: 0.875rem;
        min-width: 4rem;
        border-radius: 0.25rem;
        letter-spacing: 0.0286rem;
        cursor: pointer;
      }
    }
  }
`

export const SInput = styled.div<{ error?: string }>`
  display: flex;
  position: relative;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  
  &.outlined {
    color: ${p => p.error ? "#BB0A30" : "#043D94"};
    border: 0.0625rem solid ${p => p.error ? "#BB0A30" : "#043D94"};
    border-radius: 0.25rem;
    
    input:not(:placeholder-shown):focus ~ label,
    input:not(:placeholder-shown):valid ~ label,
    input:focus ~ label,
    input:disabled ~ label {
      transform: translateY(-1.5rem) translateX(-20%) scale(0.8);
      background-color: #FFF;
      padding-inline: 0.3rem;
      color: ${p => p.error ? "#BB0A30" : "#043D94"};
      z-index: 0;
    }
  }
  &.outlined.disabled {
    color: ${p => p.error ? "#BB0A30" : "#91B7F0"};
    border: 0.0625rem solid ${p => p.error ? "#BB0A30" : "#91B7F0"};
    border-radius: 0.25rem;
    
    input:not(:placeholder-shown):focus ~ label,
    input:not(:placeholder-shown):valid ~ label,
    input:focus ~ label,
    input:disabled ~ label {
      transform: translateY(-1.5rem) translateX(-20%) scale(0.8);
      background-color: #FFF;
      padding-inline: 0.3rem;
      color: ${p => p.error ? "#BB0A30" : "#91B7F0"};
      z-index: 0;
    }

    svg {
      fill: ${p => p.error ? "#BB0A30" : "#91B7F0"};
      color: ${p => p.error ? "#BB0A30" : "#91B7F0"};
    }
  }

  &.default {
    color: ${p => p.error ? "#BB0A30" : "#043D94"};
    border-bottom: 0.0625rem solid ${p => p.error ? "#BB0A30" : "#043D94"};
    align-items: baseline;
    
    input:not(:placeholder-shown):focus ~ label,
    input:not(:placeholder-shown):valid ~ label,
    input:focus ~ label,
    input:disabled ~ label {
      transform: translateY(-1rem) translateX(-20%) scale(0.8);
      background-color: #FFF;
      padding-inline: 0.3rem;
      color: ${p => p.error ? "#BB0A30" : "#043D94"};
      z-index: 0;
    }
  }
  &.default.disabled {
    color: ${p => p.error ? "#BB0A30" : "#91B7F0"};
    border-bottom: 0.0625rem solid ${p => p.error ? "#BB0A30" : "#91B7F0"};
    align-items: baseline;
    
    input:not(:placeholder-shown):focus ~ label,
    input:not(:placeholder-shown):valid ~ label,
    input:focus ~ label,
    input:disabled ~ label {
      transform: translateY(-1rem) translateX(-20%) scale(0.8);
      background-color: #FFF;
      padding-inline: 0.3rem;
      color: ${p => p.error ? "#BB0A30" : "#91B7F0"};
      z-index: 0;
    }

    svg {
      fill: ${p => p.error ? "#BB0A30" : "#91B7F0"};
      color: ${p => p.error ? "#BB0A30" : "#91B7F0"};
    }
  }

  input {
    all: unset;
    padding: 0 1rem;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 2rem; 
    width: 100%;
    caret-color: transparent;
    cursor: pointer;
  }

  label {
    position: absolute;
    top: 0.9375rem;
    left: 0.9375rem;
    z-index: 1;
    pointer-events: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  svg {
    fill: ${p => p.error ? "#BB0A30" : "#043D94"};
    color: ${p => p.error ? "#BB0A30" : "#043D94"};
  }
`