import axios from 'axios';

import { baseURL } from '../configs/urlConfig';

export const instance = axios.create({ baseURL });
