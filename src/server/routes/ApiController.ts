import { GET, route } from 'awilix-koa';
import Router from 'koa-router'

@route('/api')
class ApiController {
    private apiService

    constructor({ apiService }: { apiService: any }) {
        this.apiService = apiService
    }

    @route('/list')
    @GET()
    async actionList(ctx: Router.IRouterContext) {
        ctx.body.data = await this.apiService.getInfo()
    }
}

export default ApiController