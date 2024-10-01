using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using Qilin.Service.Models.Response;
using Qilin.Service.Services;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class RelationsController
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
        public async Task<IActionResult> GetTagRelations()
        {
            var relations = _qilinService.GetTagRelations();

            return new OkObjectResult(new TagRelationsResponseModel
            {
                Relations = relations.ToArray()
            });
        }

        [HttpPost]
        [Route("TagTag")]
        public async Task<IActionResult> TagTag(Guid targetTagId, Guid toBeAppliedTagId)
        {
            var relations = await _qilinService.TagTagAsync(targetTagId, toBeAppliedTagId);

            if (relations == null)
            {
                return new BadRequestObjectResult(@"Failed to tag {targetTagId} with {toBeAppliedTagId} tag");
            }

            return new OkResult();
        }
    }
}
