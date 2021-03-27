"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const https_1 = __importDefault(require("https"));
const getStackName = () => {
    const stackName = process.env['AWS_SAM_STACK_NAME'];
    if (!stackName) {
        throw new Error('Cannot find env var AWS_SAM_STACK_NAME.\n' +
            'Please setup this environment variable with the stack name where we are running integration tests.');
    }
    return stackName;
};
describe('Test API Gateway', function () {
    let apiEndpoint;
    before(async () => {
        const stackName = getStackName();
        const client = new aws_sdk_1.default.CloudFormation();
        let response;
        try {
            response = await client
                .describeStacks({
                StackName: stackName,
            })
                .promise();
        }
        catch (e) {
            throw new Error(`Cannot find stack ${stackName}: ${e.message}\n` + `Please make sure stack with the name "${stackName}" exists.`);
        }
        const stacks = response.Stacks;
        const stackOutputs = stacks[0].Outputs;
        const apiOutput = stackOutputs.find((output) => output.OutputKey === 'HelloWorldApi');
        expect(apiOutput, `Cannot find output HelloWorldApi in stack ${stackName}`).not.to.be.undefined;
        apiEndpoint = apiOutput.OutputValue;
    });
    it('verifies successful response from api gateway', (done) => {
        console.info('api endpoint:', apiEndpoint);
        https_1.default
            .get(apiEndpoint, (res) => {
            expect(res.statusCode).to.be.equal(200);
            res.on('data', (data) => {
                const response = JSON.parse(data);
                expect(response).to.be.an('object');
                expect(response.message).to.be.equal('hello world');
                done();
            });
        })
            .on('error', (e) => {
            throw e;
        });
    });
});
//# sourceMappingURL=test-api-gateway.js.map