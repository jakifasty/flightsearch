import React from "react"
import HomepageView from "../views/homepageView";
//import sendMail from "../testFIle";
export default
function Homepage(props){
    const [, setFrom]=React.useState(null);
    const [, setAdults]=React.useState(null);
    const [, setYouths]=React.useState(null);
    const [, setTripType]=React.useState(null);

    function mailSetupACB(){
        /*
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'testmailforemail3@gmail.com', // generated ethereal user
              pass: 'dvorgrisegdmghga', // generated ethereal password
            },
          });
          console.log(transporter)
         transporter.sendMail({
            from: 'testmailforemail3@gmail.com', // sender address
            to: "marco.godow98@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          })
          
       // console.log("Message sent: %s", info.messageId);
          */
        }



    function observerACB(){
        setFrom(props.model.fromAirport);
        setAdults(props.model.amountOfAdults);
        setYouths(props.model.amountOfYouths);
        setTripType(props.model.tripType)

    }

    function wasCreatedACB(){
        observerACB();
        props.model.addObserver(observerACB);
        return function isTakenDownACB(){props.model.removeObserver(observerACB);}
    }

    React.useEffect(wasCreatedACB, []);

    function onFromTextChangeACB(from){
        props.model.setFromAirport(from)
    }
    function onSelectTripTypeACB(type){
        props.model.setTripType(type)
    }
    function isReadyForSearchACB(){
        if(props.model.amountOfAdults + props.model.amountOfYouths >0){
            if(props.model.tripType === 'One'){
                if(props.model.fromAirport !== ''){
                    
                }
            }else if(props.model.tripType === 'Round'){

            } else{
                return false;
            }
        }
    }

    function onChangeAmountPeopleACB(params){
        switch (params) {
            case 'Adult +' :
                props.model.setAmountAdults(props.model.amountOfAdults + 1)
                break;
            case 'Adult -' :
                props.model.setAmountAdults(props.model.amountOfAdults - 1)
                break;
            case 'Youth +' :
                props.model.setAmountYouths(props.model.amountOfYouths + 1)
                break;
            case 'Youth -' :
                props.model.setAmountYouths(props.model.amountOfYouths - 1)
                break;
            default:
                break;
        }
    }
    return < HomepageView 
        onChangeAmountPeople={onChangeAmountPeopleACB}
        onFromTextChange={onFromTextChangeACB}
        onSelectTripType={onSelectTripTypeACB}
        fromAirport= {props.model.fromAirport}
        amountOfPeople={props.model.amountOfAdults + props.model.amountOfYouths}
        amountOfAdults={props.model.amountOfAdults}
        amountOfYouths={props.model.amountOfYouths}
        tripType={props.model.tripType}
        dontKnowWhyThisWorkButItDoes={7}
        validRequest={isReadyForSearchACB}
        sendMail={mailSetupACB}
        />;
}
