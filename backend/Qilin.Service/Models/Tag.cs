using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(Id))]
    public class Tag
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string? Description { get; set; }

        public DateTimeOffset CreatedDate { get; set; }
        
        public DateTimeOffset LastModificationDate { get; set; }
    }
}
