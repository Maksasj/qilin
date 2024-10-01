namespace Qilin.Service.Models.Response
{
    public class TagsPageResponseModel
    {
        public int PageIndex { get; set; }

        public int ItemCount { get; set; }

        public TagResponseModel[] Tags { get; set; }
    }
}
