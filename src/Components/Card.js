import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/720/720236.png"
          alt="profile"
          className="profile-img"
        />
      </div>
      <div>
        {props.name}
        <li> {props.age}</li>{" "}
      </div>
    </div>
  );
}
