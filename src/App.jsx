//import the embedded functions in React useEffect and useState
import { useState } from "react";
//import component function GuestList to enable it to be returned
import GuestList from "./GuestList";
//import component function GuestDetails to enable it to be returned
import GuestDetails from "./GuestDetails";

import useQuery from "./useQuery";

export default function App() {
  //declaring State and State setter and an empty array as the initial State
  const [guest, setGuest] = useState();

  const { data: guests, loading, error } = useQuery("/guests");

  if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>;

  //below props 'guests' and 'setGuests' are being passed to component functions 'GuestList' and 'GuestDetails'.
  //props are passed inside of curly braces and given a name.
  return (
    <>
      <h1>Guest List</h1>
      <article>
        {!guest ? (
          <GuestList guests={guests} setGuest={setGuest} />
        ) : (
          <GuestDetails guest={guest} setGuest={setGuest} />
        )}
      </article>
    </>
  );
}
