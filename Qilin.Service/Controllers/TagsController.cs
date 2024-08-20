using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using System.Diagnostics;
using Qilin.Service.Services;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class TagsController : ControllerBase
    {
        private readonly ITagService _tagService;        
        private readonly ILogger<TagsController> _logger;

        public TagsController(ILogger<TagsController> logger, ITagService tagService)
        {
            _logger = logger;
            _tagService = tagService;
        }

        [HttpGet]
        [Route("GetTags")]
        public async Task<Tag[]> GetTags()
        {
            return await _tagService.GetTagsAsync();
        }

        [HttpPost]
        [Route("CreateTag")]
        public async Task<IActionResult> CreateTag(string tagTitle, string? tagDescription)
        {
            return await _tagService.CreateTag(tagTitle, tagDescription);
        }

    }
}
