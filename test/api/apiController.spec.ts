/**
 * @jest-environment node
 */
const axios = require("axios");
describe("node接口", () => {
  test("test接口测试", () => {
    return axios
      .get("http://localhost:3000/api/list")
      .then((res: { data: string }) => {
        expect(res.data).toBe("我以我血荐轩辕");
      });
  });
});
