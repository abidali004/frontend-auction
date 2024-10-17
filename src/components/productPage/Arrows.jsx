import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";






function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="absolute right-0 bottom-[-20%]">
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    color: "black",
                    fontSize: "20px",
                    lineHeight: "1",
                    cursor: "pointer",
                    position: 'relative',
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 1,



                }}
                onClick={onClick}

            >
                <div className="absolute ">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>

            </div >
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="absolute left-0 top-[50%]">
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    border: "1px solid black",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    color: "black",
                    fontSize: "20px",
                    lineHeight: "1",
                    cursor: "pointer",
                    position: 'relative',
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 1,


                }}
                onClick={onClick}
            >

                <div className="absolute ">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            </div>
        </div>
    );
}

export { NextArrow, PrevArrow };
