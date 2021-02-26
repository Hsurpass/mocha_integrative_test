import { expect } from 'chai';
import JSONBig from "json-bigint"

const JSONbig = JSONBig();
const JSONbigUseNative = JSONBig({ 'useNativeBigInt': true });

describe("json-bigint", () => {
    it("test JSONbig JSONbigUseNative bigNum bigint", async () => {
        const str1 = '{ "bigNum": 993143214321423152323, "smallNum":123 }';
        const str2 = '{ "bigNum": 993143214321423152323, "smallNum":123 }';
        const str3 = '{ "bigNum": 993143214321423152324, "smallNum":123 }';
        const objArray = [];

        const obj1 = JSONbig.parse(str1);
        const obj2 = JSONbig.parse(str2);
        const obj3 = JSONbig.parse(str3);
        objArray.push(obj1);
        objArray.push(obj2);
        objArray.push(obj3);

        expect(typeof obj1.bigNum).eql("object");
        expect(typeof obj2.bigNum).eql("object");
        expect(typeof obj3.bigNum).eql("object");

        expect(obj1.bigNum == obj1.smallNum).false;
        expect(obj1.bigNum === obj1.smallNum).false;
        expect(obj1.bigNum == obj2.bigNum).false;
        expect(obj1.bigNum === obj2.bigNum).false;
        expect(obj1.bigNum.isEqualTo(obj2.bigNum)).true;
        expect(obj1.bigNum.isEqualTo(obj3.bigNum)).false;
        expect(obj1.bigNum.eq(obj2.bigNum)).true;
        expect(obj1.bigNum.eq(obj3.bigNum)).false;

        expect(objArray.findIndex(element => element.bigNum == obj1.bigNum)).eql(0);
        expect(objArray.findIndex(element => element.bigNum == obj2.bigNum)).eql(1);
        expect(objArray.findIndex(element => element.bigNum == obj3.bigNum)).eql(2);
        expect(objArray.findIndex(element => element.bigNum.eq(obj1.bigNum))).eql(0);
        expect(objArray.findIndex(element => element.bigNum.eq(obj2.bigNum))).eql(0);
        expect(objArray.findIndex(element => element.bigNum.eq(obj3.bigNum))).eql(2);

        obj1.bigNum = BigInt(obj1.bigNum);
        expect(JSONbig.stringify(obj1)).eql(JSONbig.stringify(obj2));
        expect(JSON.stringify(obj2)).eql('{"bigNum":"993143214321423152323","smallNum":123}');
        obj2.bigNum = BigInt(obj2.bigNum);
        obj3.bigNum = BigInt(obj3.bigNum);
        expect(obj1.bigNum == obj2.bigNum).true;
        expect(obj1.bigNum == obj3.bigNum).false;
        expect(objArray.findIndex(element => element.bigNum == obj1.bigNum)).eql(0);
        expect(objArray.findIndex(element => element.bigNum == obj2.bigNum)).eql(0);
        expect(objArray.findIndex(element => element.bigNum == obj3.bigNum)).eql(2);

        /******************************************************************************/
        const nativeObj1 = JSONbigUseNative.parse(str1);
        const nativeObj2 = JSONbigUseNative.parse(str2);
        const nativeObj3 = JSONbigUseNative.parse(str3);
        expect(typeof nativeObj1.bigNum).eql("bigint");
        expect(typeof nativeObj2.bigNum).eql("bigint");
        expect(typeof nativeObj3.bigNum).eql("bigint");
        expect(nativeObj1.bigNum == nativeObj1.smallNum).false;
        expect(nativeObj1.bigNum === nativeObj1.smallNum).false;
        expect(nativeObj1.bigNum == nativeObj2.bigNum).true;
        expect(nativeObj1.bigNum === nativeObj2.bigNum).true;
        expect(nativeObj1.bigNum == nativeObj3.bigNum).false;
        expect(nativeObj1.bigNum === nativeObj3.bigNum).false;
        expect(nativeObj1.bigNum).eql(nativeObj2.bigNum);
        expect(nativeObj1.bigNum).not.eql(nativeObj3.bigNum);
        const nativeArray = [];
        nativeArray.push(nativeObj1);
        nativeArray.push(nativeObj2);
        nativeArray.push(nativeObj3);
        expect(nativeArray.findIndex(element => element.bigNum == nativeObj1.bigNum)).eql(0);
        expect(nativeArray.findIndex(element => element.bigNum == nativeObj2.bigNum)).eql(0);
        expect(nativeArray.findIndex(element => element.bigNum == nativeObj3.bigNum)).eql(2);
        expect(nativeArray.findIndex(element => element.bigNum === nativeObj1.bigNum)).eql(0);
        expect(nativeArray.findIndex(element => element.bigNum === nativeObj2.bigNum)).eql(0);
        expect(nativeArray.findIndex(element => element.bigNum === nativeObj3.bigNum)).eql(2);
    });

});