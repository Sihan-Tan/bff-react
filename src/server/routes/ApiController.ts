import { GET, route } from 'awilix-koa';
import Router from 'koa-router';

@route('/api')
class ApiController {
  private apiService;

  constructor({ apiService }: { apiService: any }) {
    this.apiService = apiService;
  }

  @route('/list')
  @GET()
  async actionList(ctx: Router.IRouterContext) {
    const data = await this.apiService.getInfo();
    ctx.body = data;
  }

  @route('/data')
  @GET()
  async dataList(ctx: Router.IRouterContext) {
    const data = await this.apiService.getData();
    ctx.body = data;
  }
}

export default ApiController;
