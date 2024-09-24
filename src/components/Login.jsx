import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <header className=" min-h-16">
          <img src="/images/login-logo.svg" className="h-8" />
          <div className="menus">
            <div className="menu">
              <img src="/images/nav-home.svg" alt="" />
              <p>Home</p>
            </div>

            <div className="menu">
              <img src="/images/nav-network.svg" alt="" />
              <p>People</p>
            </div>
            <div className="menu">
              <img src="/images/nav-work.svg" alt="" />
              <p>Learning</p>
            </div>

            <div className="menu">
              <img src="/images/nav-jobs.svg" alt="" />
              <p>Jobs</p>
            </div>

            <div className="menu">
              <img src="/images/nav-messaging.svg" alt="" />
              <p>Messaging</p>
            </div>

            <div className="menu">
              <img src="/images/nav-notifications.svg" alt="" />
              <p>Notification</p>
            </div>
          </div>

          <div className="nav-actions">
            <Link className="action-link">Join now</Link>
            <Link className="action-link border-link">Sign in</Link>
          </div>
        </header>
      </div>
      <div className="grid-area">
        <div className="content-area">
          <h2>Welcome to your professional community</h2>
          <button>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </button>
        </div>
        <img src="/images/login-hero.svg" />
      </div>
      <div className="section">
        <div className="collaborate">
          <h2>Explore collaborative articles</h2>
          <p>
            We’re unlocking community knowledge in a new way. Experts add
            insights directly into each article, started with the help of AI.
          </p>
        </div>
        <div className="clouds-a">
          <a className="clouds">Marketing</a>
          <a className="clouds">Public Administration</a>
          <a className="clouds">Healthcare</a>
          <a className="clouds">Engineering</a>
          <a className="clouds">IT Services</a>
          <a className="clouds">Sustainability</a>
          <a className="clouds">Business Administration</a>
          <a className="clouds">Telecommunications</a>
        </div>
      </div>
    </>
  );
}

export default Login;
