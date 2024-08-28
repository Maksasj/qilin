namespace Qilin.Service.Models.Response
{
    public class EntitiesPageResponseModel
    {
        public int PageIndex { get; set; }

        public int ItemCount { get; set; }

        public Entity[] Entities { get; set; }
    }
}
