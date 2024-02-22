import instance from "~/lib/apis/base";

export async function fetchCampaignList() {
  const response = await instance.get("/campaign");
  console.log(response);
  return response;
}
