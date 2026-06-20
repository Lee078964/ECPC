function Contacts() {

  return (
    <div className="contacts">
      <div className="section">
        <h2>Contact Us</h2>
        <p className="lead">Visit us or reach out - we&#39;d love to hear from you.</p>

        <div className="cards">
          <div className="card accent">
            <h4>Visit Us</h4>
            <p><strong>141 Horizon Dr, Middle Park QLD 4074</strong></p>
            <p><strong>Sunday Service: </strong>10:00am-1:00pm</p>
          </div>

          <div className="card">
            <h4>Contact</h4>
            <p>Add:</p>
            <ul>
              <li>Phone:</li>
              <li>Email:</li>
            </ul>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <h4>Prayer request or message</h4>
            <p>Send us a message and we will respond as soon as possible.</p>
          </div>

        </div>
      </div>

      <h4>{/*Evangelical Community Of Pentecostal Church*/}</h4>

      <h2>{/*Contact form message*/}</h2>
    </div>
  )
}
export default Contacts