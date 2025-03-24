//import the embedded functions in React useEffect and useState
import { useEffect, useState } from "react";
//import component function GuestList to enable it to be returned
import GuestList from "./GuestList";
//import component function GuestDetails to enable it to be returned
import GuestDetails from "./GuestDetails";

//provide API
const API =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/guests";

export default function App() {
  //declaring State and State setter and an empty array as the initial State
  const [guests, setGuests] = useState([]);
  const [guest, setGuest] = useState([]);
  //Using useEffect because....?????
  useEffect(() => {
    //first argument to useEffect is the setup function, which runs the below code everytime...???
    const getGuests = async () => {
      //try the code in the {}
      try {
        //fetch information from API, aWAIT for a response.  This is what's call and effect.
        const response = await fetch(API);
        //if the response was not ok, throw an error
        if (!response.ok) throw Error("error, bro");
        //otherwise, parse the .json package (which mean...???)
        const result = await response.json();
        //grab the data from the package and send it to state
        setGuests(result.data);
        //if you failed "try"ing to connect to API, catch the error thrown
      } catch (e) {
        //...and log that error, if so.
        console.error(e);
      }
    };
    getGuests();
    // the second (optional, but common) argument is an empty array which instructs useEffect to only run the function once on the initial render
  }, []);
  //below props 'guests' and 'setGuests' are being passed to component functions 'GuestList' and 'GuestDetails'.
  //props are passed inside of curly braces and given a name.
  return (
    <>
      <h1>Guest List</h1>
      <article>
        <GuestList guests={guests} setGuest={setGuest} />
        <GuestDetails guest={guest} setGuest={setGuest} />
      </article>
    </>
  );
}
