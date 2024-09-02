using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Common;
using Qilin.Service.Common.Swagger;
using Qilin.Service.Services;
using Qilin.Service.Models.Response;
using Swashbuckle.AspNetCore.Annotations;
using static System.Runtime.InteropServices.JavaScript.JSType;

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
        public async Task<TagsPageResponseModel> GetTags(int pageIndex = 0, int itemsPerPage = 100)
        {
            var tags = _qilinService.GetTags()
                .Skip(pageIndex * itemsPerPage)
                .Take(itemsPerPage)
                .ToArray();
            
            return new TagsPageResponseModel
            {
                PageIndex = pageIndex,
                ItemCount = tags.Length,
                Tags = tags,
            };
        }

        [HttpGet]
        [Route("GetTag")]
        public async Task<IActionResult> GetTag(Guid tagId)
        {
            var tag = await _qilinService.GetTagAsync(tagId);
            if (tag == null)
            {
                return BadRequest($@"Tag with id {tagId}, does not exist");
            }

            var style = await _qilinService.GetTagStyleAsync(tag);
            if (style == null)
            {
                return BadRequest($@"Failed to get style for {tagId}");
            }

            return Ok(new TagResponseModel
            {
                Value = tag,
                Style = style,
                ParentTagIds = Array.Empty<Guid>()
            });
        }

        [HttpPost]
        [Route("CreateTag")]
        [SwaggerOperation(OperationId = "CreateTag", Summary = "Create a tag", Description = "Creates a new tag")]
        [SwaggerResponse(StatusCodes.Status200OK, "Successfully created a new tag")]
        public async Task<IActionResult> CreateTag(
            [SwaggerParameter(Description = "New tag master title", Required = true)]
            [SwaggerParameterExample(Example = "One piece")]
            [FromForm]
            string tagTitle,
            [SwaggerParameter(Description = "New tag description", Required = false)]
            [SwaggerParameterExample(Example = "My most loved anime")]
            [FromForm]
            string? tagDescription
            )
        {
            if (string.IsNullOrWhiteSpace(tagTitle))
            {
                return BadRequest();
            }

            var error = await _qilinService.CreateTag(tagTitle, tagDescription);
            
            if (error)
            {
                return BadRequest("Could not create tag");
            }

            return Ok();
        }

        [HttpPatch]
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

            throw new NotImplementedException();

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
