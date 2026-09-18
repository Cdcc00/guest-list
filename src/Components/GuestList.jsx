export default function GuestList({ guests, selectedGuest, setSelectedGuest }) {
  return (
    <tbody>
      {guests.map((guest) => {
        return (
          <tr
            className={
              selectedGuest && guest.id === selectedGuest.id
                ? "selected"
                : undefined
            }
            key={guest.id}
            onClick={() => setSelectedGuest(guest)}
          >
            <td>{guest.name}</td>
            <td>{guest.email}</td>
            <td>{guest.bio}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
