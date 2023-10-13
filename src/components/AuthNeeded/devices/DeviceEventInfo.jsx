export default function DeviceEventInfo({ deviceId = 1 }) {
  return (
    <>
      <div className="progress-stacked">
        <div
          className="progress"
          role="progressbar"
          aria-label="Segment one"
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "15%" }}
        >
          <div className="progress-bar"></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Segment two"
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "30%" }}
        >
          <div className="progress-bar bg-success"></div>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Segment three"
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "20%" }}
        >
          <div className="progress-bar bg-info"></div>
        </div>
      </div>
    </>
  );
}
