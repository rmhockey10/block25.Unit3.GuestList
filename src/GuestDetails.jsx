export default function GuestDetails({ guest, setGuest }) {
  //if the length of State variable 'guest' (which has been passed down as a prop) is 0, then just display an <h2>
  //otherwise, take the object 'guest' (which was passed down via prop) and use dot notation to extract values and display them in desigated <p>
  //the button updates the guest State to an empty array.
  if (guest.length === 0) {
    return (
      <section>
        <h2>Guest Details</h2>
      </section>
    );
  }

  return (
    <section>
      <h2>Guest Details</h2>
      <p>Name: {guest.name}</p>
      <p>Email: {guest.email}</p>
      <p>Phone#: {guest.phone}</p>
      <p>Bio: {guest.bio}</p>
      <p>Job: {guest.job}</p>
      <button onClick={() => setGuest([])}>Back</button>
    </section>
  );
}
