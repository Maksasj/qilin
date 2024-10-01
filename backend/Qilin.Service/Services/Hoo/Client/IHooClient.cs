using Qilin.Service.Models.Hoo;

namespace Qilin.Service.Services.Hoo.Client
{
    public interface IHooClient
    {
        IHooFileCollection GetFilesAsync();
    }
}
