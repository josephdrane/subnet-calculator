import React from 'react';
import '../App.css';

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; JosephDrane.com 2020</p>
          <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <a className="btn btn-light" href="https://github.com/josephdrane/subnet-calculator">Source Code</a>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <a className="btn btn-light" href="https://linkedin.com/in/josephdrane">Creator</a>
            </div>
            </div>
        </div>
        {/* <!-- /.container --> */}
      </footer>
    </div>
  );
}
