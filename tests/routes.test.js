const request = require('supertest')
const app = require('../index')
const baseURL = "http://localhost:3001"

const country = {
    name: ["Singapore","SINGAPORE","singapore", "INDIA", "India", "india", "IRELAND", "Ireland", "ireland", "UNITED STATES", "United States", "united states"]
}

var len = country.name.length;


    describe('GET /api/country/:country', () => {
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[0]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[1]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[2]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[3]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[4]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[5]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[6]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[7]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[8]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[9]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[10]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
        it('should retrieve country details', async () => {
            const res = await request(baseURL).get(`/api/country/${country.name[11]}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).not.toBe(undefined || null);
        });
    });