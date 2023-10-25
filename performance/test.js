import { check } from "k6";
import http from "k6/http";

export default function() {
  let res = http.get("https://test.k6.io");
  check(res, {
    "status is 200": (r) => r.status === 200
  });
};