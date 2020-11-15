using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Commander.Controllers
{
     // api/ping
    [Route("api/[controller]")]
    [ApiController]
       public class PingController : ControllerBase
    {
           // GET api/ping
        [HttpGet]
        public ActionResult PingService()
        {     
            return Ok("Ping, I'm alive :D");
        }
    }
}