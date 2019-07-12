import { fetchData } from "../utils";

const isFakeApi = process.env.VUE_APP_FAKE_API_SERVER === "true";

export class ApiController {
  constructor(petType) {
    if (typeof petType !== "string") {
      throw "invalid petType in ApiController";
    }

    this.apiUrl = `${process.env.VUE_APP_API_URL}/${petType}`;
  }

  async getAll() {
    let data = await fetchData(this.apiUrl);
    return data;
  }

  async addNew(item) {
    let data = await fetchData(this.apiUrl, item, "POST");
    // if using fake api calls, set id manually
    if (isFakeApi) data.id = (+new Date()).toString();
    return data;
  }

  async update(item) {
    let data = await fetchData(this.apiUrl + "/" + item.id, item, "PUT");
    return data;
  }
  async delete(item) {
    await fetchData(this.apiUrl + "/" + item.id, item, "DELETE");
  }
}
