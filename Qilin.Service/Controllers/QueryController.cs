using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Qilin.Service.Data;
using Qilin.Service.Models;
using Qilin.Service.Models.Response;
using Qilin.Service.Services;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class QueryController
    {
        private readonly IQilinService _qilinService;

        public QueryController(IQilinService qilinService)
        {
            _qilinService = qilinService;
        }

        [HttpGet]
        [Route("SearchTag")]
        public async Task<IActionResult> SearchTag(string searchTitle, int maxCount = 100)
        {
            var lowerCase = searchTitle.ToLower();

            // Get tags
            var tags = _qilinService
                .SearchTags(lowerCase)
                .Take(maxCount)
                .Select(tag => new TagResponseModel
                {
                    Value = tag,
                    ParentTagIds = Array.Empty<Guid>()
                }).ToArray();

            // Get styles
            foreach (var tag in tags)
                tag.Style = await _qilinService.GetTagStyleAsync(tag.Value);

            return new OkObjectResult(new TagsPageResponseModel
            {
                PageIndex = 0,
                ItemCount = tags.Length,
                Tags = tags,
            });
        }
    }
}
