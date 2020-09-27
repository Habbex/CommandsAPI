using System.ComponentModel.DataAnnotations;
namespace Commander.Dtos
{
    public class CommandCreateDto
    {
        [Required]
        public string HowTo { get; set; }
        [Required]
        public string Line { get; set; }
        [Required]
        public string Platform { get; set; }
        public string Syntax {get; set;}
    }
}