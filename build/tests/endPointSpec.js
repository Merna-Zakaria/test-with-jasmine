"use strict";
// Benefits of Endpoint Testing
// Confirms that the server is working.
// Confirms that endpoints are configured properly.
// More efficient than manual testing.
// Adding a Framework for Endpoint Testing
// Endpoint testing is not native to Jasmine and requires a third-party framework, like Supertest to test the status of responses from servers.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../app"));
var request = (0, supertest_1.default)(app_1.default);
// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async (done) => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//         done();
//     }
// )});
describe('GET /api', function () {
    beforeEach(function () {
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });
    it('gets the api endpoint', function (done) {
        request
            .get('/api')
            .expect(200, function (res) {
            console.log(res);
            //res is actually an error because supertest called done(error)!
            //   done.fail() //Now jasmine will actually fail
        });
        // .end(function(err, res) {
        //     if (err) {
        //       done.fail(err);
        //     } else {
        //        done();
        //     }
        //   });
    });
});
