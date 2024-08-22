using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(EntityId), nameof(TagId))]
    public class EntityTagRelation
    {
        [Required]
        public Guid EntityId { get; set; }

        [Required]
        public Guid TagId { get; set; }
    }
}
