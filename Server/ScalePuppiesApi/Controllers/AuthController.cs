using Microsoft.AspNetCore.Mvc;
using ScalePuppiesApi.DataLayer;
using ScalePuppiesApi.DataTransferObjects;
using ScalePuppiesApi.Models;

namespace ScalePuppiesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataBaseConnection context;

        public AuthController(DataBaseConnection _context)
        {
            context = _context;
        }

        [HttpGet]
        [Route("login")]
        public async Task<JsonResult> Login([FromQuery] string FarmUsername, [FromQuery] string Username, [FromQuery] string password)
        {

            return context.loginValidation(FarmUsername, Username, password);
        }


        [HttpPost]
        [Route("CreateFarm")]
        public async Task<JsonResult> CreateFarm([FromBody] FarmCreationDTO data)
        {
            return context.CreateFarm(data.FarmUserName, data.FarmName, data.Username, data.Password);
        }

        [HttpPost]
        [Route("{FarmID}/createNewUser")]
        public async Task<JsonResult> CreateNewUser([FromRoute] int FarmID, [FromBody] UserCreationDTO data)
        {
            return context.CreateNewUser(data.UserName, data.UserPassword, data.isSuperUser, FarmID);
        }

        [HttpGet]
        [Route("{FarmID}/GetUserList")]
        public async Task<JsonResult> GetUserList([FromRoute] int FarmID)
        {
            return context.GetUserList(FarmID);
        }

        [HttpGet]
        [Route("{FarmID}/DeleteUser")]
        public async Task<JsonResult> DeleteUser([FromQuery] int User)
        {
            return context.deleteUser(User);
        }

    }
}
