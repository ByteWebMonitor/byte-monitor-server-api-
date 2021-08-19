const deviceService = require('../services/deviceService');

/**
 * DeviceController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * Devices的增删改查
 */
class DeviceController {

  async statAll(ctx) {
    // const list = await todoService.listAll();
    // ctx.body = {list};
    ctx.body = {status: 'ok'}
  }
  
  async create(ctx) {
    let body = ctx.request.body
    body.time = new Date(body.time)

    await deviceService.create(body)
    ctx.body = {status: 'ok'}
  }

  async getRecentXMinNums(ctx) {
    let body = ctx.request.body
    let nums = await deviceService.getRecentXMinNums(body.xMin);
    ctx.body = { code: 20000, nums: nums }
  }
}

// 导出 Controller 的实例
module.exports = new DeviceController();
