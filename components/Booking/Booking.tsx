import TableoBooking from "./TableoBooking";
import { website } from "@/content/website";

export default function Booking() {
  const booking = website.booking;

  return (
    <section className="section reserve" id="reservations" aria-labelledby="reservations-title">
      <div className="wrap reserve-inner">
        <div className="reserve-head">
          <span className="label reveal">{booking.label}</span>
          <h2 className="display display--sm lines" id="reservations-title">
            <span className="ln"><span>{booking.title}</span></span>
          </h2>
          <p className="reveal">{booking.description}</p>
        </div>
        <div className="form-card reveal"><TableoBooking /></div>
      </div>
    </section>
  );
}
