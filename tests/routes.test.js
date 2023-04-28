const request = require('supertest')
const app = require('../index')
const baseURL = "http://localhost:3001"

const country = {
    name: ["Singapore","SINGAPORE","singapore", "INDIA", "India", "india", "IRELAND", "Ireland", "ireland", "UNITED STATES", "United States", "united states"]
}

var len = country.name.length;


for(var i = 0; i < len; i++) {
    describe('GET /api/country/:country', () => {
    it('should retrieve country details', async () => {
        const res = await request(baseURL).get(`/api/country/${country.name[i]}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).not.toBe(undefined || null);
    });
    });
}