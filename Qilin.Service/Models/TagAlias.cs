using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(TagId))]
    public class TagAlias
    {
        [Required]
        public Guid TagId { get; set; }

        [Required]
        public string TagTitle { get; set; }
    }
}
