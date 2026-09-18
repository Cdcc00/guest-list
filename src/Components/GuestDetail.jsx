export default function GuestDetail({ selectedGuest, setSelectedGuest }) {
  return (
    <div className="guest-detail">
      <h4>Guest detail</h4>
      <p>
        Name: <span>{selectedGuest.name}</span>
      </p>
      <p>
        Email: <span>{selectedGuest.email}</span>
      </p>
      <p>
        Phone: <span>{selectedGuest.phone}</span>
      </p>
      <p>
        Bio: <span>{selectedGuest.bio}</span>
      </p>
      <p>
        Job: <span>{selectedGuest.job}</span>
      </p>
      <button onClick={() => setSelectedGuest(null)}>Close</button>
    </div>
  );
}
