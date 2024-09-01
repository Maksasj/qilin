namespace Qilin.Service.Models.Response
{
    public class TagResponseModel
    {
        public Tag Value { get; set; }

        public Guid[] ParentTagIds { get; set; }
    }
}
