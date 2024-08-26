using Microsoft.AspNetCore.Mvc;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class UtilsController : Controller
    {
        [HttpGet]
        [Route("Ping")]
        public async Task<IActionResult> Ping()
        {
            return Ok();
        }

        [HttpGet]
        [Route("Health")]
        public async Task<IActionResult> Health()
        {
            throw new NotImplementedException();

            return Ok();
        }
    }
}
