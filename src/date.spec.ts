// import { expect } from 'chai'

describe("date", () => {
    it('test Date', () => {
        console.log(new Date());    // UTC 时间
        console.log(new Date().getTime());  // 本地时间戳

        let timestamp = 1611453600000;      // 2021-01-24 10:00:00 北京时间
        const date = new Date(timestamp);
        console.log(date);                  // 2021-01-24T02:00:00.000Z UTC时间
        console.log(date.getTime());        // 1611453600000
        console.log(date.getTime() - 1);    // 1611453599999 
        console.log(date.setSeconds(0, 0));  // 1611453600000

    });

    it('test roundDepartureTime', () => {
        function roundDepartureTime(departureTime: Date, timeInterval: number): Date {
            departureTime.setSeconds(0, 0);
            let departureTimestamp = departureTime.getTime() - 1;
            departureTimestamp += timeInterval * 60 * 1000;

            const intervalMillionSeconds = timeInterval * 60 * 1000;
            departureTimestamp = Math.round(departureTimestamp / intervalMillionSeconds - 0.5) * intervalMillionSeconds;
            return new Date(departureTimestamp);
        }

        // 2021-01-24 9:45:00
        const startStamp = new Date(1611452700000);
        console.log("startStamp:", startStamp);     // 2021-01-24T01:45:00.000Z
        console.log(startStamp.setSeconds(0, 0));    // 1611452700000
        let departureTimestamp = startStamp.getTime() - 1;
        departureTimestamp += 30 * 60 * 1000;
        console.log(departureTimestamp);    // 1611454499999 2021-01-24 10:14:59

        const intervalMillionSeconds = 30 * 60 * 1000;
        console.log(departureTimestamp / intervalMillionSeconds);   // 895252.4999994445
        const tmp = departureTimestamp / intervalMillionSeconds - 0.5;
        console.log(tmp);               // 895251.9999994445
        console.log(Math.round(tmp));   // 895252
        departureTimestamp = Math.round(tmp) * intervalMillionSeconds;
        console.log(departureTimestamp);    // 1611453600000

        const tmpTimeStamp = roundDepartureTime(startStamp, 30);
        console.log(tmpTimeStamp);
    });
});
