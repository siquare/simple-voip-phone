import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon, Button, Input, Collection, CollectionItem, CardPanel } from 'react-materialize';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #26a69a;
  padding: 30px 0;
  color: white;
`;

const ComponentHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const HostInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.26);
  width: 60%;
`;

const HostLabel = styled.label`
  text-align: center;
  color: rgba(0, 0, 0, 0.26);
  font-size: .75rem;
`;

const HostAddress = styled.label`
  text-align: center;
  color: rgba(0, 0, 0, 0.26);
  font-size: 1rem;
  line-height: 2.5rem;
`;

const AttendeeListWrapper = styled.ul`
  margin-top: 20px;
  display: flex;
  width: 80%;
  flex-direction: column;
`;

const buruburuAnimation = keyframes`
  0% {transform: rotateZ(0deg)}
  2% {transform: rotateZ(10deg)}
  4% {transform: rotateZ(0deg)}
  6% {transform: rotateZ(-10deg)}
  8% {transform: rotateZ(0deg)}
`;

const BuruburuWrapper = styled.div`
  animation: ${buruburuAnimation} 4s infinite;
`;


export default class Connecting extends React.Component {
  constructor(props) {
    super(props);
  }

  onDisconnect() {
    this.props.disconnect();
  }

  render() {
    const attendees = this.props.attendees.map((val, idx) => {
      return (
        <CardPanel key={idx} className='white attendee-card'>
          <Icon small left>person</Icon>
          <span>{ val }</span>
        </CardPanel>
      );
    });

    return (
      <Container>
        <ComponentHeader>
          <BuruburuWrapper>
            <Icon className="call-icon">call</Icon>
          </BuruburuWrapper>

          <HostInformation>
            <HostLabel>HOST INFORMATION</HostLabel>
            <HostAddress>{ `${this.props.host_ip} : ${this.props.udp_port}-${this.props.tcp_port}` }</HostAddress>
          </HostInformation>
        </ComponentHeader>

        <AttendeeListWrapper>
          { attendees }
        </AttendeeListWrapper>

        <Button onClick={ this.onDisconnect.bind(this) }>Disconnect <Icon small right>call_end</Icon></Button>
      </Container>
    );
  }
}
