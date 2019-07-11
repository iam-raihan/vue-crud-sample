export class BaseController {
  addNew(data) {
    data.id = data.id === "0" ? (+new Date()).toString() : data.id;
    return data;
  }
  update(data) {
    return data;
  }
  delete(data) {
    return data;
  }
}
