using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Commander.Controllers
{
     // api/commands
    [Route("api/[controller]")]
    [ApiController]
       public class PingController : ControllerBase
    {
           // GET api/commands
        [HttpGet]
        public ActionResult PingService()
        {     
            return Ok("Ping, I'm alive :)");
        }
    }
}