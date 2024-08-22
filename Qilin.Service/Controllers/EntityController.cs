using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using System.Diagnostics;
using Qilin.Service.Services;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class EntityController : ControllerBase
    {
        private readonly IQilinService _qilinService;        
        private readonly ILogger<EntityController> _logger;

        public EntityController(ILogger<EntityController> logger, IQilinService qilinService)
        {
            _logger = logger;
            _qilinService = qilinService;
        }

        [HttpGet]
        [Route("GetEntities")]
        public async Task<Entity[]> GetEntities()
        {
            return await _qilinService.GetEntitiesAsync();
        }

        [HttpPost]
        [Route("CreateEntity")]
        public async Task<IActionResult> CreateEntity()
        {
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
