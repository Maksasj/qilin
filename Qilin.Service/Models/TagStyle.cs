using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(TagId))]
    public class TagStyle
    {
        [Required]
        public Guid TagId { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public string Emoji { get; set; }
    }
}
