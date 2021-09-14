import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
//import { help, logIn, logOut, person, personAdd} from 'ionicons/icons';
import { archiveOutline, archiveSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Page1',
    url: '/page/page1',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Page2',
    url: '/page1/Page2',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  /*{
    title: 'Page3',
    url: '/page2/Page3',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },*/
  
  {
    title: 'Page4',
    url: '/page3/Page4',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  // {
  //   title: 'Page5',
  //   url: '/page4/Page5',
  //   iosIcon: trashOutline,
  //   mdIcon: trashSharp
  // },
  {
    title: 'Page6',
    url: '/page5/Page6',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page7',
    url: '/page7/Page7',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page8',
    url: '/page8/Page8',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page10',
    url: '/page10/Page10',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  // {
  //   title: 'Page11',
  //   url: '/page11/Page11',
  //   iosIcon: warningOutline,
  //   mdIcon: warningSharp
  // },
  {
    title: 'Page12',
    url: '/page12/Page12',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
    /*{
    title: 'Page13',
    url: '/page13/Page13',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },*/
  {
    title: 'Page14',
    url: '/page14/Page14',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page15',
    url: '/page15/Page15',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page16',
    url: '/page16/Page16',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page17',
    url: '/page17/Page17',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page18',
    url: '/page18/Page18',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page19',
    url: '/page19/Page19',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page20',
    url: '/page20/Page20',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page21',
    url: '/page21/Page21',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page22',
    url: '/page22/Page22',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page23',
    url: '/page23/Page23',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page24',
    url: '/page24/Page24',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page25',
    url: '/page25/Page25',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page26',
    url: '/page26/Page26',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page27',
    url: '/page27/Page27',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page28',
    url: '/page28/Page28',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page29',
    url: '/page29/Page29',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page30',
    url: '/page30/Page30',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page31',
    url: '/page31/Page31',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page32',
    url: '/page32/Page32',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
    {
    title: 'Page33',
    url: '/page33/Page33',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page34',
    url: '/page34/Page34',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page35',
    url: '/page35/Page35',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page36',
    url: '/page36/Page36',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page37',
    url: '/page37/page37',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Page38',
    url: '/page38/page38',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Page39',
    url: '/page39/page39',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Page40',
    url: '/page40/Page40',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page41',
    url: '/page41/Page41',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page42',
    url: '/page42/Page42',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page43',
    url: '/page43/Page43',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page44',
    url: '/page44/Page44',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  
  {
    title: 'Page46',
    url: '/page46/Page46',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page47',
    url: '/page47/Page47',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page48',
    url: '/page48/Page48',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page49',
    url: '/page49/Page49',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page50',
    url: '/page50/Page50',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page51',
    url: '/page51/Page51',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page52',
    url: '/page52/Page52',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
    {
    title: 'Page53',
    url: '/page53/Page53',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page60',
    url: '/page60/Page60',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page61',
    url: '/page61/Page61',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Page62',
    url: '/page62/Page62',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }

 
  

];

const routes = {

  loggedInPages: [
    { title: 'Logout', url: '/logout', iosIcon: warningOutline, mdIcon: warningSharp },
    { title: 'Edit Profile', url: '/edit', iosIcon: warningOutline, mdIcon: warningSharp },
    { title: 'Query', url: '/query', iosIcon: warningOutline, mdIcon: warningSharp }
  ],
  loggedOutPages: [
    { title: 'Login', url: '/login', iosIcon: warningOutline, mdIcon: warningSharp },
    { title: 'Signup', url: '/signup', iosIcon: warningOutline, mdIcon: warningSharp  }
  ]
};



function renderlistItems(list: AppPage[]) {
  return list
    .filter(route => !!route.url)
    .map(p => (
      <IonMenuToggle key={p.title} auto-hide="false">
        <IonItem button routerLink={p.url} routerDirection="none">
         <IonIcon slot="start" icon={p.iosIcon} />
         
          <IonLabel >{p.title}</IonLabel>
        </IonItem>
      </IonMenuToggle>
    ));
}


const Menu: React.FC = () => {
  const location = useLocation();
  var isLoggedIn = localStorage.getItem("MR_Token");

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="inbox-list">
        <IonListHeader >Account</IonListHeader>
          {isLoggedIn ? renderlistItems(routes.loggedInPages) : renderlistItems(routes.loggedOutPages)} 
        
        
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
