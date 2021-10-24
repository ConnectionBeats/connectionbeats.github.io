import './index.scss';

function Contacts() {
  return (
    <div className="contacts">
      <h2 className="contacts__heading">Contact Me</h2>
      <div className="contacts__blocks">
        <div className="contacts__block">
          <h5>Instagram</h5>
          <span>@prod.connection</span>
          <a href="https://instagram.com/prod.connection">Open</a>
        </div>
        <div className="contacts__block">
          <h5>Email</h5>
          <span>prodconnectionbeats@gmail.com</span>
          <a href="mailto:prodconnectionbeats@gmail.com">Open</a>
        </div>
      </div>
      <span className="contacts__info">Text me on Instagram/Email if you have any questions about Lease, Exclusive Rights, or Free Downloads</span>
    </div>
  );
}

export default Contacts;
