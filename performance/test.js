import { check } from "k6";
import http from "k6/http";

export default function() {
  let res = http.get("https://restful-booker.herokuapp.com/booking");
  check(res, {
    "status is 200": (r) => r.status === 200
  });
};