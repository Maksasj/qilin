using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(TagId), nameof(ParentId))]
    public class TagRelation
    {
        [Required]
        public Guid TagId { get; set; }

        [Required]
        public Guid ParentId { get; set; }
    }
}
