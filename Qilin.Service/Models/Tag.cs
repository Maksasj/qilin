using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    public class Tag
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string? Description { get; set; }
    }
}
