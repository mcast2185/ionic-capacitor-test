import './dashboard.css';

import {Device} from "@awesome-cordova-plugins/device";
import React, { useState } from 'react'
import { IonButton, 
  IonButtons, 
  IonSearchbar, 
  IonItem, 
  IonInput, 
  IonPage, 
  IonHeader, 
  IonContent, 
  IonToolbar, 
  IonMenuButton, 
  IonTitle, 
  IonGrid, 
  IonRow, 
  IonCol,
  IonModal
} from '@ionic/react';


const Dashboard: React.FC = () => {
  // create state for search text
  const [searchText, setSearchText] = useState<string>("hello");
  // create state for text
  const [text, setText] = useState<string>();
  // create click event
  const clickEvent = () => {
    console.log(text);
  };
  // create modal option
  const [toggleModal, setModal] = useState<boolean>(false);
  const toggleModalEvent = () => {
    if (toggleModal === false) {
      return setModal(true)      
    }
    if (toggleModal === true) {
      return setModal(false)
    }
  };
  // example of device import
  const exampleDevice = () => {
    setSearchText(Device.uuid)
    console.log(Device.uuid);
    console.log(Device.platform);
    console.log(Device.manufacturer);
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton color='success'/>
            <IonTitle>Dashboard</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar placeholder={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <IonButton expand="block" id="trigger-button">Click</IonButton>
              {/* <IonButton expand="block" onClick={toggleModalEvent}>Click</IonButton> */}
            </IonCol>
            <IonCol size='6'>
              <IonButton expand="block" onClick={exampleDevice}>UUID</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonModal trigger='trigger-button'>
        {/* <IonModal isOpen={toggleModal}> */}
          <IonContent>
            Modal Content
          </IonContent>
        </IonModal>
        {/* <IonButton onClick={clickEvent} color="primary">Hello World!</IonButton>
        <IonSearchbar placeholder={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonItem>
          <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
        </IonItem> */}
      </IonContent>
    </IonPage>
  )
}

export default Dashboard;