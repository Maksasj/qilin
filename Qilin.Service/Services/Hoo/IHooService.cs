using Microsoft.AspNetCore.Mvc;
using Qilin.Service.Models.Hoo;

namespace Qilin.Service.Services.Hoo
{
    public interface IHooService
    {
        Task SyncAsync();

        Task ClearCacheAsync();
    }
}
