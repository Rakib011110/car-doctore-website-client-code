import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBooking(newBookings);
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Service</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="mb-10 mt-5">
              {bookings.map((booking) => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleBookingConfirm={handleBookingConfirm}
                ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
