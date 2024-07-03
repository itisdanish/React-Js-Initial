import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Shimmer = () => {
  return (
    <>
      <h1 className="loading-text">
        Looking for Great Food Near You {""}
        <FontAwesomeIcon icon={faUtensils} />
      </h1>
      <div className="shimmer-container">
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
      </div>
    </>
  );
};

export default Shimmer;
