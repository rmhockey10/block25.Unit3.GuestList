import useQuery from "./useQuery";

export default function GuestDetails({ guest, setGuest }) {
  //if the length of State variable 'guest' (which has been passed down as a prop) is 0, then just display an <h2>
  //otherwise, take the object 'guest' (which was passed down via prop) and use dot notation to extract values and display them in desigated <p>
  //the button updates the guest State to an empty array.

  const { data: guestInfo, loading, error } = useQuery(`/guests/${guest}`);

  if (loading || !guest) {
    return <p>loading, hold on!</p>;
  }

  if (error) {
    return (
      <section>
        <h2>{error}</h2>
      </section>
    );
  }

  if (!guestInfo) {
    return <h2>no guest info</h2>;
  }

  return (
    <section>
      <h2>Guest Details</h2>
      <p>Name: {guestInfo.name}</p>
      <p>Email: {guestInfo.email}</p>
      <p>Phone#: {guestInfo.phone}</p>
      <p>Bio: {guestInfo.bio}</p>
      <p>Job: {guestInfo.job}</p>
      <button onClick={() => setGuest()}>Back</button>
    </section>
  );
}
