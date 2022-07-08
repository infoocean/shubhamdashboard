import React from 'react';

function Footertemplate() {
    return ( 
        <>
        {/*.content-wrapper --*/}
        <footer className="main-footer">
            <strong>Converted By &copy; @2022 <a href="#">Shubham</a>.</strong>All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 0.0.0
            </div>
        </footer>
        { /*-- Control Sidebar --*/}
        <aside className="control-sidebar control-sidebar-dark">
            {/*-- Control sidebar content goes here --*/}
        </aside>
        {/*-- /.control-sidebar --*/}
        </>
    );
}

export default Footertemplate;