using System.ComponentModel.DataAnnotations;

namespace Qilin.Service.Models.Response
{
    public class TagResponseModel
    {
        [Required]
        public Tag Value { get; set; }

        [Required]
        public TagStyle Style { get; set; }

        [Required]
        public Guid[] ParentTagIds { get; set; }
    }
}
