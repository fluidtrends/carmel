import styled from 'styled-components'

export const Ribbon = styled.div`
  width: 120px;
  font-size: 12px;
  font-weight: bold;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : '#03A9F4'};
  position: absolute;
  text-align: center;
  line-height: 30px;
  letter-spacing: 1px;
  color: #f0f0f0;
  top: 15px;
  right: -30px;
  left: auto;
  transform: rotate(45deg);
  -webkit-transform: rotate(46deg);
  overflow: hidden;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`
