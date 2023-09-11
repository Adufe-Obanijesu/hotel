// Importing atoms
import RoomAtom from "./atoms/RoomAtom";

// Importing Images
import room6 from "/images/room-6.jpg";
import room1 from "/images/room-1.jpg";
import room2 from "/images/room-2.jpg";
import room3 from "/images/room-3.jpg";
import room4 from "/images/room-4.jpg";
import room5 from "/images/room-5.jpg";

const RoomsComponent = () => {
  return (
    <section id="rooms" className="py-10 lg:py-24">
      <div>
        <h6 className="uppercase text-green-400 mb-2 font-bold text-sm text-center">
          harbor lights rooms
        </h6>
        <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold text-center">
          Hotel Master&apos;s Rooms
        </h1>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <RoomAtom type="King" price="100" img="room-1.jpg" />
            <RoomAtom type="Superior" price="100" img="room-2.jpg" />
            <RoomAtom type="Deluxe" price="100" img="room-3.jpg" reverse />
            <RoomAtom type="Classic" price="100" img="room-4.jpg" reverse />
            <RoomAtom type="Luxury" price="100" img="room-5.jpg" />
            <RoomAtom type="Business" price="100" img="room-6.jpg" />
            {/*<RoomAtom
              roomImage={room5}
              reverse={false}
              price={120}
              type="Superior"
            />*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsComponent;
