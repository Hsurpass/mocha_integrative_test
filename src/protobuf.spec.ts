import { load } from "protobufjs"

var pb = require("./testChinese_pb.js")

describe("protobuf", () => {

    it("basic", () => {
        var chi = new pb.chinese();
        chi.setOld(10);
        chi.setName("xiaoming");

        // chi.setCompany("谷歌");
        chi.setNumber(100);
        console.log(chi.getOld());
        console.log(chi.getName());
        console.log(chi.getCompany());
        // console.log(chi.getCompany_asU64());
        console.log(chi.getNumber());
        const bytes = chi.serializeBinary();

        const result = pb.chinese.deserializeBinary(bytes);
        console.log(result.getOld());
        console.log(result.getName());
        console.log(result.getCompany());
        console.log(result.getNumber());
    });
})