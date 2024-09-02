using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(Id))]
    public class TagStyle
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string StyleTitle { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public string Emoji { get; set; }
    }
}
