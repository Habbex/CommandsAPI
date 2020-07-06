using System.Collections.Generic;
using AutoMapper;
using Commander.Data;
using Commander.Dtos;
using Commander.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Commander.Controllers
{
    // api/commands
    [Route("api/[controller]")]
    [ApiController]
    public class CommandsController : ControllerBase
    {
        private readonly ICommanderRepo _repository;
        private IMapper _mapper;

        public CommandsController(ICommanderRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        // GET api/commands
        [HttpGet]
        public ActionResult<IEnumerable<CommandReadDto>> GetAllCommands()
        {
            var commandItems = _repository.GetAllCommands();

            return Ok(_mapper.Map<IEnumerable<CommandReadDto>>(commandItems));
        }

        // GET api/commands/{platform}
        [HttpGet("{platform}")]
        public ActionResult<IEnumerable<CommandReadDto>> GetAllCommandsByPlatform(string platform)
        {
            var commandItems = _repository.GetAllCommandsByPlatform(platform);

            return Ok(_mapper.Map<IEnumerable<CommandReadDto>>(commandItems));
        }

        // GET api/commands/{id}    
        [HttpGet("{id:int}", Name = "GetCommandById")]
        public ActionResult<CommandReadDto> GetCommandById(int id)
        {
            var commandItem = _repository.GetCommandById(id);

            if (commandItem != null)
            {
                return Ok(_mapper.Map<CommandReadDto>(commandItem));
            }

            return NotFound();
        }
        //POST api/commands
        [HttpPost]
        public ActionResult<CommandReadDto> CreateCommand(CommandCreateDto commandCreateDto)
        {
            var commandModel = _mapper.Map<Command>(commandCreateDto);

            _repository.CreateCommand(commandModel);

            _repository.SaveChanges();

            var commandReadDto = _mapper.Map<CommandReadDto>(commandModel);

            return CreatedAtRoute(nameof(GetCommandById), new { Id = commandReadDto.Id }, commandReadDto);
        }

        //PUT api/commands/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateCommands(int id, CommandUpdateDto commandUpdateDto)
        {
            var commandItem = _repository.GetCommandById(id);

            if (commandItem == null)
            {
                return NotFound();
            }

            _mapper.Map(commandUpdateDto, commandItem);

            _repository.UpdateCommand(commandItem);

            _repository.SaveChanges();

            return NoContent();
        }
        //PATCH api/commnand/api/{id}
        [HttpPatch("{id}")]
        public ActionResult PartialUpdateCommands(int id, JsonPatchDocument<CommandUpdateDto> patchDocument)
        {
            var commandItem = _repository.GetCommandById(id);

            if(commandItem ==null)
            {
                return NotFound();
            }

            var commandToPatch= _mapper.Map<CommandUpdateDto>(commandItem);
            patchDocument.ApplyTo(commandToPatch,ModelState);

            if(!TryValidateModel(commandToPatch))
            {
                return ValidationProblem(ModelState);
            }

            _mapper.Map(commandToPatch, commandItem);

            _repository.UpdateCommand(commandItem);

            _repository.SaveChanges();

            return NoContent();
        }

        //DELETE api/command/api/{id}
        [HttpDelete("{id}")]
        public ActionResult DeleteCommand(int id)
        {
            var commandItem = _repository.GetCommandById(id);

            if(commandItem ==null)
            {
                return NotFound();
            }

            _repository.DeleteCommand(commandItem);

            _repository.SaveChanges();

            return NoContent();
        }
    }
}