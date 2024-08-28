using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models
{
    [PrimaryKey(nameof(Id))]
    public class Entity
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Type { get; set; }

        public string Name { get; set; }
    }
}
