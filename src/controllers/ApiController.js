import { fetchData } from "../utils";

const isFakeApi = process.env.VUE_APP_FAKE_API_SERVER === "true";

export class ApiController {
  constructor(petType) {
    if (typeof petType !== "string") {
      throw "invalid petType in ApiController";
    }

    let url = `${process.env.VUE_APP_API_URL}/${petType}`;
    this.fetch = fetchData(url);
  }

  async getAll() {
    let data = await this.fetch.GET();
    return data;
  }

  async addNew(item) {
    let data = await this.fetch.POST(item);
    // if using fake api calls, set id manually
    if (isFakeApi) data.id = (+new Date()).toString();
    return data;
  }

  async update(item) {
    let data = await this.fetch.PUT(item.id, item);
    return data;
  }
  async delete(item) {
    await this.fetch.DELETE(item.id);
  }
}
