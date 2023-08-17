import { Fragment } from "react";
import "./Offcanvas.css";
import ReactDOM from "react-dom";

const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays");
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.hideCart} />;
  };
  const OffcanvasOverlay = (props) => {
    return (
      <div className="offcanvas">
        <div className="content">{props.children}</div>
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideCart={props.hideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Offcanvas;
