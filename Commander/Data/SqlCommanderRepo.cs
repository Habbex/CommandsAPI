using System;
using System.Collections.Generic;
using System.Linq;
using Commander.Data;
using Commander.Models;

namespace Commander.Data
{
    public class SqlCommanderRepo : ICommanderRepo
    {
        private readonly CommanderContext _context;

        public SqlCommanderRepo(CommanderContext context)
        {
            _context = context;
        }

        public void CreateCommand(Command cmd)
        {
           if(cmd == null)
           {
               throw new ArgumentNullException(nameof(cmd));
           }
           _context.Add(cmd);
        }

        public void DeleteCommand(Command cmd)
        {
            if(cmd == null)
           {
               throw new ArgumentNullException(nameof(cmd));
           }

           _context.Commands.Remove(cmd);
        }

        public IEnumerable<Command> GetAllCommands()
        {
            return _context.Commands.ToList();
        }

        public IEnumerable<Command> GetAllCommandsByPlatform(string platform)
        {
            return _context.Commands.Where(x=>x.Platform.Contains(platform)).ToList();
        }

        public Command GetCommandById(int id)
        {
            return _context.Commands.FirstOrDefault(x => x.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges()) >= 0;
        }

        public void UpdateCommand(Command cmd)
        {
           //Nothing
        }
    }
}