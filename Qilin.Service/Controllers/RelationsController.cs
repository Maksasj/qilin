using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models.Response;
using Qilin.Service.Services;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class RelationsController : ControllerBase
    {
        private readonly IQilinService _qilinService;
        private readonly ILogger<RelationsController> _logger;

        public RelationsController(ILogger<RelationsController> logger, IQilinService qilinService)
        {
            _logger = logger;
            _qilinService = qilinService;
        }

        [HttpGet]
        [Route("GetTagRelations")]
        public async Task<TagRelationsResponseModel> GetTagRelations()
        {
            var relations = _qilinService.GetTagRelations();

            return new TagRelationsResponseModel
            {
                Relations = relations.ToArray()
            };
        }
    }
}
