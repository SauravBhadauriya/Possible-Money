import React from "react";

export default function ShowApplyFormBtn({ setOpen }) {
  return (
    <div>
      {/* <Home openForm={() => setShowForm(true)} /> */}
      <button onClick={() => setOpen(true)} className="btn btn-primary">
        Apply Now
      </button>
    </div>
  );
}
