import GuestList from "./Components/GuestList";
import GuestDetail from "./Components/GuestDetail";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2607/guests",
      );
      const data = response.data.data;
      setGuests(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="card">
        <h1>Guest List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <GuestList guests={guests} selectedGuest = {selectedGuest} setSelectedGuest={setSelectedGuest} />
        </table>
        {selectedGuest ? (
          <GuestDetail
            selectedGuest={selectedGuest}
            setSelectedGuest={setSelectedGuest}
          />
        ) : (
          <h4>Please select a guest.</h4>
        )}
      </div>
    </>
  );
}
