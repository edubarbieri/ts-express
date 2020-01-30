import req from "supertest";
import app from "../../src/app";

test("[GET] /health", async () => {
	const res = await req(app).get("/health");
	expect(res.text).toBe("OK");
});