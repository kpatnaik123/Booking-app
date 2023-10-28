import { useState, CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div style={{marginTop:'250px'}}>
        <div className="sweet-loading text-center">
        <BeatLoader
            color='orange'
            loading={loading}
            size={20}
        />
        </div>
    </div>
  );
}

export default Loader;