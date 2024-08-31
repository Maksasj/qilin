namespace Qilin.Service.Models.Response
{
    public class TagResponseModel
    {
        public Tag Value { get; set; }

        public TagResponseModel[] ParentTags { get; set; }
    }
}
