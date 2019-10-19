// Users Modal.

import UsersInnerModel from './UsersInnerModel';

interface UsersModel {
  current_page?: number;
  data?: Array<UsersInnerModel>;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: null;
  path?: string;
  per_page?: number;
  prev_page_url?: null;
  to?: number;
  total?: number;
}

export default UsersModel;
