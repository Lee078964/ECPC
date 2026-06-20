function Ministries() {

  return (
    <div className="ministries">
      <div className="section">
        <h2 className="section-title">Ministries</h2>
        <p className="lead">There is a place for everyone to grow, serve, and belong. Join a ministry and be part of what God is doing.</p>

        <div className="cards">
          <div className="card accent small">
            <h4>Kids Choir</h4>
            <p>Helping children worship God through song, joy, and confidence.</p>
          </div>

          <div className="card small">
            <h4>Revival Choir</h4>
            <p>A worship ministry dedicated to leading the church into God&#39;s presence through Spirit-led praise.</p>
          </div>

          <div className="card small">
            <h4>Youth</h4>
            <p>A welcoming space for young people to grow in faith, friendship, and purpose.</p>
          </div>

          <div className="card small">
            <h4>Men</h4>
            <p>Encouraging men to live with faith, integrity, leadership, and love for family.</p>
          </div>

          <div className="card small">
            <h4>Women</h4>
            <p>A supportive community for women to grow spiritually, pray together, and build strong relationships.</p>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <h4>Want to join a ministry?</h4>
            <p>Contact us and we&#39;ll help you connect.</p>
            <br />
            <a className="btn" href="/contacts">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ministries