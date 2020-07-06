using System.Collections.Generic;
using Commander.Models;

namespace Commander.Data
{
    public class MockCommanderRepo : ICommanderRepo
    {
        public void CreateCommand(Command cmd)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteCommand(Command cmd)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Command> GetAllCommands()
        {
            var commands= new List<Command>{
                new Command{Id= 0, HowTo="Test: How To 0", Line="Test: Line 0", Platform="Test: Platform 0"},
                new Command{Id= 1, HowTo="Test: How To 1", Line="Test: Line 1", Platform="Test: Platform 1"},
                new Command{Id= 2, HowTo="Test: How To 2", Line="Test: Line 2", Platform="Test: Platform 2"}
            };
            return commands;
        }

        public IEnumerable<Command> GetAllCommandsByPlatform(string platform)
        {
            throw new System.NotImplementedException();
        }

        public Command GetCommandById(int id)
        {
            return new Command{
                Id= 0,
                HowTo= "Test: How To",
                Line= "Test: Line",
                Platform="Test: Platform"
            };
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }

        public void UpdateCommand(Command cmd)
        {
            throw new System.NotImplementedException();
        }
    }
}