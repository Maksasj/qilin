using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using System.Diagnostics;
using Qilin.Service.Services;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly IQilinService _qilinService;        
        private readonly ILogger<TagController> _logger;

        public TagController(ILogger<TagController> logger, IQilinService qilinService)
        {
            _logger = logger;
            _qilinService = qilinService;
        }

        [HttpGet]
        [Route("GetTags")]
        public async Task<Tag[]> GetTags()
        {
            return await _qilinService.GetTagsAsync();
        }

        [HttpPost]
        [Route("CreateTag")]
        public async Task<IActionResult> CreateTag(string tagTitle, string? tagDescription)
        {
            if (string.IsNullOrWhiteSpace(tagTitle))
            {
                return BadRequest();
            }

            var successful = await _qilinService.CreateTag(tagTitle, tagDescription);
            
            if (!successful)
            {
                return BadRequest("Could not delete tag");
            }

            return Ok();
        }

        [HttpDelete]
        [Route("DeleteTag")]
        public async Task<IActionResult> DeleteTag(Guid tagId)
        {
            if (tagId == Guid.Empty)
            {
                return BadRequest();
            }

            var successful = await _qilinService.DeleteTag(tagId);

            if (!successful)
            {
                return BadRequest("Could not delete tag");
            }

            return Ok();
        }
    }
}
