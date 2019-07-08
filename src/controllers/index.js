import { BaseController } from "./BaseController";
import { data as CatsData } from "../demo-data/cats";
import { data as DogsData } from "../demo-data/dogs";

export class CatsController extends BaseController {
  getAll() {
    return CatsData;
  }
}

export class DogsController extends BaseController {
  getAll() {
    return DogsData;
  }
}
