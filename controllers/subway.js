const { response, request } = require('express');

const subwayStatus = (req = request, res = response) => {

    const { station, status } = req.query;

    res.json({
        station,
        status
    });
}

const subwayArriveTime = (req = request, res = response) => {

    const { station, arriveTime } = req.query;

    res.json({
        station,
        arriveTime
    });
}


module.exports = {
    subwayStatus,
    subwayArriveTime,
}