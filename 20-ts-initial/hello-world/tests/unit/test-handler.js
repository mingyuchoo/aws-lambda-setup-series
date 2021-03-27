"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../src/app"));
const chai_1 = __importDefault(require("chai"));
const expect = chai_1.default.expect;
let event, context;
describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app_1.default.lambdaHandler(event, context);
        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');
        const response = JSON.parse(result.body);
        expect(response).to.be.an('object');
        expect(response.message).to.be.equal('hello world');
    });
});
//# sourceMappingURL=test-handler.js.map