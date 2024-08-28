using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using System.Diagnostics;
using Qilin.Service.Models.Response;
using Qilin.Service.Services;
using Qilin.Service.Services.Hoo;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class EntityController : ControllerBase
    {
        private readonly IQilinService _qilinService;
        private readonly IHooService _hooService;
        private readonly ILogger<EntityController> _logger;

        public EntityController(ILogger<EntityController> logger, IQilinService qilinService, IHooService hooService)
        {
            _logger = logger;
            _qilinService = qilinService;
            _hooService = hooService;
        }

        [HttpGet]
        [Route("GetEntities")]
        public async Task<EntitiesPageResponseModel> GetEntities(int pageIndex = 0, int itemsPerPage = 100)
        {
            var entities = (await _qilinService.GetEntitiesAsync())
                .Skip(pageIndex * itemsPerPage)
                .Take(itemsPerPage)
                .ToArray();

            return new EntitiesPageResponseModel
            {
                PageIndex = pageIndex,
                ItemCount = entities.Length,
                Entities = entities,
            };
        }

        [HttpGet]
        [Route("GetEntitiesCount")]
        public async Task<long> GetEntitiesCount()
        {
            return (await _qilinService.GetEntitiesAsync()).LongCount();
        }

        [HttpPost]
        [Route("CreateEntity")]
        public async Task<IActionResult> CreateEntity()
        {
            // throw new NotImplementedException();

            /*
            if (string.IsNullOrWhiteSpace(tagTitle))
            {
                return BadRequest();
            }

            var successful = await _tagService.CreateTag(tagTitle, tagDescription);
            
            if (!successful)
            {
                return BadRequest("Could not delete tag");
            }
            */

            return Ok();
        }

        [HttpDelete]
        [Route("DeleteEntity")]
        public async Task<IActionResult> DeleteEntity(Guid entityId)
        {
            throw new NotImplementedException();

            /*
            if (tagId == Guid.Empty)
            {
                return BadRequest();
            }

            var successful = await _tagService.DeleteTag(tagId);

            if (!successful)
            {
                return BadRequest("Could not delete tag");
            }
            */

            return Ok();
        }
    }
}
