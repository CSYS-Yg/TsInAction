/*
 * @Author: Yx_Zou 
 * @Description: '28 | 配置tsconfig.json（3）：工程引用 - client 端引用' 
 * @Date: 2019-08-15 00:51:51 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-15 00:52:23
 */

import { getTime } from '../common';
console.log(`Server Time:${getTime()}`);

class Server {}
export = Server;
