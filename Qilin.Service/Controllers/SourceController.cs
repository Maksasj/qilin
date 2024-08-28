using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Services.Hoo;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class SourceController : ControllerBase
    {
        private readonly IHooService _hooService;
        private readonly ILogger<SourceController> _logger;

        public SourceController(ILogger<SourceController> logger, IHooService hooService)
        {
            _hooService = hooService;
            _logger = logger;
        }

        [HttpPatch]
        [Route("SyncSources")]
        public async Task<IActionResult> SyncSources()
        {
            await _hooService.SyncAsync();

            return Ok();
        }

        [HttpDelete]
        [Route("ClearCache")]
        public async Task<IActionResult> ClearCache()
        {
            await _hooService.ClearCacheAsync();

            return Ok();
        }
    }
}
