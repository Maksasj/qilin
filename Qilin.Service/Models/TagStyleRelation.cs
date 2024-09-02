using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(TagId))]
    public class TagStyleRelation
    {
        [Required]
        public Guid TagId { get; set; }

        [Required]
        public Guid StyleId { get; set; }
    }
}