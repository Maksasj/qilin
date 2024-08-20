using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models;
using System.Diagnostics;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("Test")]
        public async Task<IActionResult> Test()
        {
            return Ok();
        }
    }
}
