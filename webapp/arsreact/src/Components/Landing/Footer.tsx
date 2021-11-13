import React from "react";

export const Footer: React.FC<any> = () => {
    return (
        <div>
            <footer className="my-5 text-center text-small">
                <p className="mb-1">&copy; 2017–2021 Company Name</p>
                <ul className="list-inline rounded-3  ">
                    <li className="list-inline-item"><a href="#">Privacy</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Support</a></li>
                </ul>
            </footer>
        </div>
    )
}