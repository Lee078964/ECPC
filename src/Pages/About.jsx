function About() {

  return (
    <div className="about">
      <div className="section">
        <h2 className="section-title">About Us</h2>
        <p className="lead">
          Learn who we are, what we believe, and the vision God has given our church.
        </p>

        <div className="cards">
          <div className="card accent">
            <h4>Who we are</h4>
            <p>
              Evangelical Community Of Pentecostal Church is a faith community committed to loving God, loving people, and serving our local community. We are a Pentecostal church that values worship, prayer, the Bible, and the work of the Holy Spirit.
            </p>
          </div>

          <div className="card">
            <h4>Our vision</h4>
            <p>
              To lead people to Jesus Christ, grow in faith together, and be a light in our community.
            </p>
          </div>

          <div className="card">
            <h4>Our mission</h4>
            <p>
              To worship God, share the Gospel, disciple believers, and build strong families through Christ.
            </p>
          </div>

          <div className="card accent">
            <h4>Our leadership</h4>
            <p>
              <strong>Rev. Claude</strong> leads our church with a heart for the Word, prayer, and spiritual growth.
            </p>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <h4>What we believe</h4>
            <ul>
              <li>Jesus Christ is Lord and Saviour.</li>
              <li>The Bible is God&#39;s Word and our foundation for life.</li>
              <li>The Holy Spirit empowers believers for holy living, worship, and service.</li>
              <li>We believe in prayer, fellowship, and caring for one another.</li>
              <li>We are called to share the Gospel and make disciples.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About