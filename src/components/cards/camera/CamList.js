import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";

import CameraItems from "./CamItem";
import DataService from "../../../service/data.service";

const CameraList = ({match}) => {
    const [datas, setDatas] = useState()

    useEffect(() => {
        DataService.getAllCams().then((response) => {
            setDatas(response.data);
        });
    }, [])

    return(
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h4 className="mb-0 text-gray-800">Monitor</h4>
                <Link to={`${match.url}/cam/add`}>
                    <button className="btn btn-outline-secondary">Add Camera</button>
                </Link>
            </div>
            <div className="row">
            {datas && datas.map((data, index) => (
                <CameraItems key={index}
                name={data.name}
                to={`${match.url}/${data.name}`}
                codec={data.codec}
                rtsp={data.rtsp} />
            ))}
            </div>
        </div>
    );
};

export default CameraList;