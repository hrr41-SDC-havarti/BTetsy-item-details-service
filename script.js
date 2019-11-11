import http from "k6/http";
import { check } from "k6";

export let options = {
  duration: '2m',
  vus: 100,
  rps: 1000
}

export default function() {
   var random = Math.floor(Math.random()*10000000);
   var res = http.get(`http://localhost:3000/api/description/${random}`);
   check(res, {
    "is status 200": (r) => r.status === 200
  });
};