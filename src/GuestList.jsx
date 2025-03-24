export default function GuestList({ guests, setGuest }) {
  //returning a <section> to App() containing each guest (object) from a list of guests (array)
  //.map is going through each element (here, designated as 'guest') of the array "guests" (which was passed down as a prop) and doing the following to each element:
  //create a <div> which will be returned into each element of the new array created by .map
  //inside that <div> is a <p> holding the guests name and an onClick which, when the name is clicked on, will send the guest (object) to the State variable 'guest' via prop.
  //inside the <div> is another <p> which holds the guest's email.
  return (
    <section>
      {guests.map((guest) => {
        return (
          <div className="guests" key={guest.id}>
            <p className="guestName" onClick={() => setGuest(guest)}>
              Name: {guest.name}
            </p>
            <p>Email: {guest.email}</p>
          </div>
        );
      })}
    </section>
  );
}
