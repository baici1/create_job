import request from "@/utils/request";
//import axios from "axios";
export function getdata() {
  return request({
    url: "/match",
    methods: "get",
  });
}

export function com_time() {
  return request({
    url: "/date",
    methods: "get",
  });
}

export function team() {
  return request({
    url: "/team",
    methods: "get",
  });
}
