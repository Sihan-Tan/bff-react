import { GET, route } from 'awilix-koa';

@route('/')
class IndexController {
  private apiService;

  constructor({ apiService }: { apiService: any }) {
    this.apiService = apiService;
  }

  @route('/')
  @GET()
  async actionList(ctx: any) {
    // const data = await this.indexService.getInfo();
    ctx.body = await ctx.render('index', await this.apiService.getData());
  }
}

export default IndexController;
