using Microsoft.AspNetCore.Mvc;

namespace Qilin.Service.Controllers
{
    [ApiController]
    public class UtilsController
    {
        [HttpGet]
        [Route("Ping")]
        public async Task<IActionResult> Ping()
        {
            return new OkResult();
        }

        [HttpGet]
        [Route("Health")]
        public async Task<IActionResult> Health()
        {
            throw new NotImplementedException();

            return new OkResult();
        }
    }
}
