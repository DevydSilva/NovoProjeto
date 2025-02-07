import React, { useState, useEffect } from "react";
import styled from 'styled-components/native';
import {Preto2, azul3, Banco, Preto, Azul2} from '../atoms/color';
import { useNavigation } from "@react-navigation/native";

import ExpandIcon from '../atoms/imagens/expand.svg';
import NavPrevIcon from '../atoms/imagens/nav_prev.svg';
import NavNextIcon from '../atoms/imagens/nav_next.svg';

const Modal = styled.Modal``;

const ModalArea = styled.View`
       flex: 1;
       background-color: ${Preto2};
       justify-content: flex-end;
`;

const ModalBody = styled.View`
       background-color: ${azul3};
       border-top-left-radius: 20px;
       border-top-right-radius: 20px;
       min-height: 300px;
       padding: 10px 20px 40px 20px;
`;
const CloseButton = styled.TouchableOpacity`
       width: 40px;
       height: 40px;
`;

const ModalItem = styled.View`
      background-color: ${Banco};
      border-radius: 10px;
      margin-bottom: 15px;
      padding: 10px;
`;

const UserInfo = styled.View`
      flex-direction: row;
      align-items: center;
`;
const UserAvatar = styled.Image`
      width: 56px;
      height: 56px;
      border-radius: 20px;
      margin-right: 15px;
`;
const UserName = styled.Text`
      color: ${Preto};
      font-size: 18px;
      font-weight: bold;
`;

const ServiceInfo = styled.View`
      flex-direction: row;
      justify-content: space-between;
`;
const ServiceName = styled.Text`
      font-size: 16px;
      font-weight: bold;
      color: ${Preto};
`;
const ServicePrice = styled.Text`
      font-size: 16px;
      font-weight: bold;
      color: ${Preto};
`;

const FinishButton = styled.TouchableOpacity`
      background-color: ${Azul2};
      height: 60px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
`;

const FinishButtonText = styled.Text`
      color: ${Banco};
      font-size: 17px;
      font-weight: bold;
`;

const DateInfo = styled.View`
      flex-direction: row;
`;

const DatePrevArea = styled.TouchableOpacity`
      flex: 1;
      justify-content: flex-end;
      align-items: flex-end;
`;

const DateTitleArea = styled.View`
      width: 140px;
      justify-content: center;
      align-items: center;
`;

const DateTitle = styled.Text`
      font-size: 17px;
      font-weight: bold;
      color: ${Preto};
`;

const DateNextArea = styled.TouchableOpacity`
      flex: 1;
      align-items: flex-start;
`;

const DateList = styled.ScrollView``;

const DateItem = styled.TouchableOpacity`
     width: 45px;
     justify-content: center;
     align-items: center;
     border-radius: 10px;
     padding-top: 5px;
     padding-bottom: 5px;
`;

const DateItemWeekDay = styled.Text`
      font-size: 16px;
      font-weight: bold;
      
`;

const DateItemNumber = styled.Text`
      font-size: 16px;
      font-weight: bold;
`;

const TimeList = styled.ScrollView``;

const TimeItrm = styled.TouchableOpacity`
      width: 75px;
      height: 40px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
`;

const TimeItemText = styled.Text`
      font-size: 16px;
`;

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosta',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];
const days = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
]

export default ({ show, setShow, user, service }) => {
  const navigation = useNavigation();

  const [selectedYear,  setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setLisHours] = useState([]);

  useEffect(()=>{
    if(user.available) {
      let daysInMoth = new Date(selectedYear, selectedMonth+1, 0).getDate();
      let newListDays = [];

      for(let i=1;i<=daysInMoth;i++) {
        let d = new Date(selectedYear, selectedMonth, i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        month = month < 10 ? '0'+month : month;
        day = day < 10 ? '0'+day : day;
        let selDate = `${year}-${month}-${day}`;

        let availability = user.available.filter(e=>e.date === selDate);

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekday: days[ d.getDay() ],
          number: i
        });

      }

      setListDays(newListDays);
      setSelectedDay(0);
      setLisHours([]);
      setSelectedHour(0);
    }
  }, [user, selectedMonth, selectedYear]);

  useEffect(()=>{
    if(user.available && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month < 10 ? '0'+month : month;
      day = day < 10 ? '0'+day : day;
      let selDate = `${year}-${month}-${day}`;

      let availability = user.available.filter(e=>e.date === selDate);

      if(availability.length > 0) {
        setLisHours( availability[0].hours );
      }

    }
  }, [user, selectedDay])

  useEffect(()=>{
    let today = new Date();
    setSelectedYear( today.getFullYear() );
    setSelectedMonth( today.getMonth() );
    setSelectedDay( today.getDate() );
  }, []);

  const handleLeftDateClick = () =>{
    let mountDate = new Date(selectedYear, selectedMonth, 1)
    mountDate.setMonth( mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  }

  const handleRighDateClick = () =>{
    let mountDate = new Date(selectedYear, selectedMonth, 1)
    mountDate.setMonth( mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(1);
  }

  const handleCloseButton = () => {
    setShow(false);
  }

  const handleFinishclick = () => {

  }

  
  return (
    <Modal 
     transparent={true}
     visible={show}
     animationType="slide"
    >
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseButton}>
            <ExpandIcon width="40" height="40" fill="#000000" />
          </CloseButton>
          
          <ModalItem>
            <UserInfo>
              <UserAvatar source={{uri: user.avatar}} />
              <UserName>{user.name}</UserName>
            </UserInfo>
          </ModalItem>

          {service != null && 
            <ModalItem>
              <ServiceInfo>
                <ServiceName>{user.services[service].name}</ServiceName>
                <ServicePrice>R$ {user.services[service].price.toFixed(2)}</ServicePrice>
              </ServiceInfo>
            </ModalItem>
          }

          <ModalItem>
            <DateInfo>
              <DatePrevArea onPress={handleLeftDateClick}>
                <NavPrevIcon width="35" height="35" fiill="#000000" />
              </DatePrevArea>
              <DateTitleArea>
                <DateTitle>{months[selectedMonth]} {selectedYear}</DateTitle>
              </DateTitleArea>
              <DateNextArea onPress={handleRighDateClick}>
                <NavNextIcon width="35" height="35" fill="#000000" />
              </DateNextArea>
            </DateInfo>
            <DateList horizontal={true} showsHorizontalScrollIndicator={false}>
              {listDays.map((item, key)=>(
                <DateItem
                  key={key}
                  onPress={()=>item.status ? setSelectedDay(item.number) : null}
                  style= {{
                    opacity: item.status ? 1 : 0.5,
                    backgroundColor: item.number === selectedDay ? '#4EADBE' : '#FFFFFF'
                  }}
                >
                  <DateItemWeekDay
                    style={{
                      color: item.number === selectedDay ? '#FFFFFF' : '#000000'
                    }}
                  >{item.weekday}</DateItemWeekDay>
                  <DateItemNumber
                    style={{
                      color: item.number === selectedDay ? '#FFFFFF' : '#000000'
                    }}
                  >{item.number}</DateItemNumber>
                </DateItem>
              ))}
            </DateList>
          </ModalItem>

          {selectedDay > 0 && listHours.length > 0 &&
            <ModalItem>
              <TimeList horizontal={true} showsHorizontalScrollIndicator={false}>
                {listHours.map((item, key)=>(
                  <TimeItrm
                   key={key}
                   onPress={()=>setSelectedHour(item)}
                   style={{
                     backgroundColor: item === selectedHour ? '#4EADBE' : '#FFFFFF'
                   }}
                  >
                    <TimeItemText
                      style={{
                        color: item === selectedHour ? '#FFFFFF' : '#000000',
                        fontWeight: item === selectedHour ? 'bold' : 'normal'
                      }}
                    >{item}</TimeItemText>
                  </TimeItrm>
                ))}
              </TimeList>
            </ModalItem>
          }

          <FinishButton onPress={handleFinishclick}>
            <FinishButtonText>Finalizar Agendamento</FinishButtonText>
          </FinishButton>

        </ModalBody>
      </ModalArea>
    </Modal>
  )
}