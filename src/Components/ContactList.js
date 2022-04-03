import Card from "./Card";
import "./ContactList.css";
import AddContact from "./AddContact";

export default function ContactList() {
  return (
    <div className="contact-list">
      <Card name="Ankit" age="22" />
      <Card name="Ankit" age="22" />
      <Card name="Ankit" age="22" />
      <Card name="Ankit" age="22" />
      <Card name="Ankit" age="22" />
      <AddContact />

      <button className="add-btn">+</button>
    </div>
  );
}
