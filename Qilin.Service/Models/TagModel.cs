using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    public class TagModel
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string? Description { get; set; }
    }
}
