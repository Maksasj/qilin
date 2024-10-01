using Qilin.Service.Models.Hoo;

namespace Qilin.Service.Services.Hoo.Client
{
    public interface IHooFileCollection
    {
        IAsyncEnumerator<HooFileModel> GetAsyncEnumerator();
    }
}
