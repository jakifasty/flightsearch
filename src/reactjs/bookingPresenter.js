import React from "react";
import BookingView from "../views/bookingView.js"




export default function Booking (props){


  return <BookingView flights={props.model.flights} />;


}
