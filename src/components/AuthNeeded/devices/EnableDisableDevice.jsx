export default function EnableDisableDevice({ deviceId, status }) {
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="enable-disable"
        />
      </div>
    </>
  );
}
