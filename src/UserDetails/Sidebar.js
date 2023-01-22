import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"></img>
            <p>Vinayak</p>
            <h4>vinayakkommisetti@gmail.com</h4>
            <hr />
            <div className="sidebar_views">
                <div className="count">
                    <p>Who Viewed you </p> <p>2300</p></div>
                <div className="count1">
                    <p>Views on post</p> <p>2570</p></div>
            </div>
            <div className="Recent">
                <a href="https://reactjs.org/"></a>
            </div>
        </div>

    );
};
export default Sidebar;