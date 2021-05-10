import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./GetStyle.css";
import { Link } from "react-router-dom"
function Getstarted() {
  return (
    <div>
      <div className="regNav">
        <div className="logo">
          ShortCode

        </div>
        <div className="Catnav">
          <div className="Signav">
            <div style={{
              fontSize: "25px"
            }}><ArrowLeftOutlined /></div>
            <div style={{
              fontSize: "23px",
              fontWeight: "600w"
            }}>Register</div>
            <div
              className="logNav"

            >Log In</div>
          </div>
          <Link to="/short" style={{
            color: "black"
          }}>
            <div className="sklNav">
              As A School

          </div>
          </Link>

          <br />
          <Link style={{
            color: "black"
          }}>
            <div className="sklNav">
              As A Teacher

          </div>
          </Link>


        </div>
      </div>
    </div>
  )
}

export default Getstarted
