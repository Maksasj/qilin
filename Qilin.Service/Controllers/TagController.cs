using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using System.Diagnostics;
using Microsoft.VisualBasic;
using Qilin.Service.Common;
using Qilin.Service.Services;
using Swashbuckle.AspNetCore.Annotations;

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
        [SwaggerOperation(OperationId = "CreateTag", Summary = "Create a tag", Description = "Creates a new tag")]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully created a new tag")]
        public async Task<IActionResult> CreateTag(
            [SwaggerParameter(Description = "New tag master title", Required = true)]
            [SwaggerParameterExample(Example = "One piece")]
            string tagTitle,
            [SwaggerParameter(Description = "New tag description", Required = false)]
            [SwaggerParameterExample(Example = "My most loved anime")]
            string? tagDescription
            )
        {
            if (string.IsNullOrWhiteSpace(tagTitle))
            {
                return BadRequest();
            }

            var successful = await _qilinService.CreateTag(tagTitle, tagDescription);
            
            if (!successful)
            {
                return BadRequest("Could not create tag");
            }

            return Ok();
        }

        [HttpDelete]
        [Route("UpdateTag")]
        public async Task<IActionResult> UpdateTag(
            Guid tagId, 
            string tagTitle, 
            string tagDescription
            )
        {
            /*
            if (string.IsNullOrWhiteSpace(tagTitle))
            {
                return BadRequest();
            }

            var successful = await _qilinService.CreateTag(tagTitle, tagDescription);

            if (!successful)
            {
                return BadRequest("Could not delete tag");
            }
            */

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
