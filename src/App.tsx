import Menu from './components/Menu';
import Page from './pages/Page';
import Page1 from './pages/Page1';
import Page3 from './pages/Page3';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page12 from './pages/Page12';
import Page14 from './pages/Page14';
import Page15 from './pages/Page15';
import Page16 from './pages/Page16';
import Page17 from './pages/Page17';
import Page18 from './pages/Page18';
import Page19 from './pages/Page19';
import Page20 from './pages/Page20';
import Page21 from './pages/Page21';
import Page22 from './pages/Page22';
import Page23 from './pages/Page23';
import Page24 from './pages/Page24';
import Page25 from './pages/Page25';
import Page26 from './pages/Page26';
import Page27 from './pages/Page27';
import Page28 from './pages/Page28';
import Page29 from './pages/Page29';
import Page30 from './pages/Page30';
import Page31 from './pages/Page31';
import Page32 from './pages/Page32';
import Page33 from './pages/Page33';
import Page34 from './pages/Page34';
import Page35 from './pages/Page35';
import Page36 from './pages/Page36';
import Page37 from './pages/Page37';
import Page38 from './pages/Page38';
import Page39 from './pages/Page39';
import Page50 from './pages/Page50';
import Page60 from './pages/Page60';
import Page61 from './pages/Page61';
import Page62 from './pages/Page62';
import Page40 from './pages/Page40';
import Page41 from './pages/Page41';
import Page42 from './pages/Page42';
import Page43 from './pages/Page43';
import Page44 from './pages/Page44';
import Page45 from './pages/Page45';
import Page46 from './pages/Page46';
import Page47 from './pages/Page47';
import Page48 from './pages/Page48';
import Page51 from './pages/Page51';
import Page49 from './pages/Page49';
import Page52 from './pages/Page52';
import Page53 from './pages/Page53';



import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/:name" component={Page} exact />
            <Redirect from="/" to="/page/page1" exact />
          
            <Route path="/page1/:name" component={Page1} exact />
            <Redirect from="/" to="/page1/Outbox" exact />
          
            <Route path="/page3/:name" component={Page3} exact />
            <Redirect from="/" to="/page3/Archived" exact />
          
            <Route path="/page5/:name" component={Page5} exact />
            <Redirect from="/" to="/page5/Spam" exact />

            <Route path="/page6/:name" component={Page6} exact />
            <Redirect from="/" to="/page6/Spam" exact />
          
            <Route path="/page7/:name" component={Page7} exact />
            <Redirect from="/" to="/page7/Spam" exact />

            <Route path="/page19/:name" component={Page19} exact />
            <Redirect from="/" to="/page19/Spam" exact />

            <Route path="/page8/:name" component={Page8} exact />
            <Redirect from="/" to="/page8/Spam" exact />

            <Route path="/page17/:name" component={Page17} exact />
            <Redirect from="/" to="/page17/Spam" exact />

            <Route path="/page18/:name" component={Page18} exact />
            <Redirect from="/" to="/page18/Spam" exact />
          
            <Route path="/page9/:name" component={Page9} exact />
            <Redirect from="/" to="/page9/Spam" exact />
          
            <Route path="/page10/:name" component={Page10} exact />
            <Redirect from="/" to="/page10/Spam" exact />
          
            <Route path="/page12/:name" component={Page12} exact />
            <Redirect from="/" to="/page12/Spam" exact />

            <Route path="/page14/:name" component={Page14} exact />
            <Redirect from="/" to="/page14/Spam" exact />
            
            <Route path="/page15/:name" component={Page15} exact />
            <Redirect from="/" to="/page15/Spam" exact />

            <Route path="/page16/:name" component={Page16} exact />
            <Redirect from="/" to="/page16/Spam" exact />

            <Route path="/page20/:name" component={Page20} exact />
            <Redirect from="/" to="/page20/Spam" exact />

            <Route path="/page21/:name" component={Page21} exact />
            <Redirect from="/" to="/page21/Spam" exact />

            <Route path="/page22/:name" component={Page22} exact />
            <Redirect from="/" to="/page22/Spam" exact />

            <Route path="/page23/:name" component={Page23} exact />
            <Redirect from="/" to="/page23/Spam" exact />

            <Route path="/page24/:name" component={Page24} exact />
            <Redirect from="/" to="/page24/Spam" exact />

            <Route path="/page25/:name" component={Page25} exact />
            <Redirect from="/" to="/page25/Spam" exact />
            
            <Route path="/page26/:name" component={Page26} exact />
            <Redirect from="/" to="/page26/Spam" exact />

            <Route path="/page27/:name" component={Page27} exact />
            <Redirect from="/" to="/page27/Spam" exact />

            <Route path="/page28/:name" component={Page28} exact />
            <Redirect from="/" to="/page28/Spam" exact />

            <Route path="/page29/:name" component={Page29} exact />
            <Redirect from="/" to="/page29/Spam" exact />

            <Route path="/page30/:name" component={Page30} exact />
            <Redirect from="/" to="/page30/Spam" exact />

            <Route path="/page31/:name" component={Page31} exact />
            <Redirect from="/" to="/page31/Spam" exact />

            <Route path="/page32/:name" component={Page32} exact />
            <Redirect from="/" to="/page32/Spam" exact />

            <Route path="/page33/:name" component={Page33} exact />
            <Redirect from="/" to="/page33/Spam" exact />

            <Route path="/page34/:name" component={Page34} exact />
            <Redirect from="/" to="/page34/Spam" exact />

            <Route path="/page35/:name" component={Page35} exact />
            <Redirect from="/" to="/page35/Spam" exact />

            <Route path="/page36/:name" component={Page36} exact />
            <Redirect from="/" to="/page36/Spam" exact />
	    
            <Route path="/page37/:name" component={Page37} exact />
            <Redirect from="/" to="/page37/Spam" exact />
            
            <Route path="/page38/:name" component={Page38} exact />
            <Redirect from="/" to="/page38/Spam" exact />

            <Route path="/page39/:name" component={Page39} exact />
            <Redirect from="/" to="/page39/Spam" exact />
	    
	          <Route path="/page50/:name" component={Page50} exact />
            <Redirect from="/" to="/page50/Spam" exact />

            <Route path="/page60/:name" component={Page60} exact />
            <Redirect from="/" to="/page60/Spam" exact />

            <Route path="/page61/:name" component={Page61} exact />
            <Redirect from="/" to="/page61/Spam" exact />

            <Route path="/page62/:name" component={Page62} exact />
            <Redirect from="/" to="/page62/Spam" exact />

            <Route path="/logout" render={() => {
                   
                    localStorage.clear()
                    
                    return <Redirect to="/page37/Spam" />
                  }} />

            <Route path="/login" render={() => {
                   
                   return <Redirect to="/page37/Spam" />
                 }} />

            <Route path="/signup" render={() => {
                   
                   return <Redirect to="/page38/Spam" />
                 }} />

            <Route path="/edit" render={() => {
                   
                   return <Redirect to="/page43/Spam" />
                 }} />

            <Route path="/query" render={() => {
                   
                   return <Redirect to="/page42/Spam" />
                 }} />
		 
	          <Route path="/page40/:name" component={Page40} exact />
            <Redirect from="/" to="/page40/Spam" exact />

            <Route path="/page41/:name" component={Page41} exact />
            <Redirect from="/" to="/page41/Spam" exact />

            <Route path="/page42/:name" component={Page42} exact />
            <Redirect from="/" to="/page42/Spam" exact />

            <Route path="/page43/:name" component={Page43} exact />
            <Redirect from="/" to="/page43/Spam" exact />

            <Route path="/page44/:name" component={Page44} exact />
            <Redirect from="/" to="/page44/Spam" exact />

            <Route path="/page45/:name" component={Page45} exact />
            <Redirect from="/" to="/page45/Spam" exact />

            <Route path="/page46/:name" component={Page46} exact />
            <Redirect from="/" to="/page46/Spam" exact />

            <Route path="/page47/:name" component={Page47} exact />
            <Redirect from="/" to="/page47/Spam" exact />

            <Route path="/page48/:name" component={Page48} exact />
            <Redirect from="/" to="/page48/Spam" exact />

            <Route path="/page51/:name" component={Page51} exact />
            <Redirect from="/" to="/page51/Spam" exact />

            <Route path="/page49/:name" component={Page49} exact />
            <Redirect from="/" to="/page49/Spam" exact />
	    
	    <Route path="/page52/:name" component={Page52} exact />
            <Redirect from="/" to="/page52/Spam" exact />

            <Route path="/page53/:name" component={Page53} exact />
            <Redirect from="/" to="/page53/Spam" exact />
	    
	    

          </IonRouterOutlet>
       
        </IonSplitPane>
      </IonReactRouter>
      
      
    </IonApp>
    
  );
};

export default App;
