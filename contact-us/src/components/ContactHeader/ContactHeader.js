import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptas
        voluptates odio fugit vero quia eius? Non quis aperiam eligendi dolorum
        officiis praesentium eaque, tenetur quos necessitatibus voluptas.
        Similique, nostrum.
      </p>
    </div>
  );
};

export default ContactHeader;
