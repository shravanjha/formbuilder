import React from "react";
import {getUserToken} from "../utils";

export default function FormCreated(props) {
  const adminToken = props.params.adminToken;
  const userToken = getUserToken(adminToken);
  const origin = window.location.origin + window.location.pathname;
  const userformURL = `${origin}#/form/${userToken}`;
  const adminURL = `${origin}#/admin/${adminToken}`;

  const onClick = (e) => {
    e.target.select();
  };

  return (
    <form>
      <h3>Great, your form is ready to be filled!</h3>
      <div className="form-group">

        <label><a href={userformURL}>Link to give to the form fillers</a></label>
        <div className="input-group input-group-lg">
          <span className="input-group-addon"><i className="glyphicon glyphicon-bullhorn" /></span>
          <input onClick={onClick} type="text" className="form-control" defaultValue={userformURL} />
        </div>

        <label><a href={adminURL}>Link to the administration dashboard</a></label>
          <div className="input-group input-group-lg">
          <span className="input-group-addon"><i className="glyphicon glyphicon-eye-close" /></span>
          <input onClick={onClick} type="text" className="form-control" defaultValue={adminURL} />
        </div>
      </div>
    </form>
  );
}
