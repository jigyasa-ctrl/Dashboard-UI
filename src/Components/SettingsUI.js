import React from "react";

function SettingsUI({data}) {
  console.log(data, "yuh");
  return (
    <div className="settings">
      <div>
        <form className="form form-settings">
          <h3>Profile</h3>

          <img
            src={data.image}
            height="100px"
            width="100px"
            style={{ borderRadius: "50%" }}
          />
          <div className="form-sub form-settings-2">
            <span className="form">
              <label>First Name</label>
              <input
                style={{ width: "auto" }}
                type="text"
                name="name"
                placeholder="First Name"
                value={localStorage.getItem("name")}
              ></input>
            </span>
            <span className="form">
              <label>Last Name</label>
              <input
                style={{ width: "auto" }}
                type="name"
                placeholder="Last Name"
                value={localStorage.getItem("lastname")}
              ></input>
            </span>
          </div>
          <label>Date of Birth</label>
          <input type="date" placeholder="Enter Your Email" value={data.dob}></input>
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder=""
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={data.number}
          ></input>
          <label>Address</label>
          <input
            type="text"
            placeholder=""
            value={data.address}
          ></input>
        </form>
      </div>
      <div>
        <form className="form account">
          <h3>Profile</h3>
          <div className="form-sub"></div>
          <label>Email Address</label>
          <input
            type="em"
            placeholder="Enter Your Password"
            value={localStorage.getItem("email")}
          ></input>
          <label>Current Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={localStorage.getItem("password")}
          ></input>

          <label>New Password</label>
          <input
            type="text"
            placeholder="Confirm Password"
            value={localStorage.getItem("password")}
          ></input>
        </form>
        <div className="chart-settings">
          <p>
            <strong>Security</strong>
          </p>
          <span className="flex">
            <p>2-step verification</p>
            <label class="switch">
              <input type="checkbox" checked></input>
              <span class="slider round"></span>
            </label>
          </span>
        </div>
        <div className="chart-settings">
          <p>
            <strong>Danger Zone</strong>
          </p>
          <span className="flex">
            <button>
              <strong>Delete my account</strong>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SettingsUI;
