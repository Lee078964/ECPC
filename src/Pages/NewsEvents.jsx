function NewsEvents() {

  return (
    <div className="newsevents">
      <div className="section">
        <h2 className="section-title">News &#38; Events</h2>
        <p className="lead">Stay updated with our services and upcoming church events.</p>

        <div className="cards">
          <div className="card accent" style={{ gridColumn: "span 12" }}>
            <h4> Sunday Service - Every Sunday</h4>
            <p><strong>10:00am - 1:00pm</strong> . 141 Horizon Dr, Middle Park Qld 4074</p>
            <p>Join us for worship, the Word, prayer, and fellowship.</p>
          </div>

          <div className="card small">
            <h4>Prayer &#38; Worship Night</h4>
            <p>A time of worship and prayer together. <em>Date: Coming soon</em></p>
          </div>

          <div className="card small">
            <h4>Youth Fellowship</h4>
            <p>Connect, grow, and be encouraged. <em>Date: COming soon</em></p>
          </div>

          <div className="card small">
            <h4>Choir Practice &#40;Revival Choir&#41;</h4>
            <p>Training, worship, and preparation for Sunday. <em>Date: Coming soon</em></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsEvents