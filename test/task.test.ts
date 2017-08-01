import * as supertest from "supertest";
import { default as app } from "../src/server";
const request = supertest("localhost:3000");

describe("GET /task/read", () => {
  it("should return 200 OK", (done) => {
    request.get("/task/read")
      .expect(200, done);
  });
});

describe("POST /task/add", () => {
  it("should return 200 OK", (done) => {
    request.post("/task/add")
      .expect(200, done);
  });
});

describe("PUT /task/update", () => {
  it("should return 200 OK", (done) => {
    request.put("/task/update")
      .expect(200, done);
  });
});

describe("DELETE /task/remove", () => {
  it("should return 200 OK", (done) => {
    request.del("/task/remove")
      .expect(200, done);
  });
});
