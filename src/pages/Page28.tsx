import { IonList,IonButtons, IonContent, IonHeader, IonItemSliding, IonItemOptions, IonItemOption, IonMenuButton,IonSearchbar, IonPage, IonTitle, IonToolbar, IonItem, IonRow, IonCol, IonFooter, IonGrid  } from '@ionic/react';
import React from 'react';


import './Page.css';
import axios from 'axios';
import { RouteComponentProps } from "react-router-dom";
export default class Page extends React.Component<RouteComponentProps<{}>,any> {




    constructor(props: RouteComponentProps<{}>)
    {
      super(props);
      this.state = {   
        query: "",
        data: [],
        filteredData: [],  
  
      }
    }

    onChange = (_event : any) => {
      console.log(_event.detail.value);
      this.setState({
        query : _event.detail.value
      });
     
      this.setState({  filteredData :  this.state.data.filter( (element:any) => {return element.toLowerCase().includes(this.state.query.toLowerCase()); })  })
      console.log(this.state.filteredData)
      
  
      
    };

    datafetch(){
     
      axios.get('http://127.0.0.1:8000/search/',{
                        headers: {
                          'Authorization': `Token da232f8a244dccdef93d8081ef48b571e9ea46b7`
                        }
                      }
                    )
                    .then(response =>{
                      console.log(response)
                      this.setState({data : response.data['stock_universe_list']})

                      
                    })
                    .catch(error => {
                      console.log(error)
                    })

    }
       
    componentDidMount() {

    
      this.datafetch()
      
    }


  render () {

    return (
    
      <IonPage className="z-999">
        <IonHeader>
          <IonToolbar>
            <IonButtons className="ios-btn1" slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle className="header-bag ">
                
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
  
           
         
            <img src="/assets/icon/search.svg" className="" alt=""></img>
  
          
  
            <IonItem className="cus-input1 mb-12">
              <IonSearchbar value={this.state.query} onIonChange={e => this.onChange(e)}></IonSearchbar>
          </IonItem>
          <IonList>

              {
                this.state.filteredData.map((item : any) => {

                  return (
                    <IonItemSliding>
                      <IonItem className="cus-input1 mb-12 d-flex">
                        <IonRow className="w-100">

                          <IonCol className="company-logo" size="1">
                            <img className="logo-11" src="/assets/icon/Canera.png" alt=""></img>
                          </IonCol>
                          <IonCol className="" size="8">
                            <button className=" f-14 long-text b-500 mt-5" id="tool-tip" color="light">{item}</button><br />
                         
                          </IonCol>
                          <IonCol size="3" className="text-right">
                            <img className="logo-13" src="/assets/icon/navigate.svg" alt=""></img>
                          </IonCol>
                        </IonRow>
                      </IonItem>
                      
                      <IonItemOptions side="end" className="h-83">
                                                  <IonItemOption  onClick={() => { console.log("OK"); this.props.history.push('/page29/Page29', item); } } >View More</IonItemOption>


                      </IonItemOptions>
                    </IonItemSliding>
                  );
                })
              }

                  

          </IonList>
            
         
          </IonContent>
  
      <IonFooter className="ion-no-border">
        <IonGrid className="text-center d-flex w-95 mt-10px">
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/home.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13 b-500 ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page30/Page30'); } } >Home</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/news.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13" onClick={() => { console.log("OK"); this.props.history.push('/page7/Page7'); } }  >My Portfolio</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/res.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page26/Page26'); } }  >Restructure</p>
            </IonRow>
          </IonCol>
          <IonCol size="3">
            <IonRow className="jc-footer">
              <img src="/assets/icon/ale.svg" className="w-30" alt=""></img>
            </IonRow>
            <IonRow  className="jc-footer">
              <p className=" mt-5px ft-13  ft-13"onClick={() => { console.log("OK"); this.props.history.push('/page10/Page1'); } }  >Alerts</p>
            </IonRow>
          </IonCol>
  
        </IonGrid>
    </IonFooter>
        </IonPage>
    );

  }
  





}
