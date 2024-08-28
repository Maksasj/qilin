namespace Qilin.Service.Models.Hoo
{
    public class HooFilePageResponseModel
    {
        public int PageIndex { get; set; }

        public int ItemCount { get; set; }

        public HooFileModel[] Files { get; set; }
    }
}
