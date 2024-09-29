using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Common;
using Qilin.Service.Common.Swagger;
using Qilin.Service.Services;
using Qilin.Service.Models.Response;
using Swashbuckle.AspNetCore.Annotations;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class TagController
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
        public async Task<IActionResult> GetTags(int pageIndex = 0, int itemsPerPage = 100)
        {
            var tags = _qilinService.GetTags()
                .Skip(pageIndex * itemsPerPage)
                .Take(itemsPerPage)
                .Select(tag => new TagResponseModel
                {
                    Value = tag,
                    ParentTagIds = Array.Empty<Guid>()
                }).ToArray();

            foreach (var tag in tags)
                tag.Style = await _qilinService.GetTagStyleAsync(tag.Value);

            return new OkObjectResult(new TagsPageResponseModel
            {
                PageIndex = pageIndex,
                ItemCount = tags.Length,
                Tags = tags,
            });
        }

        [HttpGet]
        [Route("GetTag")]
        public async Task<IActionResult> GetTag(Guid tagId)
        {
            var tag = await _qilinService.GetTagAsync(tagId);
            if (tag == null)
            {
                return new BadRequestObjectResult($@"Tag with id {tagId}, does not exist");
            }

            var style = await _qilinService.GetTagStyleAsync(tag);
            if (style == null)
            {
                return new BadRequestObjectResult($@"Failed to get style for {tagId}");
            }

            return new OkObjectResult(new TagResponseModel
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
                return new BadRequestObjectResult("Tag title could not be empty");
            }

            var error = await _qilinService.CreateTag(tagTitle, tagDescription);
            
            if (error)
            {
                return new BadRequestObjectResult("Could not create tag");
            }

            return new OkResult();
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

            return new OkResult();
        }

        [HttpDelete]
        [Route("DeleteTag")]
        public async Task<IActionResult> DeleteTag(Guid tagId)
        {
            if (tagId == Guid.Empty)
            {
                return new BadRequestResult();
            }

            var successful = await _qilinService.DeleteTag(tagId);

            if (!successful)
            {
                return new BadRequestObjectResult("Could not delete tag");
            }

            return new OkResult();
        }
    }
}
