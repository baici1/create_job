import request from "@/utils/request";
//import axios from "axios";
export function getdata() {
  return request({
    url: "/match",
    method: "get",
  });
}

export function com_time() {
  return request({
    url: "/date",
    method: "get",
  });
}

export function team() {
  return request({
    url: "/team",
    method: "get",
  });
}

export function detail(data) {
  return request({
    url: "/detail",
    method: "POST",
    data: data,
  });
}

export function stu() {
  return request({
    url: "/stu",
    method: "get",
  });
}
export function matchdata() {
  return request({
    url: "/match_team",
    method: "get",
  });
}
